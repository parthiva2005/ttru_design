import type { JournalPost } from "./types";
import { SARAH } from "./assets";

/**
 * Journal posts written in Sarah's own voice. Casual cadence, specific
 * details, real moments — not the polished agency tone.
 */
export const journalPosts: JournalPost[] = [
  {
    slug: "why-i-design-custom-pieces",
    title: "Why I draw every piece from scratch",
    category: "Process",
    excerpt:
      "I get a lot of Pinterest screenshots in my DMs. Here's why I never just copy what's already in the photo.",
    body: [
      "Almost every week I get a DM that opens with a screenshot. \"Hi! Can you do this one?\" with a photo of someone else's tattoo. I always feel a little bad about my answer, because the honest answer is no.",
      "The reason isn't snobbery. It's two things, both of them practical.",
      "The first is that the piece in the photo was solved for the artist who drew it. Their line weight, their machine, their pacing, their hand. If I trace it onto your skin I inherit a thousand little decisions someone else made, and the result is always — always — a worse version of the original. You'd be paying me to make something that already exists somewhere better.",
      "The second is that that piece already belongs to a person. Walking around with a copy of someone else's tattoo feels strange to me, and I'd guess it feels strange to most people once they think about it. The whole point of a permanent piece is that it's yours.",
      "So when you send me a reference, what I do is read it. I look at why you saved it. I ask you a few questions — what about it stopped your scroll, what's the story you actually want the piece to carry, where on your body it lives. Then I sit with that for a couple of days, and I draw something new. Sometimes it ends up looking pretty close to your reference. Sometimes it goes somewhere different. Either way it's drawn from scratch in my hand, for you, for that arm.",
      "That's most of what custom means to me. The rest is just patience.",
    ],
    coverImage: SARAH.sketchAngelOwl,
    readMinutes: 3,
    publishedAt: "2026-04-12",
  },
  {
    slug: "what-to-expect-first-consultation",
    title: "If this is your first tattoo, read this",
    category: "Process",
    excerpt:
      "What actually happens at a first session, written by someone who remembers being nervous before her own.",
    body: [
      "If you've never been tattooed before and you're nervous about it, that's normal. I was nervous before my first one. Most of the people I tattoo are nervous before theirs. The nerves are not the problem.",
      "Here's what actually happens. You'll show up, I'll offer you tea or water, and we'll sit at the desk for a few minutes and look at the final sketch together. If you want a small change — moving a leaf, scaling something down — now is the time to say so. Once we're both happy with the stencil placement on your skin, we start.",
      "The first ten minutes are usually the hardest, because you're bracing for it. After that your body figures out what's happening and settles in. I work in passes — I do a chunk, you tell me how you're doing, we keep going. If you need a break, you say \"break\" and we stop. There is no extra cost for breaks, there's no judgment, and the work doesn't suffer.",
      "Small pieces take about 90 minutes. Medium pieces, two to three hours. Big pieces I split across sessions.",
      "Bring something that has caffeine and something that has sugar, even if you don't normally drink either. Eat a real meal before you come. Wear something that gives easy access to the part of your body we're tattooing.",
      "When we're done, I'll wrap it, take an after photo, send you home with a printed aftercare card, and check in on you in a week. That's it. That's the whole thing.",
    ],
    coverImage: SARAH.processMachine,
    readMinutes: 4,
    publishedAt: "2026-03-04",
  },
  {
    slug: "healed-results-three-pieces",
    title: "Three pieces, three months later",
    category: "Healed Results",
    excerpt:
      "Healed photos of work from this spring. I'd rather show these than fresh shots.",
    body: [
      "I take a lot of fresh-out-of-the-chair photos for clients to send to their group chats. But the photos I'd rather hang my name on are the ones taken three months later, in daylight, with no edits.",
      "Three of them this season:",
      "The wildflower sleeve on K. We did this across two sittings in February. Twelve weeks in, the line work has held exactly where I put it. The orange of the moth has softened a little, which I expected — color always loses a bit of saturation as the skin heals, and it's why I chose a slightly more vivid orange to start with.",
      "The butterfly-and-cactus on M. Fine line, all black, photographed against her garden. This is what fine line should look like at three months — clean, slightly softer at the edges than it was fresh, no spreading.",
      "The shoulder florals on D. Closer-up shot than the other two. The smallest details, the ones I was nervous about, held up. The lesson for me here was about which line weight is actually safe to commit to at that size.",
      "If you're thinking about a fine-line piece and you want to see how it holds, ask me at the consult — I'll show you healed photos of similar work. They're the only honest reference.",
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
