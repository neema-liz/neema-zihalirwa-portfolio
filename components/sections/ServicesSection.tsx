"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  // Select the top 3 core high-value pillars for the minimalist homepage view
  const featuredServices = profileData.services.slice(0, 3);

  return (
    <section id="services" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header 12-Col Split */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
              {t.servicesSection.eyebrow}
            </p>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                {t.servicesSection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
                {t.servicesSection.subtitle}
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
            >
              {t.servicesSection.viewAll} &rarr;
            </Link>
          </div>
        </div>

        {/* Minimalist Numbered Hairline Ledger (3 Core Pillars) */}
        <div className="border-b border-[#E4DDD6]">
          {featuredServices.map((service, index) => {
            const numberStr = String(index + 1).padStart(2, "0");
            const itemTranslation = t.servicesSection.items[index];

            const title = itemTranslation?.title || service.title;
            const headline = itemTranslation?.subtitle || service.headline;
            const desc = itemTranslation?.desc || service.shortDescription;

            return (
              <div
                key={service.id}
                className="group grid md:grid-cols-12 gap-6 py-10 sm:py-12 border-t border-[#E4DDD6] hover:bg-[#EEE9DE]/25 transition-colors px-4 -mx-4"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-xs sm:text-sm text-[#736660] group-hover:text-[#C75D38] transition-colors font-medium">
                    {numberStr}
                  </span>
                </div>

                {/* Title & Core Headline */}
                <div className="md:col-span-4 pr-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-2 group-hover:text-[#C75D38] transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-[#C75D38] font-sans font-medium leading-relaxed">
                    {headline}
                  </p>
                </div>

                {/* Value Add */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-4">
                    {desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services#${service.id}`}
                      className="text-xs font-mono uppercase tracking-wider text-[#2A2421] group-hover:text-[#C75D38] transition-colors inline-flex items-center"
                    >
                      {t.common.readMore} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Footnote / Invitation to Services Page */}
        <div className="mt-14 pt-8 border-t border-[#E4DDD6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-[#736660] font-sans max-w-md">
            {t.capabilitiesSection.question}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-6 py-3.5 hover:bg-[#C75D38] transition-colors self-start sm:self-auto shrink-0"
          >
            {t.common.viewServices} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
