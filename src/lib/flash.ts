import type { FlashDesign } from "./types";

/**
 * The bookable flash sheet has been retired.
 *
 * The studio doesn't currently have real photographs of original
 * flash drawings on paper, and the "show only real photos" policy
 * means an empty sheet is more honest than a stock-image gallery.
 *
 * Reintroduce designs by dropping a photograph of each into
 * /public/work/sarah/, wiring it through SARAH.* in assets.ts, and
 * adding a FlashDesign entry here.
 */
export const flashDesigns: FlashDesign[] = [];

export function getFlashByStatus(status: FlashDesign["status"]): FlashDesign[] {
  return flashDesigns.filter((f) => f.status === status);
}

export function getAvailableFlash(): FlashDesign[] {
  return getFlashByStatus("available");
}
