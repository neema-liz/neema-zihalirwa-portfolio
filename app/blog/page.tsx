import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogListClient } from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Writing & Thoughts — Neema Zihalirwa Elisabeth",
  description:
    "A personal space for thoughts, ideas, and reflections on people, work, learning, and everyday life.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts(false);
  const tags = getAllTags();

  return (
    <div className="pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header: 12-Column Split */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Writing &amp; Thoughts
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
            <h1 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-4">
              Thoughts, ideas &amp; reflections.
            </h1>
            <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
              A personal space where I share what I&apos;m learning, observing, and thinking about —
              from people and work, to personal growth, curious ideas, and reflections on life.
            </p>
          </div>
        </div>

        {/* Client-Side Minimalist Filter & Paginated List */}
        <BlogListClient posts={posts} tags={tags} />
      </div>
    </div>
  );
}
