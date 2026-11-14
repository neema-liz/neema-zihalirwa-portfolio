import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
import { marked } from "marked";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

export const PostFrontmatterSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  author: z.string().default("Neema Zihalirwa Elisabeth"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  published: z.boolean().default(true),
  coverImage: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export interface BlogPostMetadata extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMetadata {
  html: string;
  content: string;
}

/**
 * Calculates estimated reading time in minutes (~200 words per minute)
 */
export function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Formats YYYY-MM-DD date into human-readable string without UTC timezone skew
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;

  const [yearStr, monthStr, dayStr] = parts;
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const day = parseInt(dayStr, 10);

  const date = new Date(Date.UTC(year, month, day));
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Retrieves all valid blog post summaries, sorted chronologically descending.
 * By default, excludes drafts (published === false).
 */
export function getAllPosts(includeDrafts: boolean = false): BlogPostMetadata[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIRECTORY);
  const posts: BlogPostMetadata[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md") && !fileName.endsWith(".mdx")) {
      continue;
    }

    const fullPath = path.join(BLOG_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(/*turbopackIgnore: true*/ fullPath, "utf8");

    try {
      const { data, content } = matter(fileContents);
      const parsed = PostFrontmatterSchema.safeParse(data);

      if (!parsed.success) {
        console.warn(`[blog] Skipping file "${fileName}" due to invalid frontmatter:`, parsed.error.issues);
        continue;
      }

      if (!includeDrafts && parsed.data.published === false) {
        continue;
      }

      const slug = fileName.replace(/\.(md|mdx)$/, "");
      posts.push({
        ...parsed.data,
        slug,
        readingTime: calculateReadingTime(content),
      });
    } catch (err) {
      console.error(`[blog] Error reading file "${fileName}":`, err);
    }
  }

  // Sort descending: newest posts first
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Retrieves a single post by slug, compiling markdown body to safe HTML.
 * Returns null if the post doesn't exist or is an unpublished draft (when includeDrafts is false).
 */
export async function getPostBySlug(
  slug: string,
  includeDrafts: boolean = false
): Promise<BlogPost | null> {
  const mdPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);

  let targetPath = "";
  if (fs.existsSync(/*turbopackIgnore: true*/ mdPath)) {
    targetPath = mdPath;
  } else if (fs.existsSync(/*turbopackIgnore: true*/ mdxPath)) {
    targetPath = mdxPath;
  }

  if (!targetPath) {
    return null;
  }

  const fileContents = fs.readFileSync(/*turbopackIgnore: true*/ targetPath, "utf8");
  const { data, content } = matter(fileContents);
  const parsed = PostFrontmatterSchema.safeParse(data);

  if (!parsed.success) {
    console.warn(`[blog] Invalid frontmatter in slug "${slug}":`, parsed.error.issues);
    return null;
  }

  if (!includeDrafts && parsed.data.published === false) {
    return null;
  }

  // Configure marked with sensible rendering defaults
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const html = await marked.parse(content);

  return {
    ...parsed.data,
    slug,
    readingTime: calculateReadingTime(content),
    content,
    html,
  };
}

/**
 * Collects all unique tags with post counts
 */
export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts(false);
  const tagCounts: Record<string, number> = {};

  for (const post of posts) {
    for (const tag of post.tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Retrieves adjacent posts for navigation at the bottom of an article
 */
export function getAdjacentPosts(currentSlug: string): {
  prev: BlogPostMetadata | null;
  next: BlogPostMetadata | null;
} {
  const posts = getAllPosts(false);
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null; // older
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null; // newer

  return { prev, next };
}
