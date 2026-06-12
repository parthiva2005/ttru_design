import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { PortfolioClient } from "./portfolio-client";
import { portfolioPieces } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected fine-line tattoo, custom embroidery, custom canvas painting, and nail work by Sarah Quattrucci. Filter by style.",
};

export default function PortfolioPage() {
  return (
    <Section variant="paper" className="!pt-32">
      <SectionHeading
        eyebrow="Portfolio"
        title="Everything I've made worth showing."
        intro="Tattoo work, custom embroidery, canvas paintings, and a couple of nail sets. Filter by category, or just scroll. Click any piece to read about how it came together."
      />
      <div className="mt-16">
        <PortfolioClient pieces={portfolioPieces} />
      </div>
    </Section>
  );
}
