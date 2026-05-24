import Image from "next/image";
import Link from "next/link";
import type { FlashDesign } from "@/lib/types";
import { cn } from "@/lib/cn";

const STATUS_BADGE: Record<
  FlashDesign["status"],
  { label: string; classes: string }
> = {
  available: {
    label: "Available",
    classes: "bg-[color:var(--color-paper)] text-[color:var(--color-ink)]",
  },
  reserved: {
    label: "Reserved",
    classes:
      "bg-[color:var(--color-ink-border)] text-[color:var(--color-paper)]/80",
  },
  taken: {
    label: "One-of-One · Taken",
    classes:
      "bg-transparent border border-[color:var(--color-paper)]/30 text-[color:var(--color-paper)]/60",
  },
};

interface FlashCardProps {
  design: FlashDesign;
}

export function FlashCard({ design }: FlashCardProps) {
  const badge = STATUS_BADGE[design.status];
  const isTaken = design.status === "taken";

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden border border-[color:var(--color-paper)]/15 bg-[color:var(--color-ink-soft)] transition-transform duration-500",
        !isTaken && "hover:-translate-y-1",
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={design.image}
          alt={design.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={cn(
            "object-cover transition-all duration-700",
            isTaken
              ? "grayscale opacity-50"
              : "saturate-0 brightness-95 contrast-[1.08] group-hover:scale-[1.05] group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100",
          )}
        />
        <span
          className={cn(
            "absolute top-3 left-3 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]",
            badge.classes,
          )}
        >
          {badge.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 text-[color:var(--color-paper)]">
        <h3 className="font-display text-2xl leading-tight">{design.title}</h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-[color:var(--color-paper)]/70">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-paper)]/50">
              Size
            </dt>
            <dd>{design.sizeRange}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-paper)]/50">
              From
            </dt>
            <dd>${design.priceFrom}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-paper)]/50">
              Suggested
            </dt>
            <dd>{design.suggestedPlacement}</dd>
          </div>
        </dl>

        {isTaken ? (
          <p className="mt-2 text-xs italic text-[color:var(--color-paper)]/40">
            Designed once, lived once. Not available again.
          </p>
        ) : (
          <Link
            href={`/book?flash=${encodeURIComponent(design.slug)}`}
            className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-paper)] hover:text-[color:var(--color-crimson-soft)] transition-colors"
          >
            Request this flash →
          </Link>
        )}
      </div>
    </article>
  );
}
