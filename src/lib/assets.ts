/**
 * Centralized asset registry.
 *
 * Every gallery, portfolio piece and service hero pulls its image src
 * from this file — change a URL here and it propagates across the site.
 *
 * Each entry has two parts:
 *   - `local`  — the eventual path on disk (under /public/work/sarah/)
 *   - `fallback` — a high-quality Unsplash photo that approximates the
 *                  same style, used until the real file is dropped in.
 *
 * `asset()` returns the local path if you have set
 * NEXT_PUBLIC_USE_LOCAL_ASSETS=1, otherwise the fallback. This means the
 * site looks complete *now* with stylistic stand-ins, and flips to
 * real photography by toggling a single env var once files are saved.
 */

interface AssetEntry {
  local: string;
  fallback: string;
}

const USE_LOCAL =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_USE_LOCAL_ASSETS === "1";

function asset(entry: AssetEntry): string {
  return USE_LOCAL ? entry.local : entry.fallback;
}

/* ============================================================
   SARAH'S REAL WORK
   Seven photos provided directly. See /public/work/sarah/README.md
   ============================================================ */

export const SARAH = {
  /** Process: gloved hand + tattoo machine on a heavily-tattooed forearm */
  processMachine: asset({
    local: "/work/sarah/process-machine.jpg",
    fallback:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Two hands resting — fine-line finger tattoos + French-tip nails */
  handsFinelineNails: asset({
    local: "/work/sarah/hands-fineline-nails.jpg",
    fallback:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Almond-shape nails — marbled blue + yellow + black detail */
  nailsMarbleBlue: asset({
    local: "/work/sarah/nails-marble-blue.jpg",
    fallback:
      "https://images.unsplash.com/photo-1632344044143-8de8a8ce3795?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Color botanical forearm sleeve: cactus, daffodil, blue rose, moth */
  botanicalColorSleeve: asset({
    local: "/work/sarah/botanical-color-sleeve.jpg",
    fallback:
      "https://images.unsplash.com/photo-1604004215662-cdd0c277e2c4?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Healed black & grey fine-line botanical — butterfly on cactus */
  botanicalBwHealed: asset({
    local: "/work/sarah/botanical-bw-healed.jpg",
    fallback:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Avatar: The Last Airbender acrylic painting on canvas */
  paintingAvatar: asset({
    local: "/work/sarah/painting-avatar.jpg",
    fallback:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Pencil sketch: winged figure with owl, signed P.M.C. */
  sketchAngelOwl: asset({
    local: "/work/sarah/sketch-angel-owl.jpg",
    fallback:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85&auto=format&fit=crop",
  }),
} as const;

/* ============================================================
   SUPPORTING WORK
   Curated stand-ins that match Sarah's stylistic territory.
   Swap any of these to additional real work as it comes in.
   ============================================================ */

export const SUPPORT = {
  /* Flash designs — traditional vocabulary, fine line */
  flashPanther: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&q=85&auto=format&fit=crop",
  flashSwallow: "https://images.unsplash.com/photo-1565616424566-3a3a8e9aaae4?w=1200&q=85&auto=format&fit=crop",
  flashScorpion: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=1200&q=85&auto=format&fit=crop",
  flashDagger: "https://images.unsplash.com/photo-1577084125604-1eb4c0f2a45c?w=1200&q=85&auto=format&fit=crop",
  flashSnake: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&q=85&auto=format&fit=crop",
  flashMoth: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=85&auto=format&fit=crop",
  flashRose: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=85&auto=format&fit=crop",
  flashWildflower: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=85&auto=format&fit=crop",

  /* Botanical fine-line — applied & studies */
  botanicalApplied: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=1600&q=85&auto=format&fit=crop",
  botanicalSketch: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85&auto=format&fit=crop",
  botanicalFreshShoulder: "https://images.unsplash.com/photo-1604004215662-cdd0c277e2c4?w=1600&q=85&auto=format&fit=crop",
  botanicalLineWork: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&q=85&auto=format&fit=crop",

  /* Custom wearables — denim, painted fabrics */
  wearableJeans: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1600&q=85&auto=format&fit=crop",
  wearableJacket: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1600&q=85&auto=format&fit=crop",
  wearableCanvasBag: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=1600&q=85&auto=format&fit=crop",

  /* Paintings & commissioned sketches */
  paintingSunset: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1600&q=85&auto=format&fit=crop",
  paintingFloralStudy: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85&auto=format&fit=crop",
  paintingPortrait: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=1600&q=85&auto=format&fit=crop",

  /* Nail art */
  nailsCreamCrimson: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=85&auto=format&fit=crop",
  nailsLineDetail: "https://images.unsplash.com/photo-1632344044143-8de8a8ce3795?w=1600&q=85&auto=format&fit=crop",
  nailsAlmondNatural: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85&auto=format&fit=crop",

  /* Applied / healed-result */
  appliedPanther: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=1600&q=85&auto=format&fit=crop",

  /* Studio + portrait imagery */
  studioPortrait: "https://images.unsplash.com/photo-1604004215662-cdd0c277e2c4?w=1600&q=85&auto=format&fit=crop",
  studioDesk: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85&auto=format&fit=crop",
} as const;
