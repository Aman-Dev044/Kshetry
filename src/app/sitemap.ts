import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const ROUTES: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/practice-areas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/network", priority: 0.8, changeFrequency: "monthly" },
  { path: "/recognition", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.9, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

/**
 * Stamped at build time rather than request time, so the sitemap stays a
 * static file. Bump it when the site's content changes materially.
 */
const LAST_MODIFIED = "2026-10-07";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
