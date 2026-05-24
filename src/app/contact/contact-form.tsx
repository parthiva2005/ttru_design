"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/button";

const inputCx =
  "block w-full bg-[color:var(--color-paper)] border border-[color:var(--color-paper-border)] px-4 py-3 text-sm text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-ink)] focus:outline-none";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = (await res.json()) as { message?: string };
      if (!res.ok) throw new Error(data.message ?? "Could not send.");
      setStatus("ok");
      setFeedback(data.message ?? "Message received. Talk soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper)] p-8 md:p-10"
    >
      <div className="border-b border-[color:var(--color-paper-border)] pb-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-crimson)]">
          Send a message
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            Name *
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCx}
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            Email *
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCx}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          Subject
        </label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputCx}
          placeholder="What is this about?"
        />
      </div>

      <div className="space-y-2">
        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          Message *
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className={`${inputCx} min-h-[160px] resize-y`}
        />
      </div>

      <Button type="submit" variant="crimson" size="md" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>

      <AnimatePresence>
        {feedback ? (
          <motion.p
            key={feedback}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={
              status === "error"
                ? "text-sm text-[color:var(--color-crimson)]"
                : "text-sm text-[color:var(--color-muted)]"
            }
            role="status"
          >
            {feedback}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
