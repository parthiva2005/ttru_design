import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { getJournalPost, journalPosts } from "@/lib/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.coverImage], type: "article" },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const related = journalPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Section variant="paper" className="!pt-28" innerClassName="max-w-3xl">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
        >
          <ArrowLeft size={14} />
          Back to journal
        </Link>

        <header className="mt-10 space-y-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-crimson)]">
            {post.category} · {post.readMinutes} min read · {formatDate(post.publishedAt)}
          </div>
          <h1 className="font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="text-lg italic leading-relaxed text-[color:var(--color-muted)]">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden bg-[color:var(--color-ink-soft)]">
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64rem"
            className="object-cover"
          />
        </div>

        <article className="prose-editorial mt-12 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)] md:text-xl md:leading-[1.7]">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        <footer className="mt-16 flex flex-col items-start gap-4 border-t border-[color:var(--color-paper-border)] pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            Sarah Quattrucci · {formatDate(post.publishedAt)}
          </p>
          <ButtonLink href="/book" variant="paper" size="md">
            Book a consultation
          </ButtonLink>
        </footer>
      </Section>

      {related.length > 0 ? (
        <Section variant="paper" className="!pt-0">
          <h2 className="font-display text-2xl uppercase tracking-[0.15em] text-[color:var(--color-muted)] md:text-3xl">
            Keep reading
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="group block space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-ink-soft)]">
                  <Image
                    src={p.coverImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  {p.category}
                </span>
                <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-[color:var(--color-crimson)]">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
