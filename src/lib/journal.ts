import type { JournalPost } from "./types";
import { SARAH, SUPPORT } from "./assets";

export const journalPosts: JournalPost[] = [
  {
    slug: "why-i-design-custom-pieces",
    title:
      "Why I design custom pieces (and don't just tattoo Pinterest photos)",
    category: "Process",
    excerpt:
      "There are two ways to do this work. One of them keeps the lights on. The other keeps me interested. I do the second.",
    body: [
      "Almost every week someone sends me a screenshot from Pinterest and asks if I can replicate it. The answer, usually, is no — or rather, not the way they're asking.",
      "When you replicate another artist's piece you inherit two problems. The first is technical: their composition was solved for their hand, their line weight, their machine. Yours will not behave the same way on skin. The second is harder to talk about: the piece already exists. It already belongs to someone. Asking for the same one isn't a tattoo, it's a copy of one.",
      "The work I do instead takes longer. We talk about what you actually want to mark — the moment, the person, the thing you can't quite say. I redraw it from scratch, in my own line. That's where the time goes. That's where the price goes. It's also where the meaning goes.",
      "If you ever wondered why I take a week to come back to you on a sketch, this is why.",
    ],
    coverImage: SARAH.sketchAngelOwl,
    readMinutes: 4,
    publishedAt: "2026-04-12",
  },
  {
    slug: "bsu-homecoming-pants-case-study",
    title: "The BSU homecoming pants — a case study in wearable art",
    category: "Studio Notes",
    excerpt:
      "Fifteen hours, twelve panels, one pair of jeans. Here's how a single commission turned into the calling card of a whole year.",
    body: [
      "I painted these jeans the week before Bridgewater State's homecoming weekend. The client had a brief that was barely two sentences long — 'something that feels like our friend group, with peonies' — and that was enough.",
      "I split the surface into twelve panels: four down each leg, two on each pocket. The pocket panels got the most figurative work; the legs carried the botanical line work that ties the whole thing together. The piece took fifteen hours over four sittings.",
      "What I didn't expect was the way the piece travelled. By Sunday night I had three new commission requests in my DMs. The thing I learned from that weekend is that the right wearable, on the right person, in the right room, is worth more outreach than a month of carefully timed posts.",
      "I'm taking custom denim commissions now through the end of the year. Three slots available.",
    ],
    coverImage: SUPPORT.wearableJeans,
    readMinutes: 5,
    publishedAt: "2026-03-28",
  },
  {
    slug: "what-to-expect-first-consultation",
    title: "What to expect at your first tattoo consultation",
    category: "Process",
    excerpt:
      "A short, practical guide for first-timers. None of it is scary. Most of it is conversation.",
    body: [
      "Your consultation lasts about forty minutes. It is a conversation, not a test.",
      "I'll ask three things: what you want the piece to be about, where on the body you want to put it, and roughly what size you're imagining. You don't need to have answers polished — you need to be honest. The clearer you are about the meaning, the better the piece I can draw for you.",
      "You'll leave the consultation with a written brief, a sketch timeline, and a tentative session date. You don't pay the full piece price at the consultation. You pay a $25 holding deposit that rolls into your final balance.",
      "If you want to bring someone with you, you can. If you'd rather come alone, that's also fine. The studio is small, calm, and there's tea.",
    ],
    coverImage: SARAH.processMachine,
    readMinutes: 3,
    publishedAt: "2026-03-04",
  },
  {
    slug: "healed-results-three-pieces",
    title: "Three pieces, three months later",
    category: "Healed Results",
    excerpt:
      "The honest test of any tattoo is the three-month photo. Here are three of mine, side by side.",
    body: [
      "Healed results are the single most useful thing I can show a prospective client, because they tell you the only thing that matters: does the line hold?",
      "I'm posting three pieces from the spring season here. Each photographed fresh on the day of application and again at the twelve-week mark in the same light.",
      "The line work has held well across all three. The fine-line floral on the shoulder lost a fraction of detail in the smallest petals — that's expected at that scale, and worth knowing if you're considering anything finer than a millimetre.",
    ],
    coverImage: SARAH.botanicalBwHealed,
    readMinutes: 3,
    publishedAt: "2026-02-18",
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(count = 3): JournalPost[] {
  return [...journalPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, count);
}
