"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "../button";
import { SARAH } from "@/lib/assets";

/**
 * Cinematic landing hero.
 *
 * Layout (desktop):  large editorial type on the left, single signature
 * portfolio plate on the right framed by a thin crimson rule.
 * The H1 reveals one word at a time; the rule draws on; a slow line-art
 * accent (animated SVG dasharray) traces in over ~3 seconds.
 */
export function HomeHero() {
  const reduce = useReducedMotion();

  const headlineWords = [
    "Permanent",
    "art,",
    "drawn",
    "with",
    "patience.",
  ];

  return (
    <section
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)] film-grain"
    >
      {/* Hero is full-bleed and tall enough to feel like an opening spread */}
      <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-12 lg:gap-16 lg:px-12 xl:px-16">
        {/* Left column — type */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-paper)]/55"
          >
            <span className="h-px w-10 bg-[color:var(--color-paper)]/35" />
            Bridgewater, Massachusetts · Est. 2024
          </motion.div>

          <h1 className="font-display text-[14vw] leading-[0.95] tracking-tight text-[color:var(--color-paper)] sm:text-[10vw] lg:text-[7.5vw] xl:text-[6.5vw]">
            {reduce ? (
              <span>Permanent art, drawn with patience.</span>
            ) : (
              <span className="block">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 32, rotateX: -12 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.85,
                      ease: [0.22, 0.61, 0.36, 1],
                      delay: 0.15 + i * 0.12,
                    }}
                    className="inline-block pr-[0.18em]"
                  >
                    {i === 4 ? (
                      <span className="italic text-[color:var(--color-crimson-soft)]">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </span>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70 md:text-lg"
          >
            Sarah Quattrucci is a fine-line tattoo artist working in a small,
            intentional volume — pairing traditional American flash vocabulary
            with botanical detail to mark the stories worth keeping.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/book" variant="crimson" size="lg">
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="ghost" size="lg">
              See the work
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-4 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-[color:var(--color-paper)]/45"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-crimson-soft)]" />
              Now taking 2026 bookings
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Limited availability</span>
          </motion.div>
        </div>

        {/* Right column — signature plate framed by a hand-drawn rule */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
          >
            <Image
              src={SARAH.processMachine}
              alt="Sarah at the machine — a working frame from a multi-hour session."
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            {/* Frame */}
            <div className="pointer-events-none absolute inset-0 border border-[color:var(--color-paper)]/15" />
            <div className="pointer-events-none absolute -left-3 -top-3 h-12 w-12 border-l border-t border-[color:var(--color-crimson)]" />
            <div className="pointer-events-none absolute -right-3 -bottom-3 h-12 w-12 border-r border-b border-[color:var(--color-crimson)]" />
          </motion.div>

          {/* Animated line-art accent — slow draw-on, 3.5s */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewBox="0 0 320 80"
            aria-hidden="true"
            className="absolute -bottom-10 left-1/2 hidden w-64 -translate-x-1/2 lg:block"
          >
            <motion.path
              d="M10 60 C 60 10, 120 70, 160 40 S 280 10, 310 50"
              fill="none"
              stroke="var(--color-paper)"
              strokeOpacity="0.45"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[color:var(--color-paper)]/45 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
          Scroll
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-[color:var(--color-paper)]/45"
        />
      </motion.div>
    </section>
  );
}
