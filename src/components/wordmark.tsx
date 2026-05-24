import Link from "next/link";
import { cn } from "@/lib/cn";

interface WordmarkProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  href?: string;
  className?: string;
}

/**
 * Brand wordmark. Sarah Quattrucci as the headline brand,
 * ttru_designs as the stylized handle. Single black accent line
 * acts as a hand-drawn rule below the name.
 */
export function Wordmark({
  variant = "dark",
  size = "md",
  withTagline = true,
  href = "/",
  className,
}: WordmarkProps) {
  const sizeMap = {
    sm: { name: "text-xl", handle: "text-[10px]" },
    md: { name: "text-2xl", handle: "text-[11px]" },
    lg: { name: "text-4xl md:text-5xl", handle: "text-xs md:text-sm" },
  } as const;

  const color = variant === "light" ? "text-[color:var(--color-paper)]" : "text-[color:var(--color-ink)]";
  const accent = variant === "light" ? "bg-[color:var(--color-paper)]/40" : "bg-[color:var(--color-ink)]/40";

  return (
    <Link
      href={href}
      aria-label="Sarah Quattrucci — home"
      className={cn("group inline-flex flex-col leading-none", color, className)}
    >
      <span
        className={cn(
          "font-display tracking-tight",
          sizeMap[size].name,
        )}
      >
        Sarah Quattrucci
      </span>
      {withTagline ? (
        <span
          className={cn(
            "mt-1 flex items-center gap-2 font-mono uppercase tracking-[0.25em]",
            sizeMap[size].handle,
          )}
        >
          <span aria-hidden="true" className={cn("h-px w-6", accent)} />
          ttru_designs
        </span>
      ) : null}
    </Link>
  );
}
