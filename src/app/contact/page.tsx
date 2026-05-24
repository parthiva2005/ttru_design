import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { InstagramIcon } from "@/components/icons";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & FAQ",
  description:
    "Reach out for a project, ask a question, or follow along. Three ways to get in touch.",
};

const FAQS = [
  {
    q: "How much does a tattoo cost?",
    a: "Most pieces fall between $180 (single-pass line work, under 2 inches) and $900 (multi-session colour or larger panels). Custom wearables run higher — typically $480 – $1,400.",
  },
  {
    q: "What's the deposit policy?",
    a: "$25 to hold a consultation. It rolls into your final invoice and is non-refundable within seven days of your scheduled session.",
  },
  {
    q: "Do you take walk-ins?",
    a: "No — every piece is by appointment. The studio is small and the work benefits from time.",
  },
  {
    q: "What's the age policy?",
    a: "18 and older only, with valid government ID at the time of session. No exceptions.",
  },
  {
    q: "How long does a typical session take?",
    a: "Most small to medium pieces run 90 minutes to 3 hours. Larger panels are scheduled across two sessions with healing time in between.",
  },
  {
    q: "Do you offer touch-ups?",
    a: "Yes — one free touch-up window at three months for any piece tattooed in the studio.",
  },
  {
    q: "What aftercare do you recommend?",
    a: "You receive a printed aftercare card at your session. The summary: keep it clean, keep it moist, keep it out of direct sunlight for the first two weeks.",
  },
  {
    q: "Can I bring a friend?",
    a: "Yes — one guest, please, and a quiet one. The studio is small.",
  },
  {
    q: "Do you ship commissions and wearables?",
    a: "Throughout the continental US, insured. International on request.",
  },
  {
    q: "Can I gift this?",
    a: "Yes. Gift cards are available — email hello@sarahquattrucci.com.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Section variant="paper" className="!pt-32">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Three ways to reach
              <br />
              <span className="italic text-[color:var(--color-crimson)]">the studio.</span>
            </>
          }
          intro="The booking form below is the fastest route for project inquiries. For everything else, an email or a DM is welcome."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-8">
            <ContactMethod
              icon={<Mail size={18} />}
              label="Email"
              value="hello@sarahquattrucci.com"
              href="mailto:hello@sarahquattrucci.com"
              note="Replies within 72 hours, Monday – Thursday."
            />
            <ContactMethod
              icon={<InstagramIcon size={18} />}
              label="Instagram"
              value="@ttru_designs"
              href="https://instagram.com/ttru_designs"
              note="DMs read daily; the booking form remains the fastest route."
            />
            <ContactMethod
              icon={<MapPin size={18} />}
              label="Service area"
              value="Bridgewater & South Shore, MA"
              note="By appointment only. Address shared on booking confirmation."
            />
            <ButtonLink href="/book" variant="crimson" size="md" className="w-full">
              Start a project brief
            </ButtonLink>
          </aside>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section variant="paper" className="!pt-0">
        <Eyebrow>Frequently asked</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          The questions that arrive most often.
        </h2>

        <dl className="mt-12 space-y-px border border-[color:var(--color-paper-border)]">
          {FAQS.map((faq, i) => (
            <details
              key={faq.q}
              className="group bg-[color:var(--color-paper)] open:bg-[color:var(--color-paper-warm)]"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-display text-xl md:text-2xl">
                <span>{faq.q}</span>
                <span className="font-mono text-2xl text-[color:var(--color-crimson)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                {faq.a}
              </p>
            </details>
          ))}
        </dl>
      </Section>
    </>
  );
}

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  note: string;
  href?: string;
}
function ContactMethod({ icon, label, value, note, href }: ContactMethodProps) {
  const body = (
    <div className="space-y-2">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
        {icon}
        {label}
      </div>
      <div className="font-display text-2xl">{value}</div>
      <p className="text-sm text-[color:var(--color-muted)]">{note}</p>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {body}
    </a>
  ) : (
    <div>{body}</div>
  );
}
