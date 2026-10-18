import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { absoluteUrl, nav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((item) => ({
    url: absoluteUrl(item.href),
    changeFrequency: item.href === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8,
  }));
  const articles = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.dateModified ?? p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...articles];
}
