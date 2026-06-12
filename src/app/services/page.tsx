import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading, HandRule } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tattoo design, custom embroidery and painted denim, custom canvas painting, and nail bookings — by appointment.",
};

export default function ServicesPage() {
  return (
    <>
      <Section variant="paper" className="!pt-32">
        <SectionHeading
          eyebrow="What I make"
          title="Four kinds of work, one studio."
          intro="Tattoo work, custom embroidery and painted denim, custom canvas painting, and the occasional nail booking. I take all four seriously and I take them all by appointment."
        />
      </Section>

      <HandRule />

      <Section variant="paper" className="!pt-12" innerClassName="space-y-24">
        {services.map((service, idx) => {
          // Alternate left / right per row. Image takes order 1 on even rows,
          // order 2 on odd; text mirrors it.
          const imageFirst = idx % 2 === 0;
          return (
          <article
            key={service.slug}
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div
              className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[color:var(--color-ink-soft)]">
                <Image
                  src={service.heroImage}
                  alt={`${service.name} — example work.`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              className={`lg:col-span-5 flex flex-col justify-center gap-6 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                0{idx + 1} · By appointment
              </span>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                {service.name}
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink
                  href={`/services/${service.slug}`}
                  variant="paper"
                  size="md"
                >
                  Read the brief
                </ButtonLink>
                <Link
                  href={`/book?service=${service.slug}`}
                  className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-crimson)] link-underline"
                >
                  Skip ahead and write me →
                </Link>
              </div>
            </div>
          </article>
          );
        })}
      </Section>
    </>
  );
}
