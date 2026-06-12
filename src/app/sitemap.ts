import type { MetadataRoute } from "next";
import { portfolioPieces } from "@/lib/portfolio";
import { journalPosts } from "@/lib/journal";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/portfolio",
    "/services",
    "/journal",
    "/about",
    "/contact",
    "/book",
    "/legal/privacy",
    "/legal/terms",
  ];
  return [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
    })),
    ...portfolioPieces.map((p) => ({
      url: `${SITE_URL}/portfolio/${p.slug}`,
      lastModified: now,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
    })),
    ...journalPosts.map((p) => ({
      url: `${SITE_URL}/journal/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    })),
  ];
}
