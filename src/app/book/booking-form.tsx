"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Upload, X } from "lucide-react";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import {
  COLOR_OPTIONS,
  SERVICE_OPTIONS,
  SIZE_OPTIONS,
  TIMELINE_OPTIONS,
  bookingSchema,
  type BookingPayload,
} from "@/lib/booking-schema";

type FormState = Omit<Partial<BookingPayload>, "ageConfirmed"> & {
  ageConfirmed?: boolean;
};

type FieldErrors = Partial<Record<keyof BookingPayload, string>>;

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;

export function BookingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const initialService = (params.get("service") ?? "tattoo-design") as
    BookingPayload["service"];
  const flashSlug = params.get("flash") ?? "";
  const referenceSlug = params.get("reference") ?? "";

  const [form, setForm] = useState<FormState>({
    service: initialService,
    projectTitle: "",
    description: "",
    size: "medium",
    placement: "",
    color: "black-and-grey",
    timeline: "1-month",
    name: "",
    email: "",
    instagram: "",
    ageConfirmed: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  // Keep service in sync if the user lands here from a service page link
  useEffect(() => {
    const param = params.get("service") as BookingPayload["service"] | null;
    if (param && param !== form.service) {
      setForm((f) => ({ ...f, service: param }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as keyof BookingPayload]) return prev;
      const { [key as keyof BookingPayload]: _omitted, ...rest } = prev;
      return rest;
    });
  }

  function onFilesChange(input: FileList | null) {
    setFileError("");
    if (!input) return;
    const incoming = Array.from(input);
    const combined = [...files, ...incoming].slice(0, MAX_FILES);
    const oversize = combined.find((f) => f.size > MAX_FILE_BYTES);
    if (oversize) {
      setFileError(`"${oversize.name}" is larger than 10 MB.`);
      return;
    }
    if (files.length + incoming.length > MAX_FILES) {
      setFileError(`Up to ${MAX_FILES} reference images.`);
    }
    setFiles(combined);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");

    const parsed = bookingSchema.safeParse({
      ...form,
      // URL-only context — attached at submit, not stored in form state
      referenceSlug,
      flashSlug,
    });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof BookingPayload | undefined;
        if (field && !next[field]) next[field] = issue.message;
      }
      setErrors(next);
      // Scroll to first error
      const firstErrorKey = Object.keys(next)[0];
      if (firstErrorKey) {
        document
          .querySelector(`[data-field="${firstErrorKey}"]`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          fileCount: files.length,
        }),
      });
      const data = (await res.json()) as { reference?: string; message?: string };
      if (!res.ok) {
        throw new Error(data.message ?? "Submission failed.");
      }
      router.push(`/book/confirmed?ref=${data.reference ?? "pending"}`);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  }

  const isCommission = form.service === "commissions";
  const isEmbroidery = form.service === "embroidery";
  const placementLabel = isEmbroidery
    ? "Garment / placement"
    : isCommission
      ? "Where it lives"
      : "Body placement";
  const charCount = form.description?.length ?? 0;
  const minChars = 40;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-12 text-[color:var(--color-ink)]"
    >
      {/* Service selector ----------------------------------------------- */}
      <Fieldset
        legend="01 · What you'd like"
        hint="Pick the closest fit. The questions adapt from there."
      >
        <ChipGroup
          name="service"
          value={form.service ?? "tattoo-design"}
          onChange={(v) => set("service", v as BookingPayload["service"])}
          options={SERVICE_OPTIONS}
        />
        {flashSlug ? (
          <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-crimson)]">
            <Check size={14} /> Linked to flash: {flashSlug}
          </p>
        ) : null}
        {referenceSlug ? (
          <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-crimson)]">
            <Check size={14} /> Reference piece: {referenceSlug}
          </p>
        ) : null}
      </Fieldset>

      {/* Brief ---------------------------------------------------------- */}
      <Fieldset legend="02 · The piece">
        <Field label="Project title (optional)" data-field="projectTitle">
          <input
            type="text"
            value={form.projectTitle ?? ""}
            onChange={(e) => set("projectTitle", e.target.value)}
            maxLength={80}
            className={inputCx}
            placeholder="A short way to refer to it"
          />
        </Field>

        <Field
          label="Tell me about it"
          required
          error={errors.description}
          hint={`${charCount}/${minChars}+ characters · the more specific you are, the closer the first sketch will land`}
          data-field="description"
        >
          <textarea
            value={form.description ?? ""}
            onChange={(e) => set("description", e.target.value)}
            rows={6}
            maxLength={2000}
            className={cn(inputCx, "min-h-[160px] resize-y")}
            placeholder="What is this piece for? Who's it for? Anything in particular you've been carrying around in your head?"
          />
        </Field>

        <Field
          label="Reference images (up to 5, 10 MB each)"
          data-field="files"
        >
          <label
            htmlFor="file-upload"
            className="flex cursor-pointer items-center gap-3 border border-dashed border-[color:var(--color-ink)]/40 bg-[color:var(--color-paper-warm)] px-5 py-6 text-sm transition-colors hover:border-[color:var(--color-ink)]"
          >
            <Upload size={18} />
            <span className="text-[color:var(--color-muted)]">
              Click to attach images, or drop them here
            </span>
            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              className="sr-only"
              onChange={(e) => onFilesChange(e.target.files)}
            />
          </label>
          {fileError ? (
            <p className="mt-2 text-xs text-[color:var(--color-crimson)]">{fileError}</p>
          ) : null}
          {files.length > 0 ? (
            <ul className="mt-3 grid gap-2 text-xs">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper)] px-3 py-2"
                >
                  <span className="truncate">{f.name}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${f.name}`}
                    onClick={() => removeFile(i)}
                    className="text-[color:var(--color-muted)] hover:text-[color:var(--color-crimson)]"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </Field>
      </Fieldset>

      {/* Details -------------------------------------------------------- */}
      <Fieldset legend="03 · The specifics">
        <Field label="Size estimate" required data-field="size">
          <ChipGroup
            name="size"
            value={form.size ?? "medium"}
            onChange={(v) => set("size", v as BookingPayload["size"])}
            options={SIZE_OPTIONS}
          />
        </Field>

        <Field
          label={placementLabel}
          required
          error={errors.placement}
          data-field="placement"
        >
          <input
            type="text"
            value={form.placement ?? ""}
            onChange={(e) => set("placement", e.target.value)}
            maxLength={120}
            className={inputCx}
            placeholder={
              isEmbroidery
                ? "e.g. Levi's 501, waistband + back pockets"
                : isCommission
                  ? "e.g. framed for a hallway, A3 paper"
                  : "e.g. inner left forearm, vertical orientation"
            }
          />
        </Field>

        <Field label="Color" required data-field="color">
          <ChipGroup
            name="color"
            value={form.color ?? "black-and-grey"}
            onChange={(v) => set("color", v as BookingPayload["color"])}
            options={COLOR_OPTIONS}
          />
        </Field>

        <Field label="Timeline" required data-field="timeline">
          <ChipGroup
            name="timeline"
            value={form.timeline ?? "1-month"}
            onChange={(v) => set("timeline", v as BookingPayload["timeline"])}
            options={TIMELINE_OPTIONS}
          />
        </Field>
      </Fieldset>

      {/* Contact -------------------------------------------------------- */}
      <Fieldset legend="04 · About you">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Name" required error={errors.name} data-field="name">
            <input
              type="text"
              value={form.name ?? ""}
              onChange={(e) => set("name", e.target.value)}
              className={inputCx}
              autoComplete="name"
            />
          </Field>

          <Field label="Email" required error={errors.email} data-field="email">
            <input
              type="email"
              value={form.email ?? ""}
              onChange={(e) => set("email", e.target.value)}
              className={inputCx}
              autoComplete="email"
            />
          </Field>
        </div>

        <Field label="Instagram handle (optional)" data-field="instagram">
          <input
            type="text"
            value={form.instagram ?? ""}
            onChange={(e) => set("instagram", e.target.value)}
            className={inputCx}
            placeholder="@your_handle"
            autoComplete="username"
          />
        </Field>

        <Field error={errors.ageConfirmed} data-field="ageConfirmed">
          <label className="flex items-start gap-3 text-sm text-[color:var(--color-ink-soft)]">
            <input
              type="checkbox"
              checked={form.ageConfirmed ?? false}
              onChange={(e) => set("ageConfirmed", e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-[color:var(--color-crimson)]"
            />
            <span>
              I'm 18 years of age or older, and I understand that sending a
              brief is the start of a conversation, not a confirmed booking.
            </span>
          </label>
        </Field>
      </Fieldset>

      {/* Submit --------------------------------------------------------- */}
      <div className="space-y-4 border-t border-[color:var(--color-paper-border)] pt-8">
        <p className="text-sm text-[color:var(--color-muted)]">
          When you send this, I get an email. I'll read it personally and
          write back within about three days.
        </p>
        <AnimatePresence>
          {submitError ? (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="border border-[color:var(--color-crimson)] bg-[color:var(--color-crimson)]/5 px-4 py-3 text-sm text-[color:var(--color-crimson)]"
              role="alert"
            >
              {submitError}
            </motion.p>
          ) : null}
        </AnimatePresence>
        <Button
          type="submit"
          variant="crimson"
          size="lg"
          className="w-full md:w-auto"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send the brief →"}
        </Button>
      </div>
    </form>
  );
}

/* ===== building blocks =================================================== */

const inputCx =
  "block w-full bg-[color:var(--color-paper)] border border-[color:var(--color-paper-border)] px-4 py-3 text-sm text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-ink)] focus:outline-none";

interface FieldsetProps {
  legend: string;
  hint?: string;
  children: React.ReactNode;
}
function Fieldset({ legend, hint, children }: FieldsetProps) {
  return (
    <fieldset className="space-y-6 border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper)] p-8 md:p-10">
      <div className="flex flex-col gap-2 border-b border-[color:var(--color-paper-border)] pb-5">
        <legend className="font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-crimson)]">
          {legend}
        </legend>
        {hint ? (
          <p className="text-sm text-[color:var(--color-muted)]">{hint}</p>
        ) : null}
      </div>
      <div className="space-y-6">{children}</div>
    </fieldset>
  );
}

interface FieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  ["data-field"]?: string;
}
function Field({ label, required, error, hint, children, ...rest }: FieldProps) {
  return (
    <div className="space-y-2" {...rest}>
      {label ? (
        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {label}
          {required ? <span className="ml-1 text-[color:var(--color-crimson)]">*</span> : null}
        </label>
      ) : null}
      {children}
      {hint ? (
        <p className="text-xs text-[color:var(--color-muted)]">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-xs text-[color:var(--color-crimson)]">{error}</p>
      ) : null}
    </div>
  );
}

interface ChipGroupProps {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
}
function ChipGroup({ name, value, onChange, options }: ChipGroupProps) {
  const choices = useMemo(() => options, [options]);
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {choices.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "h-11 px-5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all",
              active
                ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                : "border border-[color:var(--color-paper-border)] bg-transparent text-[color:var(--color-muted)] hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
