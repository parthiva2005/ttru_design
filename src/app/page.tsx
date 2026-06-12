import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/hero";
import { Section, SectionHeading, Eyebrow, HandRule } from "@/components/section";
import { PortfolioCard } from "@/components/portfolio-card";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { getFeaturedPieces } from "@/lib/portfolio";
import { getRecentPosts } from "@/lib/journal";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { SARAH } from "@/lib/assets";

export default function HomePage() {
  const featured = getFeaturedPieces(6);
  const recent = getRecentPosts(3);

  return (
    <>
      <HomeHero />

      {/* PORTFOLIO TEASER --------------------------------------------------- */}
      <Section variant="paper">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Six pieces from the past year.</>}
            intro="A small cut of what I've been working on. Tattoo work, a pencil study, a painting, a nail set. The rest of the catalogue lives in the portfolio."
          />
          <ButtonLink href="/portfolio" variant="paper" size="md" className="self-start lg:self-end">
            See the full portfolio →
          </ButtonLink>
        </div>

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[18rem] lg:[grid-auto-flow:dense]">
            {featured.map((piece, i) => (
              <PortfolioCard key={piece.slug} piece={piece} priority={i < 3} />
            ))}
          </div>
        </Reveal>
      </Section>

      <HandRule />

      {/* SERVICES STRIP ------------------------------------------------------ */}
      <Section variant="paper" className="!pt-20 md:!pt-24">
        <SectionHeading
          eyebrow="What I make"
          title="Four kinds of work."
          intro="Tattoo work, custom embroidery and painted denim, custom canvas painting, and a few nail bookings on the side. Whichever one finds you, the process starts the same way — a brief, a sketch, a conversation."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-border)] md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col gap-4 bg-[color:var(--color-paper)] p-8 transition-colors hover:bg-[color:var(--color-paper-warm)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                By appointment
              </span>
              <h3 className="font-display text-3xl leading-tight">{service.name}</h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                {service.tagline}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-crimson)] transition-transform group-hover:translate-x-1">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* STORY BLOCK --------------------------------------------------------- */}
      <Section variant="ink">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={SARAH.sarahPortrait}
                alt="Sarah Quattrucci — portrait outdoors in a teal off-shoulder dress, holding a bouquet of white roses and eucalyptus."
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 border border-[color:var(--color-paper)]/15" />
            </div>
          </Reveal>

          <div className="lg:col-span-7 flex flex-col justify-center gap-8">
            <Eyebrow>About the artist</Eyebrow>
            <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl text-[color:var(--color-paper)]">
              I keep the schedule small so the pieces stay good.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[color:var(--color-paper)]/75 md:text-lg">
              <p>
                I've been tattooing since January of 2024, out of a small studio
                just outside Bridgewater. Before that I was drawing and painting
                — pencil on cotton paper, acrylic on canvas, the kind of work
                that taught me how to slow a line down.
              </p>
              <p>
                What I care about is the meaning behind a piece — who it's
                for, what they want it to remind them of, why now. Once we've
                got that figured out, the design tends to write itself.
              </p>
            </div>
            <ButtonLink href="/about" variant="paper" size="md" className="self-start">
              Read the full story
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL SLAB ---------------------------------------------------- */}
      <Section variant="ink" className="!pt-0">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>What clients have said</Eyebrow>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {testimonials.slice(0, 2).map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <blockquote className="space-y-4">
                  <p className="font-display text-2xl leading-snug text-[color:var(--color-paper)] md:text-3xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-paper)]/55">
                    {t.author} · {t.context}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* JOURNAL TEASER ------------------------------------------------------ */}
      <Section variant="paper">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="From the journal"
            title="Notes from the studio."
            intro="Posts about the work, the people I tattoo, and the stuff I learn between sessions. Updated when there's something worth saying."
          />
          <ButtonLink href="/journal" variant="paper" size="md" className="self-start lg:self-end">
            Read the journal →
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block space-y-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-ink-soft)]">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="gallery-image object-cover group-hover:scale-[1.04]"
                />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  {post.category} · {post.readMinutes} min read
                </div>
                <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-[color:var(--color-crimson)]">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CLOSING CTA --------------------------------------------------------- */}
      <Section variant="ink" className="!py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Image
            src="/logo.png"
            alt="TTRU Designs — SQ monogram with a tattoo machine, embroidery needle, and botanical sprig. Ink · Thread · Artistry."
            width={150}
            height={150}
            priority
            className="h-[150px] w-[150px] rounded-full shadow-lg"
          />
          <Eyebrow>Now booking</Eyebrow>
          <h2 className="font-display text-4xl leading-tight text-[color:var(--color-paper)] md:text-6xl">
            If something on this site is talking to you, write to me.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75 md:text-lg">
            Tell me a bit about what you're thinking. I read every brief
            personally and I'll get back to you within about three days.
          </p>
          <ButtonLink href="/book" variant="crimson" size="lg">
            Start a brief
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
