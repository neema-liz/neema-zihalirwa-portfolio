"use client";

import React from "react";
import Image from "next/image";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesContent() {
  const { t } = useLanguage();
  const booking = profileData.contact.booking;
  const page = t.servicesPage;

  return (
    <div className="bg-[#F7F4EE] text-[#2A2421]">
      {/* 1. Hero Introduction with Remarkable Sized Portrait */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 border-b border-[#E4DDD6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Remarkable Portrait */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-[3/4] max-w-md mx-auto md:max-w-none border border-[#E4DDD6] bg-[#EEE9DE]/30 p-2 sm:p-3 shadow-sm">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/portraits/neema-portrait-01.jpg"
                    alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right: Thoughtful Editorial Introduction */}
            <div className="md:col-span-7 order-1 md:order-2">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
                {page.hero.eyebrow}
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
                {page.hero.title}
              </h1>

              <p className="text-sm sm:text-base text-[#736660] leading-relaxed font-sans mb-6">
                {page.hero.subtitle}
              </p>

              {/* Engagement Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#E4DDD6]">
                {page.hero.highlights.map((h, i) => (
                  <div key={i}>
                    <span className="font-mono text-xs text-[#C75D38] block mb-1">
                      {h.tag}
                    </span>
                    <h3 className="font-serif text-sm font-medium text-[#2A2421]">
                      {h.title}
                    </h3>
                    <p className="text-xs text-[#736660] font-sans mt-1">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Services Roster (Clean Minimalist Presentation) */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
                {page.offerings.eyebrow}
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                {page.offerings.title}
              </h2>
              <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
                {page.offerings.subtitle}
              </p>
            </div>
          </div>

          <div className="border-b border-[#E4DDD6]">
            {page.offerings.items.map((service, index) => {
              const numberStr = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={service.id}
                  className="group py-12 sm:py-16 border-t border-[#E4DDD6] hover:bg-[#EEE9DE]/20 transition-colors px-4 -mx-4"
                >
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Col 1: Number Ledger */}
                    <div className="md:col-span-1">
                      <span className="font-mono text-xs sm:text-sm text-[#736660] group-hover:text-[#C75D38] transition-colors font-medium">
                        {numberStr}
                      </span>
                    </div>

                    {/* Col 2-5: Title & Headline */}
                    <div className="md:col-span-4 pr-4">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-2 group-hover:text-[#C75D38] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#C75D38] font-sans font-medium leading-relaxed">
                        {service.headline}
                      </p>
                    </div>

                    {/* Col 6-12: Detailed Value & Minimalist Deliverables */}
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#736660] leading-relaxed font-sans mb-6">
                        {service.desc}
                      </p>

                      {/* Clean 2-Column Deliverables List */}
                      {service.deliverables && service.deliverables.length > 0 && (
                        <div className="pt-4 border-t border-[#E4DDD6]">
                          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#736660] mb-3">
                            {page.offerings.keyDeliverables}
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm font-sans text-[#2A2421]">
                            {service.deliverables.map((del) => (
                              <li key={del} className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Capabilities & Competencies Section (Full Mode) */}
      <CapabilitiesSection overview={false} />

      {/* 4. Schedule a Conversation Section */}
      <section className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#EEE9DE]/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
            {page.cta.eyebrow}
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] mb-6">
            {page.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            {page.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {booking?.googleCalendarUrl && (
              <a
                href={booking.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-8 py-4 hover:opacity-90 transition-opacity"
              >
                {page.cta.googleMeet}
              </a>
            )}

            {booking?.calendlyUrl && (
              <a
                href={booking.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-8 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                {page.cta.calendly}
              </a>
            )}

            <a
              href={`mailto:${profileData.contact.email.value}?subject=Services%20Enquiry`}
              className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors py-2 px-4"
            >
              {page.cta.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
