import React from "react";
import { profileData } from "@/config/profile";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 md:py-32 border-t border-[#E4DDD6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left 4 Columns: Section Eyebrow */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Capabilities
            </p>
          </div>

          {/* Right 8 Columns: Categorized Competencies */}
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-8">
              Competencies across people operations, organizational coordination, and analytics.
            </h2>

            <p className="text-sm text-[#736660] leading-relaxed max-w-xl font-sans mb-14">
              Grounding human resources in structured operational frameworks, analytical
              tools, and multilingual fluency across regional and international settings.
            </p>

            <div className="space-y-12">
              {profileData.capabilities.map((group) => (
                <div key={group.category} className="pt-8 border-t border-[#E4DDD6] first:border-0 first:pt-0">
                  <h3 className="font-serif text-lg sm:text-xl text-[#2A2421] font-normal mb-4">
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-xs tracking-wide px-3.5 py-1.5 bg-[#EEE9DE]/60 border border-[#E4DDD6] text-[#2A2421] font-sans"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
