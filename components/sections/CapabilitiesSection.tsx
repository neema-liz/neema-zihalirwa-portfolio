import React from "react";
import Link from "next/link";
import { profileData } from "@/config/profile";

interface CapabilitiesSectionProps {
  overview?: boolean;
}

export function CapabilitiesSection({ overview = false }: CapabilitiesSectionProps) {
  // If rendered as an overview on the homepage: show high-level executive pillars
  if (overview) {
    return (
      <section id="capabilities" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Header 12-Col Split */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
                Capabilities &amp; Strengths
              </p>
            </div>
            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                  A multidisciplinary foundation in people operations
                </h2>
                <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
                  Combining educational pedagogy, structured recruitment workflows, modern HR tech,
                  and multilingual diplomacy to build healthy, productive teams.
                </p>
              </div>
              <Link
                href="/services#capabilities"
                className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
              >
                All tools &amp; skills &rarr;
              </Link>
            </div>
          </div>

          {/* 4 Clean Minimalist Overview Pillars */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <div className="p-8 border border-[#E4DDD6] bg-[#EEE9DE]/25 hover:bg-[#EEE9DE]/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C75D38] block mb-2">01 / Talent Acquisition</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-3">
                  Structured Hiring &amp; Candidate Care
                </h3>
                <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-4">
                  End-to-end recruitment coordination, rigorous CV screening, objective shortlisting, and candidate communication across time zones.
                </p>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#736660] pt-4 border-t border-[#E4DDD6]/60">
                Screening &middot; Sourcing &middot; Interviewing
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 border border-[#E4DDD6] bg-[#EEE9DE]/25 hover:bg-[#EEE9DE]/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C75D38] block mb-2">02 / People &amp; Learning</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-3">
                  Onboarding Pedagogy &amp; Culture
                </h3>
                <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-4">
                  Applying adult learning psychology to scaffold new hire training and volunteer programs, accelerating ramp-up and boosting team retention.
                </p>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#736660] pt-4 border-t border-[#E4DDD6]/60">
                Adult Learning &middot; Volunteer Ops &middot; Empathy
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 border border-[#E4DDD6] bg-[#EEE9DE]/25 hover:bg-[#EEE9DE]/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C75D38] block mb-2">03 / Systems &amp; Analytics</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-3">
                  Modern HR Tech &amp; Data Operations
                </h3>
                <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-4">
                  Proficiency across modern ATS and HRIS platforms (Greenhouse, BambooHR, Deel), Google Workspace, advanced Excel modeling, and SPSS research analytics.
                </p>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#736660] pt-4 border-t border-[#E4DDD6]/60">
                ATS / HRIS &middot; Google Workspace &middot; Excel &middot; SPSS
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 border border-[#E4DDD6] bg-[#EEE9DE]/25 hover:bg-[#EEE9DE]/40 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#C75D38] block mb-2">04 / Global Alignment</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-3">
                  Cross-Cultural &amp; Multilingual Fluency
                </h3>
                <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans mb-4">
                  Academic foundation in International Relations combined with trilingual fluency (English C2, French native/bilingual, Swahili native) for pan-African and international diplomacy.
                </p>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#736660] pt-4 border-t border-[#E4DDD6]/60">
                English (C2) &middot; French &middot; Swahili
              </p>
            </div>
          </div>

          {/* Minimalist Footnote Link */}
          <div className="mt-12 text-center sm:text-left pt-6 border-t border-[#E4DDD6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#736660] font-sans">
              Looking for a comprehensive list of all tools, documentation methods, and soft skills?
            </span>
            <Link
              href="/services#capabilities"
              className="text-xs font-medium tracking-[0.15em] uppercase text-[#2A2421] hover:text-[#C75D38] transition-colors"
            >
              View Full Competencies on Services Page &rarr;
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
