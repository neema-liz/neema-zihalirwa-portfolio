import React from "react";
import Link from "next/link";
import { clientStories } from "@/config/stories";

export function ClientStoriesSection() {
  return (
    <section id="stories" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E4DDD6]">
          <div>
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#C75D38] mb-2">
              Client Stories
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight">
              Work with organizations
            </h2>
          </div>
          <Link
            href="/client-stories"
            className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
          >
            All client stories &rarr;
          </Link>
        </div>

        {/* 3 Minimalist Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {clientStories.map((story, index) => {
            const numberStr = String(index + 1).padStart(2, "0");

            return (
              <article
                key={story.id}
                className="group flex flex-col justify-between p-7 sm:p-8 bg-[#EEE9DE]/15 border border-transparent hover:bg-[#EEE9DE]/50 hover:border-[#2A2421]/1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number & Organization */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#736660] group-hover:text-[#C75D38] transition-colors font-medium">
                      {numberStr}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#736660]">
                      {story.sector.split("&")[0].trim()}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-wider font-medium text-[#736660] mb-2">
                    {story.client.split("(")[0].trim()}
                  </p>

                  {/* What I Did Title */}
                  <Link href={`/client-stories#${story.slug}`} className="block">
                    <h3 className="font-serif text-lg sm:text-xl text-[#2A2421] font-light leading-snug mb-3 group-hover:text-[#C75D38] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans line-clamp-2 mb-6">
                      {story.homepageTeaser}
                    </p>
                  </Link>
                </div>

                {/* Footer with Minimalist Focus & Link */}
                <div className="pt-4 border-t border-[#E4DDD6]/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C75D38]">
                    {story.focusAreas[0]}
                  </span>
                  <Link
                    href={`/client-stories#${story.slug}`}
                    className="inline-flex items-center text-[10px] font-medium uppercase tracking-[0.10em] text-[#2A2421] group-hover:text-[#C75D38] transition-colors"
                  >
                    Read &rarr;
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
