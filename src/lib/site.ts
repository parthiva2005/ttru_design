/**
 * Canonical site URL, used for metadata, sitemap and robots.
 *
 * Set NEXT_PUBLIC_SITE_URL on the host to your real domain
 * (e.g. https://ttrudesigns.com). Falls back to a sensible default so
 * local development and previews still work.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ttrudesigns.com"
).replace(/\/$/, "");
