"use client";

import { useSearchParams } from "next/navigation";

export function ConfirmationReference() {
  const params = useSearchParams();
  const ref = params.get("ref") ?? "pending";
  return (
    <p className="inline-flex items-center gap-3 border border-[color:var(--color-paper)]/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/70">
      <span>Reference</span>
      <span className="text-[color:var(--color-paper)]">{ref}</span>
    </p>
  );
}
