import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { ConfirmationReference } from "./reference";

export const metadata: Metadata = {
  title: "Brief received",
  description: "Your brief is in. I'll write back soon.",
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <Section variant="ink" className="!pt-32" innerClassName="max-w-3xl">
      <div className="space-y-8 text-center">
        <Eyebrow>Brief received</Eyebrow>
        <h1 className="font-display text-5xl leading-tight text-[color:var(--color-paper)] md:text-7xl">
          Got it. Thank you.
        </h1>

        <Suspense
          fallback={
            <p className="text-sm text-[color:var(--color-paper)]/55">Loading reference…</p>
          }
        >
          <ConfirmationReference />
        </Suspense>

        <div className="mx-auto max-w-xl space-y-4 text-base leading-relaxed text-[color:var(--color-paper)]/80">
          <p>
            Your brief is on my desk. I'll read it myself and write back
            within about three days — sometimes faster.
          </p>
          <p>
            If you sent reference images, I'll have them by the time I sit
            down to reply. No need to follow up.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="paper" size="md">
            Back home
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="ghost" size="md">
            Keep looking around
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
