import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Eyebrow, HandRule } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { SARAH } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sarah Quattrucci — the practice, the philosophy, and the road to it.",
};

const TIMELINE = [
  { year: "2023", title: "First sketchbook of the year was a wedding present." },
  { year: "Jan 2024", title: "Opened @ttru_designs with a single panther flash piece." },
  { year: "Mar 2024", title: "First applied tattoo — a swallow on a best friend." },
  { year: "Oct 2025", title: "BSU homecoming jeans commission — first piece to outgrow Instagram." },
  { year: "2026", title: "Boutique studio launch. Booking 30 clients for the year." },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)] film-grain">
        <div className="mx-auto grid min-h-[70vh] max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-12 lg:gap-20 lg:px-12 xl:px-16">
          <div className="lg:col-span-7 space-y-8">
            <Eyebrow>About</Eyebrow>
            <h1 className="font-display text-5xl leading-[1] tracking-tight md:text-7xl lg:text-[7vw]">
              I draw quietly,
              <br />
              <span className="italic text-[color:var(--color-crimson-soft)]">on purpose.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--color-paper)]/80">
              I&apos;m Sarah Quattrucci — a fine-line tattoo artist working in a small,
              intentional volume out of the Bridgewater, Massachusetts area. I&apos;ve been
              drawing since I could hold a pencil and tattooing since January 2024.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={SARAH.processMachine}
                alt="Sarah at the machine — close-up of a working session."
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 border border-[color:var(--color-paper)]/15" />
            </div>
          </div>
        </div>
      </section>

      <HandRule variant="paper" />

      {/* THREE MOVEMENTS */}
      <Section variant="paper" className="!pt-20" innerClassName="space-y-20">
        <article className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="lg:col-span-4 font-display text-4xl leading-tight md:text-5xl">
            Where it began.
          </h2>
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              I grew up around drawing the way most kids grow up around television.
              My mother kept a stack of sketchbooks within reach in every room of
              the house. By the time I was twelve I was illustrating book covers
              for friends. By high school I was making logos for small businesses
              in town in exchange for cookies.
            </p>
            <p>
              When I started college at Bridgewater State, I thought I&apos;d be a
              graphic designer. What I actually became was the friend who would
              hand-paint a denim jacket the night before a concert.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="lg:col-span-4 font-display text-4xl leading-tight md:text-5xl">
            The practice today.
          </h2>
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              The studio is small on purpose. I take a maximum of three new
              clients per week — usually fewer. I keep the volume low because
              the work I&apos;m most proud of is the work I sat with the longest.
            </p>
            <p>
              My line is built from American traditional flash vocabulary —
              panthers, swallows, daggers, scorpions — slowed down and softened
              by botanical study. The result is something neither purely
              traditional nor purely fine-line; it is its own thing.
            </p>
            <p>
              I do not copy. I do not flash photographs. I draw every piece from
              scratch, in my own hand, and I show every healed result honestly.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="lg:col-span-4 font-display text-4xl leading-tight md:text-5xl">
            Where it&apos;s going.
          </h2>
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              In 2026 I&apos;m opening a permanent boutique studio in the South
              Shore Massachusetts area — small, sun-lit, and by appointment only.
              The studio will hold space for thirty clients a year and a quiet
              line of original flash, prints and wearables.
            </p>
            <p>
              The goal has never been to be the biggest. The goal is to be the
              one your friend tells you about in a hushed voice, the way you tell
              someone about a good bookshop.
            </p>
          </div>
        </article>
      </Section>

      <HandRule />

      {/* PHILOSOPHY */}
      <Section variant="ink">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <Eyebrow>Philosophy</Eyebrow>
          <p className="font-display text-3xl leading-snug text-[color:var(--color-paper)] md:text-5xl">
            &ldquo;A tattoo is a piece of writing the body keeps. My job is to make sure the
            sentence is one you&apos;ll still want to read in twenty years.&rdquo;
          </p>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section variant="paper">
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          A short history.
        </h2>

        <ol className="mt-12 space-y-px border border-[color:var(--color-paper-border)]">
          {TIMELINE.map((row) => (
            <li
              key={row.year}
              className="grid grid-cols-1 gap-2 bg-[color:var(--color-paper)] p-6 md:grid-cols-[160px,1fr] md:items-baseline md:gap-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-crimson)]">
                {row.year}
              </span>
              <span className="font-display text-xl md:text-2xl">
                {row.title}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* CLOSING CTA */}
      <Section variant="ink" className="!py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Now booking 2026</Eyebrow>
          <p className="font-display text-3xl text-[color:var(--color-paper)] md:text-5xl">
            If any of this resonates,
            <br />
            <span className="italic text-[color:var(--color-crimson-soft)]">let&apos;s talk.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/book" variant="crimson" size="lg">
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="https://instagram.com/ttru_designs" variant="ghost" size="lg">
              Follow on Instagram
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
