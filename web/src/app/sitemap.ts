import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Static build: use a fixed lastModified so the sitemap doesn't churn on every
// rebuild. Update when page content meaningfully changes.
const lastModified = new Date("2026-07-01");

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/for-directors", priority: 0.9, changeFrequency: "monthly" },
  { path: "/for-parents", priority: 0.9, changeFrequency: "monthly" },
  { path: "/certification", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ambers-story", priority: 0.8, changeFrequency: "yearly" },
  { path: "/directory", priority: 0.8, changeFrequency: "weekly" },
  { path: "/book-a-call", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/nominate", priority: 0.5, changeFrequency: "yearly" },
  { path: "/login", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
