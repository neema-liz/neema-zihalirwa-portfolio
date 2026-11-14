import React from "react";
import { profileData } from "@/config/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[#E4DDD6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left 4 Columns: Section Eyebrow */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Experience
            </p>
          </div>

          {/* Right 8 Columns: Editorial Career Timeline */}
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-6">
              Practical experience in talent acquisition, HR operations, and organizational coordination.
            </h2>

            <p className="text-sm text-[#736660] leading-relaxed max-w-xl font-sans mb-16">
              Hands-on HR practice across international civil society and technology-driven
              startups, emphasizing structured recruitment processes, accountable administration,
              and cross-functional collaboration.
            </p>

            {/* Experience Entries */}
            <div className="space-y-16">
              {profileData.experience.map((exp) => (
                <div key={exp.id} className="pt-8 border-t border-[#E4DDD6] first:border-0 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-serif text-2xl text-[#2A2421] font-normal">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-[#736660] tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.15em] text-[#C75D38] font-sans font-medium mb-4">
                    {exp.organization} &middot; {exp.location}
                  </p>

                  <p className="text-sm text-[#736660] leading-relaxed font-sans max-w-xl mb-6">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-3">
                      Key Responsibilities &middot; Scope
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#736660] font-sans">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2">
                          <span className="text-[#C75D38] mt-0.5">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements, if available */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="p-4 bg-[#EEE9DE]/50 border-l-2 border-[#C75D38] max-w-xl">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-1 font-medium">
                        Verified Milestone
                      </p>
                      {exp.achievements.map((ach) => (
                        <p key={ach} className="text-xs text-[#2A2421] font-sans italic">
                          &ldquo;{ach}&rdquo;
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
