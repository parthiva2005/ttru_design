import type { MetadataRoute } from "next";
import { portfolioPieces } from "@/lib/portfolio";
import { journalPosts } from "@/lib/journal";
import { services } from "@/lib/services";

const BASE = "https://sarahquattrucci.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/portfolio",
    "/flash",
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
      url: `${BASE}${p}`,
      lastModified: now,
    })),
    ...portfolioPieces.map((p) => ({
      url: `${BASE}/portfolio/${p.slug}`,
      lastModified: now,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
    })),
    ...journalPosts.map((p) => ({
      url: `${BASE}/journal/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    })),
  ];
}
