import React from "react";
import { publishedAffiliations } from "@/config/affiliations";

export function AffiliationsBar() {
  return (
    <section className="border-y border-[#E4DDD6] py-8 sm:py-10 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
          {/* Subtle Minimalist Eyebrow */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38]" />
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#736660]">
              Involvements &amp; Affiliations
            </p>
          </div>

          {/* Organizations Row */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start lg:justify-end gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-4">
            {publishedAffiliations.map((org) => {
              const content = (
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-[#2A2421] group-hover:text-[#C75D38] transition-colors duration-300">
                  {org.name}
                </span>
              );

              return (
                <div key={org.id} className="group relative py-1">
                  {org.href ? (
                    <a
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      aria-label={`${org.name} (opens in a new tab)`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                  {/* Delicate Terracotta Hover Hairline */}
                  <div className="h-px w-0 bg-[#C75D38] group-hover:w-full transition-all duration-300 ease-out mt-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
