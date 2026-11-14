import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Essays & Insights — Neema Zihalirwa Elisabeth",
  description:
    "Reflections and practical analysis on human resources, organizational design, pedagogical frameworks, and talent acquisition across emerging African markets.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts(false);
  const tags = getAllTags();

  return (
    <div className="pt-16 pb-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header: 12-Column Split */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Essays &amp; Insights
            </p>
            <div>
              <Link
                href="/rss.xml"
                target="_blank"
                className="inline-flex items-center text-[11px] uppercase tracking-wider text-[#736660] hover:text-[#C75D38] transition-colors"
              >
                RSS Feed &rarr;
              </Link>
            </div>
          </div>

          <div className="md:col-span-8">
            <h1 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-6">
              Reflections on people operations, educational pedagogy, and organizational culture.
            </h1>
            <p className="text-sm text-[#736660] leading-relaxed max-w-xl font-sans">
              Practical field notes and strategic frameworks examining how structured recruitment,
              adult learning theory, and cross-cultural coordination empower growing teams.
            </p>
          </div>
        </div>

        {/* Topics Filter Bar */}
        {tags.length > 0 && (
          <div className="py-4 border-y border-[#E4DDD6] mb-12 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mr-2">
              Topics:
            </span>
            {tags.map(({ tag, count }) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[#EEE9DE]/60 border border-[#E4DDD6] text-[#2A2421] font-sans"
              >
                {tag} <span className="text-[#736660] text-[10px] ml-1">({count})</span>
              </span>
            ))}
          </div>
        )}

        {/* Article Listing */}
        {posts.length > 0 ? (
          <div className="border-b border-[#E4DDD6]">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-t border-b border-[#E4DDD6]">
            <p className="text-sm text-[#736660] font-sans">
              No published essays available at the moment. New articles will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
