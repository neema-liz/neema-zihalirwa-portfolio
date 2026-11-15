"use client";

import React from "react";
import { publishedAffiliations } from "@/config/affiliations";
import { useLanguage } from "@/context/LanguageContext";

export function AffiliationsBar() {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#736660] mb-3">
            {t.affiliations.eyebrow}
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2A2421] leading-tight">
            {t.affiliations.title}
          </h2>
        </div>

        {/* 4-Column Minimalist Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center">
          {publishedAffiliations.map((org) => (
            <div key={org.id} className="group relative inline-flex flex-col items-center">
              {org.href ? (
                <a
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl sm:text-2xl font-light tracking-tight text-[#736660] group-hover:text-[#2A2421] transition-colors duration-300 text-center"
                >
                  {org.name}
                </a>
              ) : (
                <span className="font-serif text-xl sm:text-2xl font-light tracking-tight text-[#736660] group-hover:text-[#2A2421] transition-colors duration-300 text-center">
                  {org.name}
                </span>
              )}

              {/* Delicate Terracotta Hover Hairline */}
              <div className="h-px w-0 bg-[#C75D38] group-hover:w-full transition-all duration-300 mt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
