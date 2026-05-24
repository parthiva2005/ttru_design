import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Submit a project brief. A $25 consultation deposit secures your slot and rolls into the final balance. Response within 72 hours.",
};

export default function BookPage() {
  return (
    <Section variant="paper" className="!pt-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8">
          <SectionHeading
            eyebrow="Booking"
            title={
              <>
                A brief, a deposit,
                <br />
                <span className="italic text-[color:var(--color-crimson)]">a conversation.</span>
              </>
            }
            intro="One form. The more detail you can give, the better the sketch I can come back with. I respond within 72 hours, often sooner."
          />
          <div className="space-y-5 border-y border-[color:var(--color-paper-border)] py-6 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                Deposit
              </div>
              <p>$25, non-refundable, deducted from the final invoice.</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                Response time
              </div>
              <p>Within 72 hours · Mondays through Thursdays in studio.</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                What you&apos;ll get back
              </div>
              <p>A candid yes / no / counter-proposal, a sketch timeline, and a tentative session date.</p>
            </div>
          </div>
          <p className="text-xs italic text-[color:var(--color-muted)]">
            Submitting a brief does not guarantee acceptance. Briefs are
            reviewed in order and matched against current studio availability.
          </p>
        </aside>

        <div className="lg:col-span-8">
          <Suspense
            fallback={
              <div className="h-80 animate-pulse bg-[color:var(--color-paper-warm)]" />
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}
