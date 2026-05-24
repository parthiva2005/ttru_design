import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { PortfolioClient } from "./portfolio-client";
import { portfolioPieces } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected fine-line tattoo, flash, custom wearable and commission work by Sarah Quattrucci. Filter by style.",
};

export default function PortfolioPage() {
  return (
    <Section variant="paper" className="!pt-32">
      <SectionHeading
        eyebrow="Portfolio"
        title={
          <>
            The full catalogue —
            <br />
            <span className="italic text-[color:var(--color-crimson)]">filterable by style.</span>
          </>
        }
        intro="Flash, botanical work, custom wearables, and applied / healed-result pieces. Every piece links to the story behind it."
      />
      <div className="mt-16">
        <PortfolioClient pieces={portfolioPieces} />
      </div>
    </Section>
  );
}
