"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { portfolioCategories } from "@/lib/portfolio";
import type { PortfolioPiece } from "@/lib/types";
import { cn } from "@/lib/cn";

interface PortfolioClientProps {
  pieces: PortfolioPiece[];
}

export function PortfolioClient({ pieces }: PortfolioClientProps) {
  const [filter, setFilter] = useState<PortfolioPiece["category"] | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    if (filter === "all") return pieces;
    return pieces.filter((p) => p.category === filter);
  }, [filter, pieces]);

  return (
    <div className="space-y-12">
      {/* Filter chips */}
      <div className="flex flex-wrap items-center gap-2 border-y border-[color:var(--color-paper-border)] py-5">
        <span className="mr-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          Filter
        </span>
        {portfolioCategories.map((cat) => {
          const active = filter === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={cn(
                "h-9 px-4 font-mono text-[11px] uppercase tracking-[0.25em] transition-all",
                active
                  ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                  : "bg-transparent text-[color:var(--color-muted)] hover:bg-[color:var(--color-paper-warm)] hover:text-[color:var(--color-ink)]",
              )}
            >
              {cat.label}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <PortfolioGrid pieces={filtered} />
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-[color:var(--color-muted)]">
          Nothing in this category yet.
        </p>
      ) : null}
    </div>
  );
}
