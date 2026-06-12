import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { getPortfolioPiece, portfolioPieces } from "@/lib/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioPieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPortfolioPiece(slug);
  if (!piece) return {};
  return {
    title: piece.title,
    description: piece.description,
    openGraph: { images: [piece.image] },
  };
}

const STATUS_COPY: Record<string, string> = {
  available: "Available to commission",
  "one-of-one": "One-of-one — placed",
  "not-for-sale": "Not for sale",
};

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const piece = getPortfolioPiece(slug);
  if (!piece) notFound();

  // Related pieces: same category, exclude self, up to 3
  const related = portfolioPieces
    .filter((p) => p.category === piece.category && p.slug !== piece.slug)
    .slice(0, 3);

  return (
    <>
      <Section variant="paper" className="!pt-28">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-ink-soft)]">
              <Image
                src={piece.image}
                alt={piece.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            {piece.healedImage ? (
              <div className="mt-6 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  Healed — three months
                </span>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-ink-soft)]">
                  <Image
                    src={piece.healedImage}
                    alt={`Healed result of ${piece.title}.`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                {piece.categoryLabel} · {piece.year}
              </span>
              <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                {piece.title}
              </h1>
            </div>

            <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
              {piece.description}
            </p>

            <blockquote className="border-l border-[color:var(--color-crimson)] pl-5 italic text-[color:var(--color-muted)]">
              &ldquo;{piece.story}&rdquo;
            </blockquote>

            <dl className="grid grid-cols-2 gap-y-4 border-y border-[color:var(--color-paper-border)] py-6 text-sm">
              <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">Year</dt>
              <dd className="text-right">{piece.year}</dd>

              <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">Medium</dt>
              <dd className="text-right">{piece.medium}</dd>

              <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">Size</dt>
              <dd className="text-right capitalize">{piece.size}</dd>

              <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">Status</dt>
              <dd className="text-right">{STATUS_COPY[piece.status]}</dd>
            </dl>

            {piece.status === "available" ? (
              <ButtonLink
                href={`/book?reference=${encodeURIComponent(piece.slug)}`}
                variant="crimson"
                size="md"
                className="self-start"
              >
                Commission a piece in this style
              </ButtonLink>
            ) : (
              <ButtonLink href="/book" variant="paper" size="md" className="self-start">
                Commission something similar
              </ButtonLink>
            )}
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section variant="paper" className="!pt-0">
          <h2 className="font-display text-2xl uppercase tracking-[0.18em] text-[color:var(--color-muted)] md:text-3xl">
            In the same body of work
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group relative block overflow-hidden bg-[color:var(--color-ink-soft)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="gallery-image object-cover group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-[color:var(--color-paper)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/70">
                    {p.categoryLabel}
                  </span>
                  <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
