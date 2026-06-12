/**
 * Shared content types. In production these would be backed by Sanity
 * schemas; here they describe the local mock data shape.
 */

export type PortfolioCategory =
  | "botanical"
  | "color"
  | "applied"
  | "embroidery"
  | "paintings"
  | "nails";

export type PortfolioStatus = "available" | "one-of-one" | "not-for-sale";

/**
 * Span variants for the masonry grid. The grid uses
 * `grid-auto-flow: dense` so dropping a `feature` (2x2) anywhere reshapes
 * the surrounding pieces into a magazine-style layout.
 */
export type PortfolioSpan =
  | "default" // 1 col x 1 row, 4:5 portrait
  | "square" // 1 col x 1 row, 1:1
  | "tall" // 1 col x 2 row, 3:5
  | "wide" // 2 col x 1 row, 16:10
  | "feature"; // 2 col x 2 row, 4:5 — used sparingly

export interface PortfolioPiece {
  slug: string;
  title: string;
  year: number;
  category: PortfolioCategory;
  categoryLabel: string;
  status: PortfolioStatus;
  size: "small" | "medium" | "large";
  medium: string;
  description: string;
  story: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  /** Layout hint for the masonry grid. */
  span?: PortfolioSpan;
  /** Optional companion image for healed-result reveal */
  healedImage?: string;
}

export type FlashStatus = "available" | "reserved" | "taken";

export interface FlashDesign {
  slug: string;
  title: string;
  status: FlashStatus;
  sizeRange: string;
  suggestedPlacement: string;
  color: "black" | "color" | "black-and-grey";
  image: string;
  alt: string;
}

export type ServiceSlug =
  | "tattoo-design"
  | "embroidery"
  | "commissions"
  | "nail-art";

export interface Service {
  slug: ServiceSlug;
  name: string;
  tagline: string;
  description: string;
  turnaround: string;
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  heroImage: string;
  galleryImages: string[];
}

export interface JournalPost {
  slug: string;
  title: string;
  category: "Process" | "Healed Results" | "Sketchbook" | "Studio Notes";
  excerpt: string;
  body: string[];
  coverImage: string;
  readMinutes: number;
  publishedAt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}
