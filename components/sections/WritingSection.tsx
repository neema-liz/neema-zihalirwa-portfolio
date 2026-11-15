import React from "react";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export function WritingSection() {
  const posts = getAllPosts(false).slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  // Get the most recent publication date or year
  const latestDateYear = posts[0] ? new Date(posts[0].date).getFullYear() : 2026;

  return (
    <section id="writing" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header 12-Col Split */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
              Writing &amp; Reflections
            </p>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                Some of my ideas in writing
              </h2>
              <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-lg font-sans">
                I enjoy writing about people, workplace culture, and what helps teams thrive together. 
                Here are a few recent notes and reflections.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
            >
              View all essays &rarr;
            </Link>
          </div>
        </div>

        {/* 3 Cards + Single Continuous Side Vertical Indicator */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Main Cards Stack (11 Cols on desktop) */}
          <div className="col-span-12 sm:col-span-11 border-b border-[#E4DDD6]">
            {posts.map((post, index) => {
              const numberStr = String(index + 1).padStart(2, "0");
              const formattedDate = formatDate(post.date);

              return (
                <article
                  key={post.slug}
                  className="group py-10 sm:py-12 border-t border-[#E4DDD6] hover:bg-[#EEE9DE]/30 transition-colors px-4 -mx-4"
                >
                  <div className="grid grid-cols-12 gap-6 items-start">
                    {/* Left: Number Ledger */}
                    <div className="col-span-2 sm:col-span-1">
                      <span className="font-mono text-xs sm:text-sm text-[#736660] group-hover:text-[#C75D38] transition-colors">
                        {numberStr}
                      </span>
                    </div>

                    {/* Middle: Date, Title, Excerpt & Read Link */}
                    <div className="col-span-10 sm:col-span-11 pr-2 sm:pr-6">
                      <time
                        dateTime={post.date}
                        className="text-xs font-mono text-[#736660] mb-2.5 block"
                      >
                        {formattedDate}
                      </time>

                      <Link href={`/blog/${post.slug}`} className="block">
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2A2421] font-light leading-snug mb-3 group-hover:text-[#C75D38] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans line-clamp-2 mb-4">
                          {post.description}
                        </p>
                        <span className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#2A2421] group-hover:text-[#C75D38] transition-colors">
                          Read essay &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right Edge: Single Continuous Vertical Line Spanning All 3 Cards (1 Col) */}
          <div className="hidden sm:flex col-span-1 flex-col items-center justify-between py-10 border-t border-b border-[#E4DDD6] select-none">
            {/* Vertical label */}
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#736660] [writing-mode:vertical-rl] rotate-180">
              ESSAYS
            </span>

            {/* Continuous vertical line spanning the full height of all 3 cards */}
            <div className="w-px flex-1 bg-[#2A2421] my-4" />

            {/* Bottom publication year */}
            <span className="text-[11px] font-mono text-[#736660] tracking-wider">
              {latestDateYear}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
