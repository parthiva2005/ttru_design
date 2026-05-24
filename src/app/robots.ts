import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/book/confirmed"],
    },
    sitemap: "https://sarahquattrucci.com/sitemap.xml",
  };
}
