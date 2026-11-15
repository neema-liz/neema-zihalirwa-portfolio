"use client";

import React, { useState, useMemo } from "react";
import { BlogPostMetadata } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { useLanguage } from "@/context/LanguageContext";

interface BlogListClientProps {
  posts: BlogPostMetadata[];
  tags: { tag: string; count: number }[];
}

const POSTS_PER_PAGE = 5;

export function BlogListClient({ posts, tags }: BlogListClientProps) {
  const { t } = useLanguage();
  const listT = t.blogPage.list;

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const pageOfText = listT.pageOf
    .replace("{current}", String(currentPage))
    .replace("{total}", String(totalPages));

  return (
    <div>
      {/* Sleek Minimalist Topic Filter (No heavy border badges) */}
      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-6 border-b border-[#E4DDD6] mb-12 text-xs sm:text-sm font-sans">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#736660]">
            {listT.topics}
          </span>

          <button
            onClick={() => handleSelectTag(null)}
            className={`transition-colors pb-0.5 ${
              selectedTag === null
                ? "text-[#2A2421] font-medium border-b border-[#2A2421]"
                : "text-[#736660] hover:text-[#2A2421]"
            }`}
          >
            {listT.all} <span className="font-mono text-[10px] text-[#736660]">({posts.length})</span>
          </button>

          {tags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => handleSelectTag(tag)}
              className={`transition-colors pb-0.5 ${
                selectedTag === tag
                  ? "text-[#2A2421] font-medium border-b border-[#2A2421]"
                  : "text-[#736660] hover:text-[#2A2421]"
              }`}
            >
              {tag}{" "}
              <span className="font-mono text-[10px] text-[#736660]">({count})</span>
            </button>
          ))}
        </div>
      )}

      {/* Articles Stack */}
      {paginatedPosts.length > 0 ? (
        <div className="space-y-6 sm:space-y-8">
          {paginatedPosts.map((post, index) => {
            const overallIndex = (currentPage - 1) * POSTS_PER_PAGE + index;
            return <BlogCard key={post.slug} post={post} index={overallIndex} />;
          })}
        </div>
      ) : (
        <div className="py-20 text-center border border-[#E4DDD6] bg-[#EEE9DE]/20 p-8">
          <p className="text-sm text-[#736660] font-sans mb-4">
            {listT.noArticles} &ldquo;{selectedTag}&rdquo;.
          </p>
          <button
            onClick={() => handleSelectTag(null)}
            className="text-xs uppercase tracking-[0.15em] font-medium text-[#2A2421] border-b border-[#2A2421] pb-0.5 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors"
          >
            {listT.showAll}
          </button>
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="pt-12 sm:pt-16 mt-12 border-t border-[#E4DDD6] flex items-center justify-between text-xs sm:text-sm font-sans text-[#736660]">
          <button
            onClick={() => {
              setCurrentPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
            className="uppercase tracking-[0.15em] text-xs font-medium text-[#2A2421] disabled:opacity-25 disabled:cursor-not-allowed hover:text-[#C75D38] transition-colors"
          >
            {listT.newer}
          </button>

          <span className="font-mono text-xs text-[#736660]">
            {pageOfText}
          </span>

          <button
            onClick={() => {
              setCurrentPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === totalPages}
            className="uppercase tracking-[0.15em] text-xs font-medium text-[#2A2421] disabled:opacity-25 disabled:cursor-not-allowed hover:text-[#C75D38] transition-colors"
          >
            {listT.older}
          </button>
        </div>
      )}
    </div>
  );
}
