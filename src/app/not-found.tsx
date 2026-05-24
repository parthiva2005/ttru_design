import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export default function NotFound() {
  return (
    <Section variant="ink" className="!pt-40 !pb-40" innerClassName="max-w-2xl text-center">
      <div className="space-y-8">
        <Eyebrow>404 — page not found</Eyebrow>
        <h1 className="font-display text-6xl leading-tight text-[color:var(--color-paper)] md:text-8xl">
          That page is
          <br />
          <span className="italic text-[color:var(--color-crimson-soft)]">not on the wall.</span>
        </h1>
        <p className="text-base leading-relaxed text-[color:var(--color-paper)]/75">
          The page you&apos;re looking for has moved or never existed. Return home, or
          step into the portfolio.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/" variant="paper" size="md">
            Home
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="ghost" size="md">
            Portfolio
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
