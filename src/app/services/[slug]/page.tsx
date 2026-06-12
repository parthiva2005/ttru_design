import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section, Eyebrow, HandRule } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { getService, services } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug as ServiceSlug);
  if (!service) return {};
  return { title: service.name, description: service.tagline };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug as ServiceSlug);
  if (!service) notFound();

  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper)] film-grain">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[color:var(--color-ink)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1400px] flex-col justify-end px-6 py-28 lg:px-12 xl:px-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-paper)]/70 hover:text-[color:var(--color-paper)]"
          >
            <ArrowLeft size={14} />
            All services
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--color-paper)]/80">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* OVERVIEW ------------------------------------------------------- */}
      <Section variant="paper" className="!pt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <Eyebrow>The work</Eyebrow>
            <p className="font-display text-3xl leading-snug md:text-4xl">
              {service.description}
            </p>
          </div>

          <aside className="lg:col-span-5 self-start space-y-6 border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-warm)] p-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                How it works
              </span>
              <p className="mt-1 text-base">
                Send me a brief through the form. I read it, write back, and
                we go from there. Quotes happen once I understand the piece.
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                How long it takes
              </span>
              <p className="mt-1 text-base">{service.turnaround}</p>
            </div>
            <ButtonLink
              href={`/book?service=${service.slug}`}
              variant="crimson"
              size="md"
              className="w-full"
            >
              Send a brief
            </ButtonLink>
          </aside>
        </div>
      </Section>

      <HandRule />

      {/* PROCESS -------------------------------------------------------- */}
      <Section variant="paper" className="!pt-20">
        <Eyebrow>How a piece gets made</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          From the first email to the finished piece.
        </h2>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-border)] md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <li
              key={step.step}
              className="flex flex-col gap-3 bg-[color:var(--color-paper)] p-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-crimson)]">
                Step 0{i + 1}
              </span>
              <h3 className="font-display text-2xl">{step.step}</h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* GALLERY -------------------------------------------------------- */}
      <Section variant="paper" className="!pt-0">
        <Eyebrow>Selected examples</Eyebrow>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.galleryImages.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] overflow-hidden bg-[color:var(--color-ink-soft)]"
            >
              <Image
                src={src}
                alt={`${service.name} example ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="gallery-image object-cover group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* FAQS ----------------------------------------------------------- */}
      <Section variant="ink">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Things people ask</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--color-paper)] md:text-5xl">
              Before you write.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <dl className="space-y-px border border-[color:var(--color-paper)]/15">
              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-[color:var(--color-ink-soft)] open:bg-[color:var(--color-ink-border)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-display text-xl text-[color:var(--color-paper)] md:text-2xl">
                    <span>{faq.q}</span>
                    <span className="font-mono text-2xl text-[color:var(--color-crimson-soft)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {faq.a}
                  </div>
                </details>
              ))}
            </dl>

            <ButtonLink
              href={`/book?service=${service.slug}`}
              variant="paper"
              size="md"
              className="mt-10"
            >
              Continue to the brief
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
