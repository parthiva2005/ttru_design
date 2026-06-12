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
        <h2 className="font-display text-2xl md:text-3xl">Briefs and quotes</h2>
        <p>
          Sending a brief through the form is the start of a conversation. It
          isn't a confirmed booking and doesn't lock either of us in. Quotes
          are given on a per-piece basis, after I've read the brief and
          understood the scope.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Sessions and rescheduling</h2>
        <p>
          Once a session is scheduled, please give me at least 72 hours&apos;
          notice if you need to move it. Same-day or no-show cancellations
          may forfeit your slot for the season — the calendar is small and
          someone else is usually waiting.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Design ownership</h2>
        <p>
          The original design and sketches I make for your piece remain my
          intellectual property. You own the tattoo or drawing
          itself; reproduction rights stay with the studio.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Age policy</h2>
        <p>
          18 and older only. Valid government ID is required at the session.
          No exceptions, including with parental consent.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Touch-ups</h2>
        <p>
          One complimentary touch-up at the three-month mark for any piece
          tattooed at the studio, provided the aftercare guidance was
          followed.
        </p>

        <h2 className="pt-6 font-display text-2xl md:text-3xl">Liability</h2>
        <p>
          The studio follows Massachusetts state regulations for body art.
          Any allergies, skin conditions, or medical concerns need to be
          shared in advance. I reserve the right to decline a session if
          something feels off — that's a feature, not a bug.
        </p>

        <p className="pt-8 text-sm italic text-[color:var(--color-muted)]">
          Last updated: May 2026
        </p>
      </div>
    </Section>
  );
}
