import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const now = new Date();
  const urls = [
    "/",
    "/services",
    "/services/seo",
    "/services/web-development",
    "/services/ui-ux",
    "/services/performance",
    "/work",
    "/work/startup-landing-page",
    "/work/small-business-website-redesign",
    "/work/saas-landing-page",
  ];

  return urls.map((path, i) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: i === 0 ? 1 : 0.7,
  }));
}

