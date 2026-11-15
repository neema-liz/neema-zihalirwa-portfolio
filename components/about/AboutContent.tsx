"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

export function AboutContent() {
  const { t } = useLanguage();
  const booking = profileData.contact.booking;
  const page = t.aboutPage;

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10">
      {/* 1. Editorial Header with Big Portrait & Opening Narrative Side-by-Side */}
      <div className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38] mb-4">
          {page.header.eyebrow}
        </p>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2A2421] leading-[1.1] mb-10 md:mb-16 max-w-4xl">
          {page.header.title}
        </h1>

        {/* Side-by-Side: Portrait (Left) + Opening Narrative (Right) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* Left: Full Uncut Portrait in Wider Dimension */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 overflow-hidden bg-[#EEE9DE]/40">
              <Image
                src="/images/portraits/neema-portrait-02.jpg"
                alt={page.header.portraitAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                className="object-cover object-top filter grayscale-0 contrast-105 hover:grayscale-50 transition-all duration-700 ease-out"
              />
            </div>
            <p className="text-xs font-mono text-[#736660] mt-3 text-center md:text-left">
              {page.header.caption}
            </p>
          </div>

          {/* Right: Opening Narrative */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 text-lg sm:text-xl font-serif font-light text-[#2A2421] leading-[1.9]">
            <p>{page.header.p1}</p>
            <p className="text-base sm:text-lg text-[#736660] font-sans leading-[1.85]">
              {page.header.p2}
            </p>
          </div>
        </div>
      </div>

      {/* 2. My Parcours & Origins (Dynamic Offset Narrative Layout) */}
      <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
            {page.origins.eyebrow}
          </p>
        </div>

        <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
            {page.origins.title}
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#3D3531] font-sans leading-[1.9]">
            <p>{page.origins.p1}</p>
            <p>{page.origins.p2}</p>
            <p>{page.origins.p3}</p>
          </div>
        </div>
      </section>

      {/* 3. Co-Founding Umoja: African Solidarity & Transparent Mutual Aid */}
      <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
            {page.umoja.eyebrow}
          </p>
        </div>

        <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
            {page.umoja.title}
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#3D3531] font-sans leading-[1.9]">
            <p>{page.umoja.p1}</p>
            <p>{page.umoja.p2}</p>
            <p>{page.umoja.p3}</p>
          </div>
        </div>
      </section>

      {/* 4. My Vision of HR & Philosophy */}
      <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
            {page.philosophy.eyebrow}
          </p>
        </div>

        <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
            {page.philosophy.title}
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#3D3531] font-sans leading-[1.9]">
            <p>{page.philosophy.intro1}</p>
            <p>{page.philosophy.intro2}</p>

            <ul className="space-y-5 my-6 pl-2">
              {page.philosophy.pillars.map((pillar, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-3 shrink-0" />
                  <span>
                    <strong>{pillar.title}:</strong> {pillar.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Borderless Editorial Pull-Quote */}
            <div className="my-10 pl-6 border-l-2 border-[#C75D38] font-serif italic text-lg sm:text-2xl text-[#2A2421] font-light leading-[1.85] py-2">
              &ldquo;{page.philosophy.quote}&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values & Principles (Cardless, Badge-Free, Dynamic Offset) */}
      <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
            {page.principles.eyebrow}
          </p>
        </div>

        <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
            {page.principles.title}
          </h2>

          <div className="space-y-10">
            {page.principles.items.map((item) => (
              <div key={item.number}>
                <span className="text-xs font-mono text-[#C75D38] block mb-2 font-medium">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-[#736660] font-sans leading-[1.9]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Academic Background (Dynamic Offset) */}
      <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
        <div>
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#736660]">
            {page.education.eyebrow}
          </p>
        </div>

        <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-tight">
            {page.education.title}
          </h2>

          <div className="space-y-10">
            {page.education.items.map((edu, i) => (
              <div key={i} className={i > 0 ? "pt-8 border-t border-[#E4DDD6]/60" : ""}>
                <p className="text-xs font-mono text-[#C75D38] mb-1">{edu.period}</p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light mb-2">
                  {edu.degree}
                </h3>
                <p className="text-xs font-mono text-[#736660] uppercase tracking-wider mb-3">
                  {edu.institution}
                </p>
                <p className="text-sm text-[#736660] font-sans leading-[1.85]">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Invitation */}
      <section className="pt-12 text-center max-w-3xl mx-auto">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#736660] mb-4">
          {page.cta.eyebrow}
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
          {page.cta.title}
        </h2>

        <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl mx-auto mb-10 font-sans">
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
            href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors py-2 px-4"
          >
            {page.cta.email}
          </a>
        </div>
      </section>
    </div>
  );
}
