import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, SectionHeading } from "@/components/section";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Send a brief",
  description:
    "Tell me about a piece you'd like me to make. I read every brief personally and reply within a few days.",
};

export default function BookPage() {
  return (
    <Section variant="paper" className="!pt-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8">
          <SectionHeading
            eyebrow="Start a brief"
            title="Tell me what you're thinking."
            intro="One form. The more you can say about what you want and why, the closer my first sketch will land."
          />
          <div className="space-y-5 border-y border-[color:var(--color-paper-border)] py-6 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                What happens after you send this
              </div>
              <p>
                I'll read your brief, sit with it for a day or two, and reply
                with a yes, a no, or a counter-proposal. If it's a yes, we'll
                start on sketches.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                Response time
              </div>
              <p>About three days. Mondays through Thursdays in studio.</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                One thing
              </div>
              <p>
                I read everything myself. The clearer you can be about what
                this piece is for, the better the sketch I can come back with.
              </p>
            </div>
          </div>
          <p className="text-xs italic text-[color:var(--color-muted)]">
            Sending a brief doesn't lock anything in. Briefs that aren't the
            right fit for the studio get an honest no — usually with a
            recommendation of who would be a better hand for it.
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
