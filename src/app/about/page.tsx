import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Eyebrow, HandRule } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { SARAH } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sarah Quattrucci — fine-line tattoo artist working out of the Bridgewater, Massachusetts area.",
};

const TIMELINE = [
  { year: "Late 2023", title: "Decided I was going to actually try this." },
  { year: "January 2024", title: "Opened the @ttru_designs page. Posted my first flash drawing." },
  { year: "March 2024", title: "Tattooed my best friend — a small swallow, my first applied piece." },
  { year: "October 2025", title: "Finished the wildflower forearm sleeve — the piece that started the wait list for fine-line botanical work." },
  { year: "Now", title: "Booking thirty pieces for the year out of a small private studio." },
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
              Hi. I&apos;m Sarah.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--color-paper)]/80">
              I'm a tattoo artist working out of a small private studio near
              Bridgewater, Massachusetts. I draw, paint, and tattoo — mostly
              fine line, mostly by appointment, mostly slowly.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={SARAH.sarahPortrait}
                alt="Sarah Quattrucci — portrait outdoors in a teal off-shoulder dress, holding a bouquet of white roses and eucalyptus."
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
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
            How I got here.
          </h2>
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              I've been drawing as long as I can remember. My mom kept
              sketchbooks around the house growing up and I always had one
              going. In middle school I started making little drawings for
              friends — birthday cards, illustrated playlists, the kind of
              stuff people kept on their fridges.
            </p>
            <p>
              In high school I started painting on clothes. Jackets, jeans,
              the occasional pair of Vans. By the time I got to Bridgewater
              State I was painting people's homecoming outfits in exchange
              for coffee money.
            </p>
            <p>
              I picked up tattooing in late 2023. I'd been around it for
              years through friends and through the artists I followed
              online, and at some point it stopped feeling like a leap. I
              started with flash on paper, then built up the chair time
              slowly, and the work I do now is mostly fine-line — soft
              traditional vocabulary, lots of botanical detail.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="lg:col-span-4 font-display text-4xl leading-tight md:text-5xl">
            How I work now.
          </h2>
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              The studio is small on purpose. I take a maximum of three new
              clients a week and most weeks it's fewer. There's no walk-in
              traffic, no second chair, no rush. I'd rather make thirty good
              pieces a year than a hundred okay ones.
            </p>
            <p>
              I draw every piece myself from scratch. I don't flash photos.
              I don't run designs through an AI to speed things up. If you
              send me a reference, I treat it as a starting point — what's
              the feeling you want? — and then I draw something new in my
              own line.
            </p>
            <p>
              I show healed photos honestly, including the bits that
              softened more than I wanted them to. The only way to learn
              what's actually working is to look at it three months later
              in plain daylight.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="lg:col-span-4 font-display text-4xl leading-tight md:text-5xl">
            Where this is going.
          </h2>
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              I'm building toward a permanent boutique studio in the South
              Shore in 2026 — small, sun-lit, by appointment only. Same
              client volume, more space to work, room for a guest chair
              every few months.
            </p>
            <p>
              Past that, I don't have a five-year plan and I'm not chasing
              one. The goal is to keep getting better at the line and to
              keep making pieces that mean something to the people I make
              them for. The rest takes care of itself.
            </p>
          </div>
        </article>
      </Section>

      <HandRule />

      {/* PHILOSOPHY */}
      <Section variant="ink">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <Eyebrow>What I believe about tattoos</Eyebrow>
          <p className="font-display text-3xl leading-snug text-[color:var(--color-paper)] md:text-5xl">
            &ldquo;A tattoo is a thing your body writes down for you. My job is to
            help you write a sentence you&apos;ll still want to read in twenty
            years.&rdquo;
          </p>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section variant="paper">
        <Eyebrow>The short version</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          A few dates that mattered.
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
          <Eyebrow>Booking now</Eyebrow>
          <p className="font-display text-3xl text-[color:var(--color-paper)] md:text-5xl">
            If any of this sounds like the kind of person you&apos;d want making your tattoo, write to me.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/book" variant="crimson" size="lg">
              Start a brief
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
