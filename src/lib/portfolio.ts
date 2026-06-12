import type { PortfolioPiece } from "./types";
import { SARAH } from "./assets";

/**
 * Portfolio data.
 *
 * Every entry here is backed by one of Sarah's eight real photographs.
 * The title, description, story, and alt text for each piece have been
 * audited against the actual image — no stock photography, no slot
 * whose name might disagree with what the visitor sees.
 *
 * Spans are tuned so the masonry grid reads as a curated magazine
 * spread rather than a uniform tile sheet.
 */
export const portfolioPieces: PortfolioPiece[] = [
  {
    slug: "botanical-sleeve-color",
    title: "Botanical Sleeve — Color",
    year: 2025,
    category: "color",
    categoryLabel: "Color Work",
    status: "not-for-sale",
    size: "large",
    medium: "Tattoo, applied",
    span: "feature",
    description:
      "Color forearm sleeve — a green prickly pear cactus across the top, an orange moth beneath it, a blue rose and a yellow daffodil through the center, and a fine-line bee and honeycomb in black at the base.",
    story:
      "K wanted something that felt like her grandmother's garden. We built this across three sittings — the cactus first, then everything that would pollinate it.",
    image: SARAH.botanicalColorSleeve,
    imageWidth: 1600,
    imageHeight: 2000,
    alt: "Color botanical tattoo on a forearm — green prickly pear cactus at the top with an orange moth beneath it, a blue rose, a yellow daffodil, and a black fine-line bee and honeycomb at the wrist. A sketchbook is visible on the desk in the background.",
  },
  {
    slug: "healed-botanical-bw",
    title: "Healed Botanical — Six Months",
    year: 2025,
    category: "botanical",
    categoryLabel: "Botanical",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Tattoo, healed six months",
    description:
      "Black-and-grey fine-line piece photographed outdoors at the six-month mark — vintage roses and daffodils at the top, a butterfly mid-flight, and a prickly pear cactus with a moth resting on it at the base.",
    story:
      "I'm pretty proud of how this one held. Fine line at this scale can lose a little detail in healing. M sent me this photo unprompted at the six-month mark.",
    image: SARAH.botanicalBwHealed,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Healed black-and-grey fine-line tattoo on a forearm — vintage roses and daffodils at the top, a butterfly in flight, and a prickly pear cactus with a moth at the base. Photographed outdoors against green succulent foliage.",
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
      "Tiny fine-line stars, sparkles and dots scattered across the fingers and the backs of two hands, paired with a fresh almond French-tip gel set.",
    story:
      "L came in for nails and pointed at the spaces between her knuckles. We ended up doing both in one sitting. A few of those dots are connected to specific people in her life.",
    image: SARAH.handsFinelineNails,
    imageWidth: 1600,
    imageHeight: 1200,
    alt: "Two hands resting on a dark surface — small fine-line star, sparkle and dot tattoos scattered across the fingers and the backs of both hands, with freshly-painted almond-shape French-tip nails.",
  },
  {
    slug: "process-at-the-machine",
    title: "Process — At the Machine",
    year: 2025,
    category: "applied",
    categoryLabel: "Applied",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Studio documentation",
    description:
      "A working frame from a session in progress — gloved hand on the machine, working over an existing ornamental sleeve under low studio light.",
    story:
      "Most of what people see is the finished photograph. This is closer to what the work actually feels like.",
    image: SARAH.processMachine,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Close-up studio photograph — a gloved hand holding a tattoo machine, working over a heavily-tattooed forearm with ornamental black line work, photographed in warm low light.",
  },
  {
    slug: "angel-and-owl-sketch",
    title: "Angel & Owl",
    year: 2024,
    category: "paintings",
    categoryLabel: "Sketches & Paintings",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Graphite on paper",
    description:
      "Graphite study — a faceless winged figure in a draped toga, large feathered wings outstretched, an owl with its wings spread perched on the figure's arm.",
    story:
      "I drew this for my own wall, then ended up selling it before it got there. The owl took longer than the figure — birds will fight you the whole way.",
    image: SARAH.sketchAngelOwl,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "Graphite sketch on white paper — a faceless figure in a long draped toga, large feathered wings outstretched to either side, and an owl with its wings spread perched on the figure's right arm. Signed P.M.C. on the upper left wing.",
  },
  {
    slug: "elements-study-aang",
    title: "Elements Study",
    year: 2024,
    category: "paintings",
    categoryLabel: "Sketches & Paintings",
    status: "not-for-sale",
    size: "medium",
    span: "default",
    medium: "Acrylic on canvas",
    description:
      "Personal painting — a central figure surrounded by the four elements: fire on the left, water with a koi on the right, earth at the lower left, and air with a cloud-borne creature above. Square canvas.",
    story:
      "This one was for me. I grew up watching Avatar and I wanted to paint something for my own wall that didn't have to be sellable. Sometimes the best practice is the piece nobody asked for.",
    image: SARAH.paintingAvatar,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Acrylic painting on square canvas — a central figure in airbender robes kneeling with arms outstretched, surrounded by orange fire on the left, blue water with a koi on the right, earth and rocks at the lower edge, and a white cloud-borne creature with horns floating above.",
  },
  {
    slug: "embroidered-daisy-denim",
    title: "Embroidered Daisy Denim",
    year: 2025,
    category: "embroidery",
    categoryLabel: "Custom Embroidery",
    status: "not-for-sale",
    size: "medium",
    span: "tall",
    medium: "Hand embroidery on denim",
    description:
      "A scatter of hand-embroidered daisies in pink, white and soft lilac across the back waistband of a pair of light-wash jeans, stitched in cotton thread with yellow French-knot centers.",
    story:
      "This is slow work — each flower is a handful of stitches and the whole waistband took an evening and a half. The yellow centers are French knots, my favourite part to do.",
    image: SARAH.denimEmbroideryDaisies,
    imageWidth: 1200,
    imageHeight: 1800,
    alt: "A hand stitching a daisy in yellow thread onto the back waistband of light-wash blue jeans, surrounded by already-finished pink, white and lilac embroidered daisies with yellow centers.",
  },
  {
    slug: "bsu-painted-denim-pockets",
    title: "BSU Painted Denim",
    year: 2025,
    category: "embroidery",
    categoryLabel: "Custom Embroidery",
    status: "one-of-one",
    size: "large",
    span: "default",
    medium: "Hand-painted acrylic on denim",
    description:
      "Hand-painted back-pocket designs on grey-wash denim for Bridgewater State — a bear-paw print on the left pocket and a roaring bear head with BSU lettering on the right.",
    story:
      "A homecoming commission. I redrew the BSU bear in my own line, then painted both pockets to read clean against the worn grey wash. One of my favourite denim pieces.",
    image: SARAH.denimBsuPockets,
    imageWidth: 1200,
    imageHeight: 1500,
    alt: "Back view of grey-wash jeans with two hand-painted pocket designs — a white-outlined bear-paw print on the left pocket and a roaring bear head with BSU lettering on the right pocket.",
  },
  {
    slug: "snowflake-nail-set-blue",
    title: "Snowflake Nail Set — Dusty Blue",
    year: 2025,
    category: "nails",
    categoryLabel: "Nail Art",
    status: "not-for-sale",
    size: "small",
    span: "square",
    medium: "Gel polish, hand-painted detail",
    description:
      "Almond-shape gel set in a soft dusty blue with a pearl shimmer, finished with a hand-painted silver snowflake and a single rhinestone on the ring finger.",
    story:
      "A winter set. The snowflake is freehand silver chrome, and the little stone in its center is the only bit that isn't paint.",
    image: SARAH.nailsBlueSnowflake,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "A hand resting palm-down — almond-shape gel nails in soft dusty blue with a pearly shimmer, the ring finger finished with a hand-painted silver snowflake and a small rhinestone at its center.",
  },
  {
    slug: "marbled-nail-set-blue",
    title: "Marbled Nail Set — Blue & Citrine",
    year: 2025,
    category: "nails",
    categoryLabel: "Nail Art",
    status: "not-for-sale",
    size: "small",
    span: "default",
    medium: "Gel polish, hand-painted detail",
    description:
      "Almond-shape gel set — blue marble tips with citrine-yellow accents, fine gold line work, and a black flame detail on the thumb and ring fingers.",
    story:
      "I usually keep nail work in cream and crimson but this client wanted color and she was right. The gold lines and the little black flame on the thumb are freehand.",
    image: SARAH.nailsMarbleBlue,
    imageWidth: 1200,
    imageHeight: 1200,
    alt: "Two hands resting palm-down on a stone counter — almond-shape gel nails with blue marbled tips, citrine-yellow accents, fine gold line work, and a small hand-painted black flame on the thumb and ring fingers.",
  },
];

export function getPortfolioPiece(slug: string): PortfolioPiece | undefined {
  return portfolioPieces.find((p) => p.slug === slug);
}

export function getFeaturedPieces(count = 6): PortfolioPiece[] {
  // Hand-picked priority for the home page teaser
  const order = [
    "botanical-sleeve-color",
    "fineline-hands-and-nails",
    "healed-botanical-bw",
    "angel-and-owl-sketch",
    "process-at-the-machine",
    "marbled-nail-set-blue",
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
  { value: "botanical", label: "Botanical" },
  { value: "color", label: "Color Work" },
  { value: "applied", label: "Applied" },
  { value: "embroidery", label: "Custom Embroidery" },
  { value: "paintings", label: "Sketches & Paintings" },
  { value: "nails", label: "Nail Art" },
];
