import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientStories } from "@/config/stories";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "Client Stories & Case Studies | Neema Zihalirwa Elisabeth",
  description: "Real-world engagements, recruitment workflows, and operational coordination case studies by Neema Zihalirwa Elisabeth.",
};

export default function ClientStoriesPage() {
  const booking = profileData.contact.booking;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Editorial Page Header */}
        <div className="mb-20 border-b border-[#E4DDD6] pb-12">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C75D38] mb-4">
            Case Studies &amp; Outcomes
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#2A2421] leading-tight mb-6">
            Client Stories &amp; Engagements
          </h1>
          <p className="text-base sm:text-lg text-[#736660] font-sans max-w-2xl leading-relaxed">
            Detailed case reflections illustrating how structured recruitment, pedagogical onboarding, 
            and operational coordination create accountable, people-centered workplaces.
          </p>
        </div>

        {/* Stories Ledger */}
        <div className="space-y-24">
          {clientStories.map((story, index) => {
            const numberStr = String(index + 1).padStart(2, "0");
            return (
              <article
                key={story.id}
                id={story.slug}
                className="border-b border-[#E4DDD6] pb-20 scroll-mt-28"
              >
                {/* Meta Header */}
                <div className="grid md:grid-cols-12 gap-8 mb-10">
                  <div className="md:col-span-2">
                    <span className="font-mono text-sm text-[#C75D38] font-medium tracking-wider">
                      CASE {numberStr}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#736660] mb-3">
                      <span>{story.client}</span>
                      <span>&middot;</span>
                      <span className="text-[#C75D38] font-medium">{story.role}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-4xl text-[#2A2421] font-light leading-snug">
                      {story.headline}
                    </h2>
                  </div>
                </div>

                {/* Challenge & Intervention Split */}
                <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-12">
                  <div className="md:col-span-2" />
                  
                  {/* Context & Challenge */}
                  <div className="md:col-span-5 space-y-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#736660] border-b border-[#E4DDD6] pb-2">
                      The Challenge
                    </h3>
                    <p className="text-sm sm:text-base text-[#3D3531] leading-relaxed font-sans">
                      {story.context}
                    </p>
                    <p className="text-sm sm:text-base text-[#736660] leading-relaxed font-sans">
                      {story.challenge}
                    </p>
                  </div>

                  {/* Intervention & Execution */}
                  <div className="md:col-span-5 space-y-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#736660] border-b border-[#E4DDD6] pb-2">
                      The Intervention
                    </h3>
                    <p className="text-sm sm:text-base text-[#3D3531] leading-relaxed font-sans">
                      {story.intervention}
                    </p>
                  </div>
                </div>

                {/* Deliverables & Outcomes 12-Col Ledger */}
                <div className="grid md:grid-cols-12 gap-8 lg:gap-12 bg-[#EEE9DE]/40 p-6 sm:p-10 border border-[#E4DDD6]">
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#736660]">
                      Key Results
                    </p>
                  </div>

                  {/* Tangible Deliverables */}
                  <div className="md:col-span-5">
                    <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#2A2421] mb-4">
                      Tangible Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {story.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-[#3D3531] flex items-start gap-2">
                          <span className="text-[#C75D38] font-bold">&mdash;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Organizational Outcomes */}
                  <div className="md:col-span-5">
                    <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#2A2421] mb-4">
                      Outcomes Achieved
                    </p>
                    <ul className="space-y-2.5">
                      {story.outcomes.map((item, oIdx) => (
                        <li key={oIdx} className="text-xs sm:text-sm text-[#3D3531] flex items-start gap-2">
                          <span className="text-[#C75D38] font-bold">&check;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Optional Quote */}
                {story.quote && (
                  <div className="mt-8 md:ml-[16.666%] p-6 border-l-2 border-[#C75D38] bg-[#FAF8F5]/60 italic font-serif text-[#2A2421] text-base sm:text-lg">
                    <p>&ldquo;{story.quote.text}&rdquo;</p>
                    <p className="text-xs font-sans not-italic text-[#736660] mt-2 uppercase tracking-wider">
                      &mdash; {story.quote.attribution}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-20 pt-16 border-t border-[#E4DDD6] text-center max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C75D38] mb-3">
            Collaborate on Your Team&apos;s Growth
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2A2421] mb-6">
            Ready to structure your people operations?
          </h2>
          <p className="text-sm text-[#736660] font-sans leading-relaxed mb-8">
            Whether you need recruitment support, onboarding coordination, or documentation structuring &mdash; 
            schedule a direct consultation to discuss your organization&apos;s goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {booking?.googleCalendarUrl && (
              <a
                href={booking.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] bg-[#2A2421] text-[#FAF8F5] px-7 py-3.5 hover:bg-[#C75D38] transition-colors"
              >
                Schedule via Google Meet &rarr;
              </a>
            )}
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.15em] border border-[#2A2421] text-[#2A2421] px-7 py-3.5 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
            >
              Contact Neema &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
