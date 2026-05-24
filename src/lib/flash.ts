import type { FlashDesign } from "./types";
import { SUPPORT } from "./assets";

export const flashDesigns: FlashDesign[] = [
  {
    slug: "panther-flash-01",
    title: "Crouching Panther",
    status: "available",
    sizeRange: "3 – 5 in",
    suggestedPlacement: "Forearm · Calf · Upper back",
    priceFrom: 280,
    color: "black",
    image: SUPPORT.flashPanther,
    alt: "Crouching panther flash design in bold black ink.",
  },
  {
    slug: "swallow-flash-02",
    title: "Pair of Swallows",
    status: "available",
    sizeRange: "2 – 3 in",
    suggestedPlacement: "Collarbone · Behind ear · Wrist",
    priceFrom: 180,
    color: "black-and-grey",
    image: SUPPORT.flashSwallow,
    alt: "Pair of traditional swallows in fine black-and-grey line work.",
  },
  {
    slug: "rose-flash-03",
    title: "Single Stem Rose",
    status: "reserved",
    sizeRange: "3 – 4 in",
    suggestedPlacement: "Inner arm · Sternum",
    priceFrom: 240,
    color: "black",
    image: SUPPORT.flashRose,
    alt: "Single long-stem rose in fine-line ink.",
  },
  {
    slug: "scorpion-flash-04",
    title: "Small Scorpion",
    status: "available",
    sizeRange: "2 in",
    suggestedPlacement: "Ankle · Behind ear",
    priceFrom: 160,
    color: "black",
    image: SUPPORT.flashScorpion,
    alt: "Small black-ink scorpion design.",
  },
  {
    slug: "dagger-flash-05",
    title: "Dagger Through Skull",
    status: "taken",
    sizeRange: "4 – 6 in",
    suggestedPlacement: "Upper arm · Thigh",
    priceFrom: 360,
    color: "color",
    image: SUPPORT.flashDagger,
    alt: "Traditional dagger-and-skull flash with crimson detail.",
  },
  {
    slug: "snake-vine-flash-06",
    title: "Snake & Vine",
    status: "available",
    sizeRange: "6 – 9 in",
    suggestedPlacement: "Forearm · Calf",
    priceFrom: 480,
    color: "black",
    image: SUPPORT.flashSnake,
    alt: "Long format snake threaded through climbing vine.",
  },
  {
    slug: "moth-flash-07",
    title: "Moth & Moon",
    status: "available",
    sizeRange: "3 – 4 in",
    suggestedPlacement: "Sternum · Spine",
    priceFrom: 260,
    color: "black-and-grey",
    image: SUPPORT.flashMoth,
    alt: "Moth perched beneath a crescent moon in soft grey.",
  },
  {
    slug: "wildflower-flash-08",
    title: "Wildflower Sprig",
    status: "available",
    sizeRange: "2 – 3 in",
    suggestedPlacement: "Ankle · Wrist · Behind ear",
    priceFrom: 180,
    color: "black",
    image: SUPPORT.flashWildflower,
    alt: "Delicate wildflower sprig in single-pass line work.",
  },
];

export function getFlashByStatus(status: FlashDesign["status"]): FlashDesign[] {
  return flashDesigns.filter((f) => f.status === status);
}

export function getAvailableFlash(): FlashDesign[] {
  return getFlashByStatus("available");
}
