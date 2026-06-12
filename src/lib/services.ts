import type { Service, ServiceSlug } from "./types";
import { SARAH } from "./assets";

/**
 * Service definitions.
 *
 * Tattoo design, custom embroidery, custom canvas painting, and nail art —
 * each backed only by Sarah's real photographs. No stock imagery, no
 * placeholder galleries; every visible photo is one the visitor can
 * trust as actual work from this studio.
 *
 * Wearables (denim, jackets) is intentionally absent until a real
 * photograph of that work exists under /public/work/sarah/.
 */
export const services: Service[] = [
  {
    slug: "tattoo-design",
    name: "Tattoo Design",
    tagline: "Custom work, by appointment only.",
    description:
      "I draw every piece myself, from scratch. We start with a written brief, I send you two rounds of pencils, and once the design is locked I'll put you on the schedule. Most pieces I take are between three and seven inches.",
    turnaround:
      "Usually four to eight weeks from brief to chair. Faster sometimes; longer if I'm booked deep.",
    process: [
      {
        step: "Brief",
        detail:
          "Send me the story, where you want it, and any references that live in your head. I read everything personally and write back within a few days.",
      },
      {
        step: "Sketch",
        detail:
          "Two rounds of pencils. I send the first, you mark it up, I send a second. We don't move until it feels right to both of us.",
      },
      {
        step: "Session",
        detail:
          "Most pieces are a single sitting. Anything bigger we split across two with a few weeks of healing in between. The studio is small and quiet — bring water, eat beforehand.",
      },
      {
        step: "Aftercare",
        detail:
          "You'll leave with a printed aftercare card. I check in at week one and offer a free touch-up window at three months if anything needs settling.",
      },
    ],
    faqs: [
      {
        q: "Can I send you a design I found online?",
        a: "You can send it as a reference and I'll honour the feeling, but I won't recreate another artist's piece. It wouldn't be fair to them and the line wouldn't be mine.",
      },
      {
        q: "Do you do colour?",
        a: "Sometimes. I tend to keep things mostly black and grey with one accent passage. If you want a fully saturated piece, tell me in the brief and I'll be honest about whether it's my lane.",
      },
      {
        q: "How small can you go?",
        a: "I'll go small if the design genuinely needs to be small. I'll talk you out of it if I think it'll lose its line in a year. We figure that out together.",
      },
      {
        q: "Do you tattoo first-timers?",
        a: "Yes, often. Tell me it's your first when you write — I'll change how I pace the session and what I send you to prepare.",
      },
    ],
    // Hero: gloved hand at the machine. Gallery: the three real photos
    // that show actual tattoo work in this studio.
    heroImage: SARAH.processMachine,
    galleryImages: [
      SARAH.botanicalColorSleeve,
      SARAH.botanicalBwHealed,
      SARAH.handsFinelineNails,
    ],
  },
  {
    slug: "embroidery",
    name: "Custom Embroidery Designs",
    tagline: "Hand-stitched and hand-painted detail on denim.",
    description:
      "Custom work on garments you already own or ones I source — hand-embroidered florals along a waistband, painted logos and figures across the back pockets, or a full custom panel. Each piece is one-of-one and finished entirely by hand.",
    turnaround:
      "Two to five weeks depending on coverage. Embroidery takes longer than paint — a full waistband of florals is a slow, patient job.",
    process: [
      {
        step: "Garment",
        detail:
          "Send me the piece you want worked on, or tell me what you're after and I'll help you find the right denim. Worn-in, mid-weight denim takes both thread and paint best.",
      },
      {
        step: "Design",
        detail:
          "We agree on placement and motif in a single sketch round — where the flowers run, what goes on each pocket, how much coverage you want.",
      },
      {
        step: "Stitch & paint",
        detail:
          "Embroidery is done by hand with cotton thread; painted areas use archival fabric mediums. I send progress photos as the piece comes together.",
      },
      {
        step: "Finish & deliver",
        detail:
          "Threads secured, paint heat-set and sealed. Local pickup or insured shipping anywhere in the continental US.",
      },
    ],
    faqs: [
      {
        q: "Can I wash it?",
        a: "Yes — cold water, inside out, hang to dry. Don't tumble it. Embroidery and sealed paint both hold up for years with that kind of care.",
      },
      {
        q: "Embroidery, paint, or both?",
        a: "Either or both. Embroidered florals feel soft and handmade; painted designs read bolder and graphic. Tell me the look you want and I'll recommend which fits.",
      },
      {
        q: "Can you do a team or college design?",
        a: "Yes — painted logos and mascots on back pockets are some of my favourite pieces to do. Send me the reference and I'll redraw it in my own hand.",
      },
    ],
    // Hero: the hand-embroidered daisy waistband. Gallery: that piece plus
    // the painted BSU bear-paw / bear-head pockets.
    heroImage: SARAH.denimEmbroideryDaisies,
    galleryImages: [SARAH.denimEmbroideryDaisies, SARAH.denimBsuPockets],
  },
  {
    slug: "commissions",
    name: "Custom Canvas Painting",
    tagline: "Acrylic on canvas, plus the occasional pencil study.",
    description:
      "Original paintings on stretched canvas — characters, studies, commemorative pieces — alongside hand-finished graphite drawings on paper. Painted and drawn entirely by hand. People tend to commission these for weddings, anniversaries, and as gifts that need to last.",
    turnaround: "Two to four weeks for most pieces.",
    process: [
      {
        step: "Brief",
        detail:
          "A short conversation by email or DM. Reference images welcome, especially if it's a portrait or a specific subject.",
      },
      {
        step: "Sketch",
        detail:
          "One round of pencil composition with revisions before I commit to paint.",
      },
      {
        step: "Paint",
        detail:
          "Built up in acrylic on stretched canvas, or finished in graphite for drawn pieces. I sign and date the back.",
      },
      {
        step: "Deliver",
        detail:
          "Optional framing for works on paper. Local hand-delivery or insured shipping for canvases.",
      },
    ],
    faqs: [
      {
        q: "Can this be a gift?",
        a: "Yes — and probably more people commission them as gifts than for themselves. I can ship straight to the recipient with a card.",
      },
      {
        q: "Do I own the rights to the painting?",
        a: "You own the original and the right to display it. I keep reproduction rights — meaning if I ever want to use the image in my portfolio or print run, I can.",
      },
    ],
    // Hero: the elements canvas painting. Gallery: the painting plus the
    // Angel & Owl graphite study.
    heroImage: SARAH.paintingAvatar,
    galleryImages: [SARAH.paintingAvatar, SARAH.sketchAngelOwl],
  },
  {
    slug: "nail-art",
    name: "Nail Art",
    tagline: "Hand-painted sets, taken occasionally.",
    description:
      "Small, slow nail bookings — almond-shape gel sets with hand-painted detail. I take these a few times a month around the heavier work, often paired with friends getting tattooed the same day.",
    turnaround: "Booked about a week ahead. Slots posted in the journal.",
    process: [
      {
        step: "Book",
        detail: "Open dates go up in the journal at the start of each month.",
      },
      {
        step: "Sit",
        detail:
          "About 90 minutes in studio. Tea, music, and time to talk through the design without rushing.",
      },
      {
        step: "Set",
        detail:
          "Gel-cured and sealed. If something pops or smudges in the first two weeks I'll fix it for free.",
      },
    ],
    faqs: [
      {
        q: "How long do they last?",
        a: "Two to three weeks before they start lifting in normal life. Less if you do dishes without gloves.",
      },
      {
        q: "Can I bring a Pinterest reference?",
        a: "Bring whatever you like. We'll talk through it and land somewhere that still feels like part of the same body of work.",
      },
    ],
    // Hero: hands with fine-line tattoos + French set. Gallery: that
    // same set and the marbled blue-and-citrine set.
    heroImage: SARAH.handsFinelineNails,
    galleryImages: [
      SARAH.handsFinelineNails,
      SARAH.nailsMarbleBlue,
      SARAH.nailsBlueSnowflake,
    ],
  },
];

export function getService(slug: ServiceSlug): Service | undefined {
  return services.find((s) => s.slug === slug);
}
