/**
 * Centralized asset registry.
 *
 * Every gallery, portfolio piece and service hero pulls its image src
 * from this file — change a URL here and it propagates across the site.
 *
 * Each `asset()` entry has two parts:
 *   - `local`  — the path on disk under /public/work/sarah/
 *   - `fallback` — a verified-live stand-in URL used when local files
 *                  aren't dropped in yet.
 *
 * `asset()` returns the local path when NEXT_PUBLIC_USE_LOCAL_ASSETS=1,
 * otherwise the fallback. This lets the site look complete *now* and
 * flip to real photography by toggling a single env var.
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
   SARAH'S REAL WORK — eight photographs supplied directly.
   See /public/work/sarah/README.md for filenames.
   ============================================================ */

export const SARAH = {
  /** Process: gloved hand + tattoo machine on a heavily-tattooed forearm */
  processMachine: asset({
    local: "/work/sarah/process-machine.webp",
    fallback:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Two hands resting — fine-line finger tattoos + French-tip nails */
  handsFinelineNails: asset({
    local: "/work/sarah/hands-fineline-nails.webp",
    fallback:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Almond-shape nails — marbled blue + yellow + black detail */
  nailsMarbleBlue: asset({
    local: "/work/sarah/nails-marble-blue.webp",
    fallback:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Almond nails — dusty blue with a silver snowflake + rhinestone accent */
  nailsBlueSnowflake: asset({
    local: "/work/sarah/nails-blue-snowflake.png",
    fallback:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Color botanical forearm sleeve: cactus, daffodil, blue rose, moth */
  botanicalColorSleeve: asset({
    local: "/work/sarah/botanical-color-sleeve.webp",
    fallback:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Healed black & grey fine-line botanical — butterfly on cactus */
  botanicalBwHealed: asset({
    local: "/work/sarah/botanical-bw-healed.webp",
    fallback:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Avatar: The Last Airbender acrylic painting on canvas */
  paintingAvatar: asset({
    local: "/work/sarah/painting-avatar.webp",
    fallback:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Pencil sketch: winged figure with owl, signed P.M.C. */
  sketchAngelOwl: asset({
    local: "/work/sarah/sketch-angel-owl.png",
    fallback:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Portrait of Sarah — color, teal off-shoulder dress, holding a bouquet outdoors */
  sarahPortrait: asset({
    local: "/work/sarah/sarah-portrait.jpeg",
    fallback:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Hand-embroidered daisies on the waistband of light-wash denim */
  denimEmbroideryDaisies: asset({
    local: "/work/sarah/denim-embroidery-daisies.webp",
    fallback:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1600&q=85&auto=format&fit=crop",
  }),
  /** Painted BSU bear-paw and bear-head designs on grey denim back pockets */
  denimBsuPockets: asset({
    local: "/work/sarah/denim-bsu-pockets.webp",
    fallback:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1600&q=85&auto=format&fit=crop",
  }),
} as const;

/* ============================================================
   SUPPORTING SLOTS
   With the "show only real photos" policy in effect, every
   non-SARAH slot has been retired. Anything that used to live
   under SUPPORT.* now points at one of Sarah's real photos so
   downstream code never reaches a stock URL.
   ============================================================ */

export const SUPPORT = {
  studioPortrait: SARAH.sarahPortrait,
  studioDesk: SARAH.processMachine,
} as const;
