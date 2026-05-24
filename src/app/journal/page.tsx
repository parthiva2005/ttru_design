import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Process notes, healed-result write-ups and studio dispatches from Sarah Quattrucci.",
};

const CATEGORY_COLOR: Record<string, string> = {
  Process: "text-[color:var(--color-crimson)]",
  "Healed Results": "text-[color:var(--color-ink)]",
  Sketchbook: "text-[color:var(--color-muted)]",
  "Studio Notes": "text-[color:var(--color-ink-soft)]",
};

export default function JournalPage() {
  const sorted = [...journalPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const [featured, ...rest] = sorted;

  return (
    <Section variant="paper" className="!pt-32">
      <SectionHeading
        eyebrow="Journal"
        title={
          <>
            Written between
            <br />
            <span className="italic text-[color:var(--color-crimson)]">sessions.</span>
          </>
        }
        intro="Short essays on process, healed results and the studio. Published when there&apos;s something worth saying, not on a schedule."
      />

      {/* Featured */}
      {featured ? (
        <Link
          href={`/journal/${featured.slug}`}
          className="group mt-16 block border-t border-b border-[color:var(--color-paper-border)] py-10"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[color:var(--color-ink-soft)]">
              <Image
                src={featured.coverImage}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className={`font-mono text-[11px] uppercase tracking-[0.3em] ${CATEGORY_COLOR[featured.category]}`}>
                {featured.category} · {featured.readMinutes} min read
              </span>
              <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-crimson)] link-underline">
                Read the essay →
              </span>
            </div>
          </div>
        </Link>
      ) : null}

      {/* Rest */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/journal/${post.slug}`} className="group block space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-ink-soft)]">
              <Image
                src={post.coverImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover saturate-0 brightness-95 contrast-[1.08] transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-100 group-hover:contrast-100"
              />
            </div>
            <span className={`font-mono text-[10px] uppercase tracking-[0.3em] ${CATEGORY_COLOR[post.category]}`}>
              {post.category} · {post.readMinutes} min
            </span>
            <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-[color:var(--color-crimson)]">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
