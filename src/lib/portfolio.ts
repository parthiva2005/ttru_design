import type { PortfolioPiece } from "./types";
import { SARAH, SUPPORT } from "./assets";

/**
 * Portfolio data. Where Sarah supplied a real photograph, the entry
 * points to a `SARAH.*` asset (which resolves to either the local file
 * or a closely-matched stand-in via the env toggle in `assets.ts`).
 * Supporting work is filled in with `SUPPORT.*` curated images that
 * sit in the same stylistic territory.
 *
 * Spans are tuned so the masonry grid reads as a curated magazine spread
 * rather than a uniform tile sheet.
 */
export const portfolioPieces: PortfolioPiece[] = [
  /* === FEATURED — Sarah's strongest real work ====================== */
  {
    slug: "wildflower-sleeve",
    title: "Wildflower Sleeve",
    year: 2025,
    category: "color",
    categoryLabel: "Color Work",
    status: "not-for-sale",
    size: "large",
    medium: "Tattoo, applied & fresh",
    span: "feature",
    description:
      "Full forearm sleeve — prickly pear, daffodils, blue rose, orange moth, fine-line bee and honeycomb. The piece climbs the arm in a single botanical conversation.",
    story:
      "We built this over three sittings. The cactus came first, then everything that pollinates it. A whole quiet ecosystem.",
    image: SARAH.botanicalColorSleeve,
    imageWidth: 1600,
    imageHeight: 2000,
    alt: "Color botanical tattoo sleeve on forearm — prickly pear cactus with bright orange moth, yellow daffodil, blue rose, and fine-line bee and honeycomb at the base.",
  },
  {
    slug: "healed-botanical",
    title: "Healed Botanical — Six Months",
    year: 2025,
    category: "botanical",
    categoryLabel: "Botanical",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Tattoo, healed six months",
    description:
      "Fine-line black and grey botanical photographed outdoors against succulents — vintage roses, prickly pear, and a butterfly mid-flight.",
    story:
      "The honest test of any tattoo is the long photograph. This one came back exactly the way I drew it.",
    image: SARAH.botanicalBwHealed,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Healed black-and-grey fine-line botanical tattoo on a forearm — butterfly perched on a prickly pear cactus with vintage roses above. Photographed outdoors in front of succulents.",
    healedImage: SARAH.botanicalBwHealed,
  },
  {
    slug: "fineline-hands-and-nails",
    title: "Fine-Line Hands & Nails",
    year: 2025,
    category: "applied",
    categoryLabel: "Applied",
    status: "not-for-sale",
    size: "small",
    span: "wide",
    medium: "Tattoo + hand-painted gel set",
    description:
      "Constellation-scale finger tattoos paired with a fresh almond-shape French-tip set. Two services in one frame.",
    story:
      "She came in for the nails and asked about the dots between her knuckles. Sixty minutes later, both.",
    image: SARAH.handsFinelineNails,
    imageWidth: 1600,
    imageHeight: 1200,
    alt: "Two hands resting on a black quilted surface, showing tiny constellation-style fine-line tattoos across the fingers and the backs of the hands, with freshly-painted almond French-tip nails.",
  },

  /* === FLASH ===================================================== */
  {
    slug: "panther-and-peonies",
    title: "Panther & Peonies",
    year: 2025,
    category: "flash",
    categoryLabel: "Flash",
    status: "one-of-one",
    size: "medium",
    span: "default",
    medium: "Ink on bristol",
    description:
      "Traditional American flash vocabulary softened with fine-line peonies. A study in carrying classic subject matter into a quieter line weight.",
    story:
      "Drawn over three sittings in late summer. The panther holds the line — the flowers are where the breath lives.",
    image: SUPPORT.flashPanther,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Black-ink panther illustration framed by detailed fine-line peony flowers on cream paper.",
  },
  {
    slug: "swallow-and-heart",
    title: "Swallow & Heart",
    year: 2025,
    category: "flash",
    categoryLabel: "Flash",
    status: "available",
    size: "small",
    span: "square",
    medium: "Ink on bristol",
    description:
      "Classic Sailor Jerry vocabulary executed with finer, slower lines. A first-tattoo piece by design.",
    story:
      "Almost everyone has someone they'd call home. This piece is for the people who carry that with them.",
    image: SUPPORT.flashSwallow,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Traditional swallow tattoo flash design with a small red heart, rendered in fine black line work.",
  },
  {
    slug: "snake-vine",
    title: "Snake & Vine",
    year: 2025,
    category: "flash",
    categoryLabel: "Flash",
    status: "available",
    size: "large",
    span: "tall",
    medium: "Ink",
    description:
      "A larger panel — snake threaded through climbing vine, intended for a forearm or calf.",
    story:
      "I wanted to see how long a line could be without losing tension.",
    image: SUPPORT.flashSnake,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Long-format snake-and-vine tattoo design suitable for forearm or calf placement.",
  },
  {
    slug: "dagger-and-skull",
    title: "Dagger & Skull",
    year: 2024,
    category: "flash",
    categoryLabel: "Flash",
    status: "one-of-one",
    size: "medium",
    span: "default",
    medium: "Ink with crimson wash",
    description:
      "Dagger through a skull — traditional vocabulary with a single drop of crimson.",
    story: "Some pieces don't need to be reinvented. The point is the execution.",
    image: SUPPORT.flashDagger,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Traditional dagger-and-skull flash design with crimson detail.",
  },
  {
    slug: "scorpion-study",
    title: "Scorpion Study",
    year: 2024,
    category: "flash",
    categoryLabel: "Flash",
    status: "available",
    size: "small",
    span: "square",
    medium: "Ink",
    description:
      "Traditional scorpion flash sized small — meant to live on the forearm or behind an ear.",
    story: "Eight legs, one curve, one strike. A small piece with a lot of attitude.",
    image: SUPPORT.flashScorpion,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Small black-ink scorpion tattoo flash design on cream paper.",
  },
  {
    slug: "moth-and-moon",
    title: "Moth & Moon",
    year: 2025,
    category: "flash",
    categoryLabel: "Flash",
    status: "available",
    size: "small",
    span: "default",
    medium: "Ink",
    description:
      "Moth perched beneath a crescent moon — sized for the sternum or spine.",
    story: "Most of my best small pieces start with looking up at night.",
    image: SUPPORT.flashMoth,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Moth perched beneath a crescent moon in soft fine-line shading.",
  },

  /* === BOTANICAL & APPLIED ====================================== */
  {
    slug: "fine-line-florals",
    title: "Fine-Line Florals",
    year: 2025,
    category: "botanical",
    categoryLabel: "Botanical",
    status: "available",
    size: "medium",
    span: "default",
    medium: "Ink",
    description:
      "Botanical study — wildflower stem with single-pass line work and minimal shading.",
    story:
      "Drawn from a stem pressed in my sketchbook last June. The stem stayed; the petals taught me patience.",
    image: SUPPORT.botanicalLineWork,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Delicate fine-line floral tattoo design with botanical accuracy and minimal shading.",
  },
  {
    slug: "panther-forearm-healed",
    title: "Panther Forearm — Healed",
    year: 2025,
    category: "applied",
    categoryLabel: "Applied",
    status: "not-for-sale",
    size: "medium",
    span: "default",
    medium: "Tattoo, healed three months",
    description:
      "Healed result of a forearm panther. Documentation of how the lines settle.",
    story:
      "The honest test of any tattoo is the three-month photo. This is mine.",
    image: SUPPORT.appliedPanther,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Healed panther tattoo on a forearm photographed in natural daylight, three months after application.",
    healedImage: SUPPORT.appliedPanther,
  },
  {
    slug: "applied-floral-shoulder",
    title: "Applied Floral — Shoulder",
    year: 2024,
    category: "applied",
    categoryLabel: "Applied",
    status: "not-for-sale",
    size: "medium",
    span: "default",
    medium: "Tattoo, fresh",
    description:
      "Fine-line floral on a client's shoulder, photographed immediately after the session.",
    story:
      "Her grandmother grew these on the back porch. Everything before that is between the two of them.",
    image: SUPPORT.botanicalFreshShoulder,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Fresh fine-line floral tattoo on a client's shoulder photographed in soft natural light.",
  },
  {
    slug: "process-machine",
    title: "Process — At the Machine",
    year: 2025,
    category: "applied",
    categoryLabel: "Applied",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Studio documentation",
    description:
      "A working frame from a multi-hour session. Gloved hand on the machine, ink and time deciding what the rest of the piece will look like.",
    story:
      "Most of what people see is the finished photograph. This is closer to what the work actually feels like.",
    image: SARAH.processMachine,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Close-up of a gloved hand operating a tattoo machine over a heavily-tattooed forearm in low studio light.",
  },

  /* === CUSTOM WEARABLES ========================================== */
  {
    slug: "bsu-homecoming-jeans",
    title: "BSU Homecoming Jeans",
    year: 2025,
    category: "wearables",
    categoryLabel: "Custom Wearables",
    status: "one-of-one",
    size: "large",
    span: "default",
    medium: "Acrylic & ink on denim",
    description:
      "Hand-painted denim commission for Bridgewater State homecoming weekend. Single-owner piece.",
    story:
      "Fifteen hours, twelve panels, one pair of jeans that ended up on every story on campus that weekend.",
    image: SUPPORT.wearableJeans,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Hand-painted denim jeans with custom illustrations for a college homecoming event.",
  },
  {
    slug: "painted-leather-jacket",
    title: "Painted Leather Jacket",
    year: 2025,
    category: "wearables",
    categoryLabel: "Custom Wearables",
    status: "one-of-one",
    size: "large",
    span: "default",
    medium: "Acrylic on leather",
    description:
      "Hand-painted leather jacket back panel — botanical motif with a single dagger as the centerline.",
    story:
      "Twenty-two hours. The leather grain decided where the line would break.",
    image: SUPPORT.wearableJacket,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Hand-painted leather jacket with a botanical and dagger motif across the back panel.",
  },

  /* === COMMISSIONS / SKETCHES / PAINTINGS ======================== */
  {
    slug: "angel-and-owl",
    title: "Angel & Owl",
    year: 2024,
    category: "paintings",
    categoryLabel: "Sketches & Paintings",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Graphite on cotton paper",
    description:
      "A pencil study of a winged figure with an owl. Built from a single composition reference and ten hours of cross-hatching.",
    story:
      "The owl was the hard part. Birds want to be drawn quickly; this one wanted patience.",
    image: SARAH.sketchAngelOwl,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Pencil sketch of a robed angel figure with an owl perched on its arm, rendered in detailed graphite cross-hatching.",
  },
  {
    slug: "elements-study",
    title: "Elements Study",
    year: 2024,
    category: "paintings",
    categoryLabel: "Sketches & Paintings",
    status: "not-for-sale",
    size: "medium",
    span: "default",
    medium: "Acrylic on canvas",
    description:
      "Personal painting — the four elements wrapped around a central figure. Off-brief for the studio, on-brief for staying loose.",
    story:
      "Not every piece needs to be sellable. Some need to exist so the next one can be better.",
    image: SARAH.paintingAvatar,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Acrylic painting on canvas showing the four elements (fire, earth, air, water) wrapping around a central figure.",
  },
  {
    slug: "color-study-sunset",
    title: "Color Study — Sunset",
    year: 2024,
    category: "paintings",
    categoryLabel: "Sketches & Paintings",
    status: "not-for-sale",
    size: "medium",
    span: "default",
    medium: "Acrylic on canvas",
    description:
      "Color studies from a long quiet winter. Off-brand for tattoo work, on-brand for staying loose.",
    story: "Not for sale. Just for the practice of not stopping.",
    image: SUPPORT.paintingSunset,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Painted sunset color study in warm acrylic tones on canvas.",
  },

  /* === NAILS ===================================================== */
  {
    slug: "marbled-nail-set",
    title: "Marbled Nail Set — Blue & Citrine",
    year: 2025,
    category: "nails",
    categoryLabel: "Nail Art",
    status: "not-for-sale",
    size: "small",
    span: "default",
    medium: "Gel polish, hand-painted detail",
    description:
      "Almond-shape gel set — marbled blue with citrine and a single black wave detail per finger.",
    story:
      "One of my few sets where I let the color do all the talking.",
    image: SARAH.nailsMarbleBlue,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Hand-painted almond-shape nail set with marbled blue and yellow with black wave detail.",
  },
  {
    slug: "nail-set-cream-crimson",
    title: "Nail Set — Cream & Crimson",
    year: 2025,
    category: "nails",
    categoryLabel: "Nail Art",
    status: "available",
    size: "small",
    span: "square",
    medium: "Gel polish, hand-painted detail",
    description:
      "Hand-painted nail set in the studio's house palette — cream base, fine-line crimson.",
    story: "Same hand, different scale.",
    image: SUPPORT.nailsCreamCrimson,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Hand-painted gel nail set in cream with crimson fine-line detail.",
  },
];

export function getPortfolioPiece(slug: string): PortfolioPiece | undefined {
  return portfolioPieces.find((p) => p.slug === slug);
}

export function getFeaturedPieces(count = 6): PortfolioPiece[] {
  // Hand-picked priority for the home page teaser
  const order = [
    "wildflower-sleeve",
    "fineline-hands-and-nails",
    "healed-botanical",
    "angel-and-owl",
    "panther-and-peonies",
    "marbled-nail-set",
  ];
  return order
    .map((slug) => portfolioPieces.find((p) => p.slug === slug))
    .filter((p): p is PortfolioPiece => Boolean(p))
    .slice(0, count);
}

export const portfolioCategories: {
  value: PortfolioPiece["category"] | "all";
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "flash", label: "Flash" },
  { value: "botanical", label: "Botanical" },
  { value: "color", label: "Color Work" },
  { value: "wearables", label: "Custom Wearables" },
  { value: "applied", label: "Applied" },
  { value: "paintings", label: "Sketches & Paintings" },
  { value: "nails", label: "Nail Art" },
];
