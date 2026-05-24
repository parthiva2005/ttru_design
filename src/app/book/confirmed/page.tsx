import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { ConfirmationReference } from "./reference";

export const metadata: Metadata = {
  title: "Brief received",
  description: "Your booking brief was received. Next step: deposit.",
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <Section variant="ink" className="!pt-32" innerClassName="max-w-3xl">
      <div className="space-y-8 text-center">
        <Eyebrow>Brief received</Eyebrow>
        <h1 className="font-display text-5xl leading-tight text-[color:var(--color-paper)] md:text-7xl">
          Thank you. The
          <br />
          <span className="italic text-[color:var(--color-crimson-soft)]">conversation begins.</span>
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
            Your brief is on Sarah&apos;s desk. You&apos;ll receive a confirmation
            email within a few minutes and a personal response within 72 hours.
          </p>
          <p>
            The $25 consultation deposit will be collected via a secure
            Stripe checkout link in your confirmation email. The slot is held
            for you for 48 hours pending deposit.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="paper" size="md">
            Return home
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="ghost" size="md">
            Keep browsing
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
