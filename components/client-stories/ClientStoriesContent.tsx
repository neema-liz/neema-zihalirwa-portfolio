"use client";

import React from "react";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

export function ClientStoriesContent() {
  const { t } = useLanguage();
  const page = t.clientStoriesPage;
  const booking = profileData.contact.booking;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      {/* Wide & Eye-Catching Editorial Page Header */}
      <div className="mb-24 md:mb-36 border-b border-[#E4DDD6] pb-16 md:pb-24">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2A2421] leading-[1.08] tracking-tight mb-8">
          {page.header.title}
        </h1>
        <p className="text-base sm:text-xl text-[#736660] font-sans max-w-2xl leading-relaxed">
          {page.header.subtitle}
        </p>
      </div>

      {/* Stories Flow — Dynamic Vertical Narrative */}
      <div className="space-y-32 md:space-y-38">
        {page.stories.map((story) => (
          <article
            key={story.id}
            id={story.slug}
            className="scroll-mt-28 border-b border-[#E4DDD6] pb-24 md:pb-36 last:border-b-0"
          >
            {/* Story Meta Header */}
            <div className="mb-6">
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#C75D38] mb-3">
                {story.role}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-[1.15] max-w-4xl">
                {story.title}
              </h2>
            </div>

            {/* Dynamic Narrative Blocks */}
            <div className="space-y-16 md:space-y-20 mt-16">
              {/* 1. Situation */}
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38] font-medium">
                  {page.labels.situation}
                </p>
                <p className="md:ml-12 lg:ml-20 font-serif text-lg sm:text-xl font-light text-[#2A2421] leading-[1.9] max-w-4xl">
                  {story.situation}
                </p>
              </div>

              {/* 2. Collaboration */}
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38] font-medium">
                  {page.labels.collaboration}
                </p>
                <p className="md:ml-12 lg:ml-20 font-serif text-lg sm:text-xl font-light text-[#2A2421] leading-[1.9] max-w-4xl">
                  {story.collaboration}
                </p>
              </div>

              {/* 3. Impact */}
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38] font-medium">
                  {page.labels.impact}
                </p>
                <ul className="md:ml-12 lg:ml-20 space-y-4 sm:space-y-5 max-w-4xl">
                  {story.impact.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 font-serif text-base sm:text-lg font-light text-[#2A2421] leading-[1.85]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Details: Focus Areas & Tools Used */}
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#736660] font-medium">
                  {page.labels.details}
                </p>
                <div className="md:ml-12 lg:ml-20 space-y-3 text-xs sm:text-sm font-mono text-[#736660] max-w-4xl pt-2 leading-[1.8]">
                  <div>
                    <span className="text-[#2A2421] font-medium uppercase tracking-wider mr-2 font-sans">
                      {page.labels.focusAreas}
                    </span>
                    <span>{story.focusAreas.join(" · ")}</span>
                  </div>
                  <div>
                    <span className="text-[#2A2421] font-medium uppercase tracking-wider mr-2 font-sans">
                      {page.labels.toolsUsed}
                    </span>
                    <span>{story.toolsUsed.join(" · ")}</span>
                  </div>
                </div>
              </div>

              {/* Optional Quote */}
              {story.quote && (
                <div className="md:ml-12 lg:ml-20 pl-6 border-l-2 border-[#C75D38] font-serif italic text-lg sm:text-2xl text-[#2A2421] font-light leading-[1.85] py-2 max-w-3xl">
                  <p>&ldquo;{story.quote.text}&rdquo;</p>
                  <p className="text-xs font-sans not-italic text-[#736660] mt-3 uppercase tracking-wider font-mono">
                    &mdash; {story.quote.attribution}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Closing Invitation Section */}
      <section className="mt-32 md:mt-28 pt-20 border-t border-[#E4DDD6] text-center max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#736660] mb-4">
          {page.cta.eyebrow}
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
          {page.cta.title}
        </h2>

        <p className="text-sm sm:text-base text-[#736660] leading-[1.9] max-w-5xl mx-auto mb-10 font-sans">
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
            href={`mailto:${profileData.contact.email.value}?subject=Collaboration%20Enquiry`}
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors py-2 px-4"
          >
            {page.cta.email}
          </a>
        </div>
      </section>
    </div>
  );
}
