import React from "react";
import Link from "next/link";
import { BlogPostMetadata, formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMetadata;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const numberStr = String(index + 1).padStart(2, "0");

  return (
    <article className="group py-10 border-t border-[#E4DDD6] hover:bg-[#EEE9DE]/30 transition-colors px-4 -mx-4">
      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Col 1: Number */}
        <div className="md:col-span-1 hidden sm:block">
          <span className="text-xs text-[#736660] font-mono">{numberStr}</span>
        </div>

        {/* Col 2-5: Date, Reading Time, and Tags */}
        <div className="md:col-span-4 space-y-2">
          <div className="flex items-center gap-3 text-xs text-[#736660] font-sans">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] border border-[#E4DDD6] text-[#736660]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Col 6-12: Title, Description, Link */}
        <div className="md:col-span-7">
          <Link href={`/blog/${post.slug}`} className="block group-hover:opacity-95">
            <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal leading-snug mb-3 group-hover:text-[#C75D38] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-[#736660] leading-relaxed font-sans mb-4">
              {post.description}
            </p>
            <span className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#2A2421] border-b border-[#2A2421] pb-0.5 group-hover:border-[#C75D38] group-hover:text-[#C75D38] transition-colors">
              Read Essay &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
