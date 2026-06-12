import Image from "next/image";
import Link from "next/link";
import type { PortfolioPiece, PortfolioSpan } from "@/lib/types";
import { cn } from "@/lib/cn";

interface PortfolioCardProps {
  piece: PortfolioPiece;
  priority?: boolean;
  /** Layout span — overrides `piece.span` when provided. */
  span?: PortfolioSpan;
  className?: string;
}

/**
 * Spans drive a 4-column masonry on desktop. The grid uses
 * `grid-auto-flow: dense` (see `PortfolioGrid`) so dropping a feature
 * tile anywhere in the order produces a magazine-style layout.
 */
const SPAN_CLASSES: Record<PortfolioSpan, string> = {
  default: "",
  square: "",
  tall: "lg:row-span-2",
  wide: "sm:col-span-2",
  feature: "sm:col-span-2 lg:row-span-2",
};

const ASPECT_CLASSES: Record<PortfolioSpan, string> = {
  default: "aspect-[4/5]",
  square: "aspect-square",
  tall: "aspect-[3/5]",
  wide: "aspect-[16/10]",
  feature: "aspect-[4/5]",
};

export function PortfolioCard({
  piece,
  priority,
  span,
  className,
}: PortfolioCardProps) {
  const resolved: PortfolioSpan = span ?? piece.span ?? "default";

  const statusLabel: Record<PortfolioPiece["status"], string> = {
    available: "Available as flash",
    "one-of-one": "One-of-one · sold",
    "not-for-sale": "Not for sale",
  };

  return (
    <Link
      href={`/portfolio/${piece.slug}`}
      aria-label={`${piece.title} — ${piece.categoryLabel}, ${piece.year}`}
      className={cn(
        "group relative block overflow-hidden bg-[color:var(--color-ink-soft)]",
        SPAN_CLASSES[resolved],
        className,
      )}
    >
      <div className={cn("relative w-full overflow-hidden", ASPECT_CLASSES[resolved])}>
        <Image
          src={piece.image}
          alt={piece.alt}
          fill
          priority={priority}
          sizes={
            resolved === "feature" || resolved === "wide"
              ? "(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          }
          className="gallery-image object-cover group-hover:scale-[1.045]"
        />

        {/* Vignette + reveal overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90"
        />

        {/* Hairline corner accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-[color:var(--color-paper)]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r border-b border-[color:var(--color-paper)]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      {/* Caption — always visible at bottom, intensifies on hover */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 p-5 text-[color:var(--color-paper)]">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/75">
          {piece.categoryLabel} · {piece.year}
        </span>
        <h3 className="font-display text-2xl leading-tight md:text-[1.6rem]">
          {piece.title}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-paper)]/0 transition-colors duration-500 group-hover:text-[color:var(--color-paper)]/75">
          {statusLabel[piece.status]}
        </span>
      </div>
    </Link>
  );
}
