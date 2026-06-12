import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
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
    q: "How does pricing work?",
    a: "I quote each piece after reading the brief. It depends on size, time, and complexity, and I'd rather give you an honest number tied to what you actually want than a public number that doesn't fit anyone.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Not anymore. The studio is small and everything I make starts with a sketch round, which means the work needs a few weeks of lead time.",
  },
  {
    q: "How old do I have to be?",
    a: "18 or older, with valid ID at the session. Same rule applies to nail art bookings if you're getting them at the studio.",
  },
  {
    q: "How long is a session?",
    a: "Most pieces take 90 minutes to about three hours. If we go past that, you're getting a break and probably a snack from the drawer.",
  },
  {
    q: "Do you do touch-ups?",
    a: "One free touch-up at the three-month mark for anything tattooed at the studio, assuming you followed the aftercare card.",
  },
  {
    q: "What aftercare should I follow?",
    a: "You'll leave with a printed card and I'll walk you through it. The short version: keep it clean, keep it moist, stay out of direct sun for two weeks, and don't pick at it no matter how badly you want to.",
  },
  {
    q: "Can I bring a friend?",
    a: "Yes, one. The studio is small so don't bring the whole group — one quiet person is great.",
  },
  {
    q: "Do you ship canvas paintings and drawings?",
    a: "Anywhere in the continental US, insured. International on request — write to me about it.",
  },
  {
    q: "Can I commission something as a gift?",
    a: "Often. Custom canvas paintings and drawings work especially well as gifts. Email me — I can ship straight to the recipient with a note.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Section variant="paper" className="!pt-32">
        <SectionHeading
          eyebrow="Get in touch"
          title="Three ways to reach me."
          intro="The brief form is the fastest if you have a piece in mind. For anything else — questions, gift cards, just saying hi — email or Instagram is fine."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-8">
            <ContactMethod
              icon={<Mail size={18} />}
              label="Email"
              value="quattrucrafts@gmail.com"
              href="mailto:quattrucrafts@gmail.com"
              note="I read it myself. Reply usually in two to three days."
            />
            <ContactMethod
              icon={<Phone size={18} />}
              label="Phone"
              value="+1 (781) 408-2354"
              href="tel:+17814082354"
              note="Call or text for quick questions. For a project, the brief form is still the best first step."
            />
            <ContactMethod
              icon={<InstagramIcon size={18} />}
              label="Instagram"
              value="@ttru_designs"
              href="https://instagram.com/ttru_designs"
              note="DMs work for quick questions. For a brief, the form is better — it gives me what I need to actually reply with something useful."
            />
            <ContactMethod
              icon={<MapPin size={18} />}
              label="Studio"
              value="29 Green Street, Stoughton, MA"
              note="Private studio, by appointment. I'll confirm timing and details when we book your session."
            />
            <ButtonLink href="/book" variant="crimson" size="md" className="w-full">
              Start a brief
            </ButtonLink>
          </aside>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section variant="paper" className="!pt-0">
        <Eyebrow>Things people ask</Eyebrow>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          The questions that come up most.
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
    <div className="flex items-start gap-4">
      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-paper-border)] text-[color:var(--color-ink)]">
        {icon}
      </span>
      <div className="space-y-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {label}
        </div>
        <div className="font-display text-2xl leading-tight">{value}</div>
        <p className="text-sm text-[color:var(--color-muted)]">{note}</p>
      </div>
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
