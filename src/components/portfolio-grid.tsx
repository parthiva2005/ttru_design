"use client";

import { motion } from "framer-motion";
import { PortfolioCard } from "./portfolio-card";
import type { PortfolioPiece } from "@/lib/types";

interface PortfolioGridProps {
  pieces: PortfolioPiece[];
}

/**
 * Modern editorial masonry. Four columns on desktop, two on tablet,
 * single column on mobile. `auto-rows-[18rem]` gives each tile a baseline
 * "unit"; `feature` and `tall` spans stack two of those rows. The
 * `grid-auto-flow: dense` rule packs leftover gaps automatically.
 */
export function PortfolioGrid({ pieces }: PortfolioGridProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[18rem] lg:[grid-auto-flow:dense]"
    >
      {pieces.map((piece, i) => (
        <PortfolioCard key={piece.slug} piece={piece} priority={i < 4} />
      ))}
    </motion.div>
  );
}
