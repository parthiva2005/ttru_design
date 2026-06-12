import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for TTRU Designs.",
};

export default function PrivacyPage() {
  return (
    <Section variant="paper" className="!pt-32" innerClassName="max-w-3xl">
      <SectionHeading eyebrow="Legal" title="Privacy policy" />
      <div className="mt-10 space-y-6 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
        <p>
          This site collects the minimum amount of information needed to
          respond to your inquiry and process your booking. We do not sell or
          share personal data with third parties for marketing.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">What we collect</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>The information you submit through the booking or contact form (name, email, project details, optional Instagram handle).</li>
          <li>Reference images you choose to upload.</li>
          <li>Anonymous, aggregated traffic data via privacy-friendly analytics (no cookies, no individual tracking).</li>
        </ul>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">How we use it</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To respond to your inquiry and complete a booking.</li>
          <li>To send transactional emails related to your project (confirmations, schedule updates, aftercare).</li>
          <li>If you opt in, to send occasional updates via the newsletter — one email a month at most.</li>
        </ul>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Payments</h2>
        <p>
          All payments are processed by Stripe. We never see or store payment
          card details.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of any
          personal data we hold about you by emailing quattrucrafts@gmail.com.
        </p>

        <p className="pt-8 text-sm italic text-[color:var(--color-muted)]">
          Last updated: May 2026
        </p>
      </div>
    </Section>
  );
}
