import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const posts = getAllPosts(false);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-11-14T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-11-14T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-11-14T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-11-14T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-11-14T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
