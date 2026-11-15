"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

interface CapabilitiesSectionProps {
  overview?: boolean;
}

export function CapabilitiesSection({ overview = false }: CapabilitiesSectionProps) {
  const { t } = useLanguage();

  // If rendered as an overview on the homepage: show high-level executive pillars
  if (overview) {
    return (
      <section id="capabilities" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Header 12-Col Split */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
                {t.capabilitiesSection.eyebrow}
              </p>
            </div>
            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                  {t.capabilitiesSection.title}
                </h2>
                <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
                  {t.capabilitiesSection.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* 4 Clean Minimalist Overview Pillars */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {t.capabilitiesSection.pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-8 border-none bg-[#EEE9DE]/2 hover:bg-[#EEE9DE]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#C75D38] block mb-2">{pillar.tag}</span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-4">
                    {pillar.desc}
                  </p>
                </div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#736660] pt-4 border-t border-[#E4DDD6]/60">
                  {pillar.footer}
                </p>
              </div>
            ))}
          </div>

          {/* Minimalist Footnote Link */}
          <div className="mt-12 text-center sm:text-left pt-6 border-t border-[#E4DDD6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#736660] font-sans">
              {t.capabilitiesSection.question}
            </span>
            <Link
              href="/services#capabilities"
              className="text-xs font-medium tracking-[0.15em] text-[#2A2421] hover:text-[#C75D38] transition-colors"
            >
              {t.capabilitiesSection.viewMore} &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full detailed view (rendered on the Services page)
  const standardGroups = profileData.capabilities.filter(
    (g) => g.category.toLowerCase() !== "languages"
  );
  const languageGroup = profileData.capabilities.find(
    (g) => g.category.toLowerCase() === "languages"
  );

  return (
    <section id="capabilities" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left 4 Columns: Section Eyebrow */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Capabilities &amp; Systems
            </p>
          </div>

          {/* Right 8 Columns: Categorized Competencies */}
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
              Competencies across people operations, organizational coordination, and HR systems.
            </h2>

            <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans mb-14">
              Grounding human resources in structured operational frameworks, modern digital tooling,
              adult learning pedagogy, and multilingual fluency across regional and international teams.
            </p>

            {/* Competency Groups with Minimalist Typographic Presentation (No Heavy Badges) */}
            <div className="space-y-12">
              {standardGroups.map((group) => (
                <div
                  key={group.category}
                  className="pt-8 border-t border-[#E4DDD6] first:border-0 first:pt-0"
                >
                  <h3 className="font-serif text-lg sm:text-xl text-[#2A2421] font-normal mb-4">
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-xs sm:text-sm font-sans text-[#2A2421] py-1.5 px-3 border border-[#E4DDD6] bg-[#EEE9DE]/20 hover:border-[#2A2421]/60 hover:text-[#C75D38] transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Dedicated Multilingual Presentation */}
              {languageGroup && (
                <div className="pt-10 border-t border-[#E4DDD6]">
                  <div className="mb-6">
                    <h3 className="font-serif text-lg sm:text-xl text-[#2A2421] font-normal mb-2">
                      Multilingual Fluency
                    </h3>
                    <p className="text-xs sm:text-sm text-[#736660] font-sans leading-relaxed max-w-xl">
                      Fluent across international, bilingual, and regional African languages &mdash;
                      enabling seamless cross-cultural diplomacy, multicultural candidate screening,
                      and comfortable stakeholder coordination across borders.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* English */}
                    <div className="p-5 border border-[#E4DDD6] bg-[#EEE9DE]/25 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#C75D38] block mb-1">
                          International Business
                        </span>
                        <h4 className="font-serif text-lg text-[#2A2421] font-normal mb-1">
                          English
                        </h4>
                      </div>
                      <p className="text-xs text-[#736660] font-sans mt-3">
                        C2 Full Professional &amp; Academic Proficiency. High comfort in written contracts and cross-border calls.
                      </p>
                    </div>

                    {/* French */}
                    <div className="p-5 border border-[#E4DDD6] bg-[#EEE9DE]/25 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#C75D38] block mb-1">
                          Bilingual Operations
                        </span>
                        <h4 className="font-serif text-lg text-[#2A2421] font-normal mb-1">
                          French
                        </h4>
                      </div>
                      <p className="text-xs text-[#736660] font-sans mt-3">
                        Native / Bilingual Working Proficiency. Natural fluency for Francophone and pan-African administration.
                      </p>
                    </div>

                    {/* Swahili */}
                    <div className="p-5 border border-[#E4DDD6] bg-[#EEE9DE]/25 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#C75D38] block mb-1">
                          Regional Lingua Franca
                        </span>
                        <h4 className="font-serif text-lg text-[#2A2421] font-normal mb-1">
                          Swahili
                        </h4>
                      </div>
                      <p className="text-xs text-[#736660] font-sans mt-3">
                        Native Fluency. Deep cultural connection across the East &amp; Central African community.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
