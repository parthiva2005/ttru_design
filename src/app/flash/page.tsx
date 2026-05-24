import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { FlashCard } from "@/components/flash-card";
import { flashDesigns } from "@/lib/flash";

export const metadata: Metadata = {
  title: "Flash sheet",
  description:
    "Bookable flash designs by Sarah Quattrucci. Each piece is offered as a one-of-one — when it is taken, it is taken.",
};

export default function FlashPage() {
  const available = flashDesigns.filter((d) => d.status === "available");
  const reserved = flashDesigns.filter((d) => d.status === "reserved");
  const taken = flashDesigns.filter((d) => d.status === "taken");

  return (
    <Section variant="ink" className="!pt-32" innerClassName="space-y-20">
      <SectionHeading
        variant="ink"
        eyebrow="Flash sheet"
        title={
          <>
            Drawn once.
            <br />
            <span className="italic text-[color:var(--color-crimson-soft)]">Worn once.</span>
          </>
        }
        intro="Each flash design here is a one-of-one. Reserve to book the consultation; once placed, the design is permanently retired from the sheet."
      />

      <div>
        <div className="mb-8 flex items-baseline justify-between">
          <h3 className="font-display text-3xl text-[color:var(--color-paper)]">
            Available now
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/55">
            {available.length} pieces
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {available.map((d) => (
            <FlashCard key={d.slug} design={d} />
          ))}
        </div>
      </div>

      {reserved.length > 0 ? (
        <div>
          <div className="mb-8 flex items-baseline justify-between">
            <h3 className="font-display text-3xl text-[color:var(--color-paper)]">
              Reserved
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/55">
              awaiting deposit confirmation
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reserved.map((d) => (
              <FlashCard key={d.slug} design={d} />
            ))}
          </div>
        </div>
      ) : null}

      {taken.length > 0 ? (
        <div>
          <div className="mb-8 flex items-baseline justify-between">
            <h3 className="font-display text-3xl text-[color:var(--color-paper)]">
              Placed
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/55">
              shown as proof — not available
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {taken.map((d) => (
              <FlashCard key={d.slug} design={d} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
