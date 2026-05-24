import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/hero";
import { Section, SectionHeading, Eyebrow, HandRule } from "@/components/section";
import { PortfolioCard } from "@/components/portfolio-card";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { getFeaturedPieces } from "@/lib/portfolio";
import { getAvailableFlash } from "@/lib/flash";
import { getRecentPosts } from "@/lib/journal";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { SARAH } from "@/lib/assets";

export default function HomePage() {
  const featured = getFeaturedPieces(6);
  const flash = getAvailableFlash().slice(0, 4);
  const recent = getRecentPosts(3);

  return (
    <>
      <HomeHero />

      {/* PORTFOLIO TEASER --------------------------------------------------- */}
      <Section variant="paper">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Six pieces from this year&apos;s
                <br />
                <span className="italic text-[color:var(--color-crimson)]">quiet shelf.</span>
              </>
            }
            intro="A small, hand-picked cut of the work — flash, botanical, custom wearables and a healed forearm panther. The full catalogue lives in the portfolio."
          />
          <ButtonLink href="/portfolio" variant="paper" size="md" className="self-start lg:self-end">
            Full portfolio →
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
          eyebrow="Services"
          title="Four ways to commission."
          intro="Whether it is a single-line wildflower or a fifteen-hour pair of painted jeans, the studio holds the same standard."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-border)] md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col gap-4 bg-[color:var(--color-paper)] p-8 transition-colors hover:bg-[color:var(--color-paper-warm)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                {service.startingPrice.split(" · ")[0]}
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
                src={SARAH.botanicalBwHealed}
                alt="Healed fine-line botanical tattoo photographed outdoors — one of Sarah's signature pieces."
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 border border-[color:var(--color-paper)]/15" />
            </div>
          </Reveal>

          <div className="lg:col-span-7 flex flex-col justify-center gap-8">
            <Eyebrow>About the artist</Eyebrow>
            <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl text-[color:var(--color-paper)]">
              I work in a small, intentional volume — and I&apos;d rather draw fewer
              pieces, more carefully.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[color:var(--color-paper)]/75 md:text-lg">
              <p>
                I&apos;ve been making this work since January 2024 from a studio just
                outside Bridgewater. My line was sharpened on traditional flash —
                panthers, swallows, scorpions — and softened by a steady diet of
                botanical study.
              </p>
              <p>
                What I sell, more than anything, is meaning. Almost every piece I
                draw begins with a story someone wanted marked permanently. My
                job is to listen carefully, then draw quietly.
              </p>
            </div>
            <ButtonLink href="/about" variant="paper" size="md" className="self-start">
              Read the full story
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* FLASH TEASER -------------------------------------------------------- */}
      <Section variant="paper">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Flash sheet"
            title="Available now."
            intro="Designs that have been drawn but not yet placed. Each is offered once — when it&apos;s taken, it is taken for good."
          />
          <ButtonLink href="/flash" variant="paper" size="md" className="self-start lg:self-end">
            See the full sheet →
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flash.map((design) => (
            <Link
              key={design.slug}
              href={`/book?flash=${encodeURIComponent(design.slug)}`}
              className="group block bg-[color:var(--color-ink-soft)] text-[color:var(--color-paper)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={design.image}
                  alt={design.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover saturate-0 brightness-95 contrast-[1.08] transition-all duration-700 group-hover:scale-[1.05] group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="font-display text-lg leading-tight">
                  {design.title}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-paper)]/70">
                  ${design.priceFrom}+
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIAL SLAB ---------------------------------------------------- */}
      <Section variant="ink">
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
            title="Process, healed results, studio notes."
            intro="A slow-publication journal — short essays on the work, written between sessions."
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
                  className="object-cover saturate-0 brightness-95 contrast-[1.08] transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
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
          <Eyebrow>Now booking</Eyebrow>
          <h2 className="font-display text-4xl leading-tight text-[color:var(--color-paper)] md:text-6xl">
            If you&apos;ve been waiting for the right tattoo, this is the
            <span className="italic text-[color:var(--color-crimson-soft)]"> sign.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75 md:text-lg">
            A $25 consultation deposit holds your slot and rolls into your final
            balance. Most consultations happen within seventy-two hours of
            inquiry.
          </p>
          <ButtonLink href="/book" variant="crimson" size="lg">
            Book a Consultation
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
