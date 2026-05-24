import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms & booking policy",
  description: "Booking and project terms for the studio.",
};

export default function TermsPage() {
  return (
    <Section variant="paper" className="!pt-32" innerClassName="max-w-3xl">
      <SectionHeading eyebrow="Legal" title="Terms & booking policy" />
      <div className="mt-10 space-y-6 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
        <h2 className="font-display text-2xl md:text-3xl">Deposits</h2>
        <p>
          A $25 consultation deposit secures your slot. It rolls into the
          final invoice. It is non-refundable inside seven days of your
          scheduled session.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Rescheduling</h2>
        <p>
          You may reschedule once at no cost provided you give at least 72
          hours&apos; notice. A second reschedule forfeits the deposit.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Design ownership</h2>
        <p>
          The original design and any sketches developed for your piece remain
          the artist&apos;s intellectual property. You own the tattoo or wearable
          itself; reproduction rights stay with the studio.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Age policy</h2>
        <p>
          18 and older only. Valid government ID is required at the session.
          No exceptions.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Touch-ups</h2>
        <p>
          One complimentary touch-up window is offered at three months for any
          piece tattooed in the studio, provided aftercare guidelines were
          followed.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Liability</h2>
        <p>
          The studio operates in full compliance with Massachusetts state
          regulations for body art. Any allergies or medical conditions must
          be disclosed in advance. The studio reserves the right to decline
          any session on medical or safety grounds.
        </p>

        <p className="pt-8 text-sm italic text-[color:var(--color-muted)]">
          Last updated: May 2026
        </p>
      </div>
    </Section>
  );
}
