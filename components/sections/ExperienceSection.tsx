"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header: 12-Col Split */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
              {t.experienceSection.eyebrow}
            </p>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                {t.experienceSection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-lg font-sans">
                {t.experienceSection.subtitle}
              </p>
            </div>
            <Link
              href="/experience"
              className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
            >
              {t.experienceSection.viewAll} &rarr;
            </Link>
          </div>
        </div>

        {/* Short Overview Cards with Side Date & Vertical Line Timeline Axis */}
        <div className="space-y-6 sm:space-y-8">
          {profileData.experience.map((exp, index) => {
            const numberStr = String(index + 1).padStart(2, "0");
            const roleKey = exp.id === "exp-1" ? "dttasa" : exp.id === "exp-2" ? "kazieasy" : null;
            const roleData = roleKey ? t.experienceSection.roles[roleKey] : null;

            const roleTitle = roleData?.role || exp.role;
            const orgName = roleData?.org || exp.organization;
            const locName = roleData?.location || exp.location;
            const roleDesc = roleData?.desc || exp.description;
            const rolePeriod = roleData?.period || exp.period;

            return (
              <div
                key={exp.id}
                className="group grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch"
              >
                {/* Left: Boxed Overview Card */}
                <article className="col-span-9 sm:col-span-10 lg:col-span-11 p-6 sm:p-8 md:p-10 border border-transparent bg-[#EEE9DE]/25 hover:bg-[#EEE9DE]/50 hover:border-[#2A2421]/40 transition-all duration-300 flex flex-col justify-between">
                  <div className="grid sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                    {/* Number Ledger */}
                    <div className="sm:col-span-1">
                      <span className="font-mono text-xs sm:text-sm text-[#736660] group-hover:text-[#C75D38] transition-colors font-medium">
                        {numberStr}
                      </span>
                    </div>

                    {/* Role, Organization & Short Description */}
                    <div className="sm:col-span-11">
                      <p className="text-xs uppercase tracking-[0.15em] text-[#C75D38] font-mono font-medium mb-2">
                        {orgName} &middot; {locName}
                      </p>

                      <Link href={`/experience#${exp.id}`} className="block">
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2A2421] font-light leading-snug mb-3 group-hover:text-[#C75D38] transition-colors">
                          {roleTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans line-clamp-2 mb-4">
                          {roleDesc}
                        </p>
                        <span className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#2A2421] group-hover:text-[#C75D38] transition-colors">
                          {t.experienceSection.readDetails} &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>

                {/* Right: Date/Period at Top + Vertical Line running downward along each card */}
                <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-start pt-2 select-none">
                  <span className="text-[10px] sm:text-xs font-mono text-[#736660] group-hover:text-[#2A2421] transition-colors text-center leading-tight mb-3 tracking-wider">
                    {rolePeriod}
                  </span>
                  <div className="w-px flex-1 bg-[#2A2421] group-hover:bg-[#C75D38] transition-colors min-h-[50px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
