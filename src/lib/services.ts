import type { Service, ServiceSlug } from "./types";
import { SARAH, SUPPORT } from "./assets";

/**
 * Each service has a dedicated hero (one strong image that opens the
 * page) and a gallery (4 – 6 supporting examples). Wherever Sarah's own
 * work exists for the domain it is used; remaining slots are curated
 * stand-ins in the same stylistic territory.
 */
export const services: Service[] = [
  {
    slug: "tattoo-design",
    name: "Tattoo Design",
    tagline: "Custom and flash work, by appointment.",
    description:
      "Original tattoo designs and select flash pieces. Each commission begins with a written brief, moves through two sketch rounds, and finishes with a scheduled application session.",
    startingPrice: "From $180 · sessions $180/hour",
    turnaround: "4 – 8 weeks from deposit to chair",
    process: [
      {
        step: "Brief",
        detail:
          "Share the story, references and placement. I respond within 72 hours with a candid yes / no / counter-proposal.",
      },
      {
        step: "Sketch",
        detail:
          "Two rounds of pencil sketches with annotated revisions. We lock the design before the session is scheduled.",
      },
      {
        step: "Session",
        detail:
          "Single sitting for most pieces under five inches. Larger panels are scheduled across two sessions with healing time between.",
      },
      {
        step: "Aftercare",
        detail:
          "Written aftercare card, a check-in at week one, and a free touch-up window at three months.",
      },
    ],
    faqs: [
      {
        q: "Do you copy a design I send you?",
        a: "No — I redraw every brief from scratch in my own line. If you send a reference, I'll honour the spirit, not the strokes.",
      },
      {
        q: "What's your minimum?",
        a: "$180 covers up to roughly a 2-inch piece in single-pass line work.",
      },
      {
        q: "Do you do colour?",
        a: "Yes, but sparingly. Most of my colour work is one accent passage inside an otherwise black-and-grey design.",
      },
      {
        q: "What's the deposit?",
        a: "$25 to hold a consultation; rolls into your final balance and is non-refundable inside seven days of your session.",
      },
    ],
    /* HERO: process at the machine — most cinematic frame Sarah supplied */
    heroImage: SARAH.processMachine,
    galleryImages: [
      SARAH.botanicalColorSleeve, // color botanical sleeve
      SARAH.botanicalBwHealed, // healed black & grey
      SUPPORT.botanicalApplied, // applied / fresh
      SUPPORT.botanicalFreshShoulder, // shoulder floral
      SUPPORT.flashPanther, // flash example
      SUPPORT.flashSwallow,
    ],
  },
  {
    slug: "custom-wearables",
    name: "Custom Wearables",
    tagline: "Hand-painted denim, jackets and one-of-one pieces.",
    description:
      "Wearable art — denim, leather, canvas. Each commission is a one-of-one. Most projects sit between 12 and 25 hours of painted work depending on scale.",
    startingPrice: "From $480 · most pieces $900 – $1,400",
    turnaround: "3 – 6 weeks from approved sketch",
    process: [
      {
        step: "Garment",
        detail:
          "You supply the garment, or I source one from a short-list of trusted suppliers. Vintage denim preferred.",
      },
      {
        step: "Composition",
        detail:
          "We agree on layout, panels and palette in a single sketch round.",
      },
      {
        step: "Paint",
        detail:
          "Hand-painted in studio with archival fabric mediums. Photographed at three points so you can follow the progress.",
      },
      {
        step: "Seal & ship",
        detail:
          "Heat-set, sealed, and either delivered locally or shipped insured.",
      },
    ],
    faqs: [
      {
        q: "Will it survive washing?",
        a: "Yes. Cold inside-out wash, hang to dry. With reasonable care these pieces hold for years.",
      },
      {
        q: "Can I send my own garment?",
        a: "Absolutely. Most clients do.",
      },
      {
        q: "Do you ship?",
        a: "Throughout the continental US, insured.",
      },
    ],
    heroImage: SUPPORT.wearableJeans,
    galleryImages: [
      SUPPORT.wearableJeans,
      SUPPORT.wearableJacket,
      SUPPORT.wearableCanvasBag,
      SUPPORT.paintingSunset,
    ],
  },
  {
    slug: "commissions",
    name: "Commissioned Sketches",
    tagline: "Pencil and ink studies, framed or unframed.",
    description:
      "Original drawings on archival paper — portraits, botanical studies, commemorative pieces. Suitable for gifts, weddings, or simply for the wall.",
    startingPrice: "From $240 · framed editions from $420",
    turnaround: "2 – 4 weeks",
    process: [
      {
        step: "Brief",
        detail: "A short conversation. Reference photos welcome.",
      },
      {
        step: "Sketch",
        detail:
          "One round of pencil composition with revisions before ink.",
      },
      {
        step: "Finish",
        detail:
          "Hand-finished in ink and graphite on archival cotton paper.",
      },
      {
        step: "Frame & deliver",
        detail:
          "Optional white-wood or black-wood frame. Hand-delivered locally; insured shipping otherwise.",
      },
    ],
    faqs: [
      {
        q: "Can I gift this?",
        a: "Yes — gift cards are available, and I can ship directly to the recipient with a hand-written note.",
      },
      {
        q: "Do I own the original?",
        a: "Yes, and the rights to display it. Reproductions stay with the studio.",
      },
    ],
    /* HERO: the Angel & Owl pencil study — Sarah's strongest commission frame */
    heroImage: SARAH.sketchAngelOwl,
    galleryImages: [
      SARAH.sketchAngelOwl,
      SARAH.paintingAvatar,
      SUPPORT.paintingFloralStudy,
      SUPPORT.paintingPortrait,
      SUPPORT.paintingSunset,
    ],
  },
  {
    slug: "nail-art",
    name: "Nail Art",
    tagline: "Hand-painted sets in the house palette.",
    description:
      "Small bookings only. Hand-painted gel sets in cream and crimson with fine-line detail.",
    startingPrice: "From $90 per set",
    turnaround: "Booked one week ahead",
    process: [
      { step: "Book", detail: "Open slots posted monthly via the journal." },
      {
        step: "Sit",
        detail:
          "90-minute appointment in studio. Tea and conversation included.",
      },
      {
        step: "Set",
        detail:
          "Gel-cured. Touch-up offered free within fourteen days if needed.",
      },
    ],
    faqs: [
      { q: "How long do they last?", a: "Two to three weeks typically." },
      {
        q: "Can I bring a reference?",
        a: "Yes — but we'll filter it through the house palette so it reads as part of the same body of work.",
      },
    ],
    /* HERO: the hands + fine-line tattoos + French set — two services in one frame */
    heroImage: SARAH.handsFinelineNails,
    galleryImages: [
      SARAH.handsFinelineNails,
      SARAH.nailsMarbleBlue,
      SUPPORT.nailsCreamCrimson,
      SUPPORT.nailsLineDetail,
      SUPPORT.nailsAlmondNatural,
    ],
  },
];

export function getService(slug: ServiceSlug): Service | undefined {
  return services.find((s) => s.slug === slug);
}
