import React from "react";
import Link from "next/link";
import { clientStories } from "@/config/stories";

export function ClientStoriesSection() {
  return (
    <section id="stories" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header 12-Col Split */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Client Stories
            </p>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-4">
                Impact in practice
              </h2>
              <p className="text-sm text-[#736660] leading-relaxed max-w-lg font-sans">
                Real-world engagements demonstrating how structured talent operations, 
                pedagogical scaffolding, and accountable coordination strengthen emerging organizations.
              </p>
            </div>
            <Link
              href="/client-stories"
              className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              View all stories &rarr;
            </Link>
          </div>
        </div>

        {/* 3-Column Architectural Cards */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-[#E4DDD6] pt-12">
          {clientStories.map((story, index) => {
            const numberStr = String(index + 1).padStart(2, "0");
            return (
              <div
                key={story.id}
                className="group flex flex-col justify-between p-6 sm:p-8 bg-[#EEE9DE]/30 border border-[#E4DDD6] hover:bg-[#EEE9DE]/60 hover:border-[#C75D38]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#C75D38] font-medium">
                      {numberStr}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#736660]">
                      {story.sector}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#2A2421] mb-2">
                    {story.client}
                  </p>

                  <h3 className="font-serif text-xl text-[#2A2421] font-light leading-snug mb-4 group-hover:text-[#C75D38] transition-colors">
                    {story.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-6">
                    {story.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E4DDD6]/60">
                  <Link
                    href={`/client-stories#${story.slug}`}
                    className="inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-[#2A2421] group-hover:text-[#C75D38] transition-colors"
                  >
                    Read case study &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
