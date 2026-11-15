import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { clientStories } from "@/config/stories";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "Client Stories & Engagements — Neema Zihalirwa Elisabeth",
  description:
    "Explore case studies and real-world outcomes across recruitment workflows, onboarding pedagogy, and operational coordination by Neema Zihalirwa Elisabeth.",
};

export default function ClientStoriesPage() {
  const booking = profileData.contact.booking;

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Editorial Page Header with Generous Breathing Room */}
        <div className="mb-20 md:mb-28 border-b border-[#E4DDD6] pb-14">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
            Case Studies &amp; Outcomes
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#2A2421] leading-[1.1] mb-6">
            Client Stories &amp; Engagements
          </h1>
          <p className="text-base sm:text-lg text-[#736660] font-sans max-w-2xl leading-relaxed">
            Every organization faces distinct people and operational challenges. Here is an open look at 
            the situations I encountered, how we collaborated, and the tangible results delivered.
          </p>
        </div>

        {/* Stories Flow — Structured Case by Case */}
        <div className="space-y-24 md:space-y-36">
          {clientStories.map((story, index) => {
            const numberStr = String(index + 1).padStart(2, "0");

            return (
              <article
                key={story.id}
                id={story.slug}
                className="scroll-mt-28 border-b border-[#E4DDD6] pb-24 md:pb-32 last:border-b-0"
              >
                {/* Case Sub-header: Number & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-xs font-mono text-[#736660]">
                  <span className="text-[#C75D38] font-medium tracking-widest uppercase">
                    Case {numberStr}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
                    <span>{story.client}</span>
                    {story.period && (
                      <>
                        <span>&middot;</span>
                        <span>{story.period}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* What I Did Title */}
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2A2421] font-light leading-snug mb-12">
                  {story.title}
                </h2>

                {/* Structured Flow: Situation & Collaboration (Two-Column Editorial Grid) */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-14 mb-14">
                  {/* Situation */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#736660] border-b border-[#E4DDD6] pb-2">
                      Situation
                    </h3>
                    <p className="text-sm sm:text-base text-[#3D3531] leading-relaxed font-sans pt-1">
                      {story.situation}
                    </p>
                  </div>

                  {/* Collaboration */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#736660] border-b border-[#E4DDD6] pb-2">
                      Collaboration
                    </h3>
                    <p className="text-sm sm:text-base text-[#3D3531] leading-relaxed font-sans pt-1">
                      {story.collaboration}
                    </p>
                  </div>
                </div>

                {/* Impact: Concrete Measurable Outcomes */}
                <div className="bg-[#EEE9DE]/25 border border-[#E4DDD6] p-8 sm:p-10 mb-12">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#736660] mb-5">
                    Impact &amp; Results
                  </h3>
                  <ul className="space-y-3.5">
                    {story.impact.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#2A2421] font-sans leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Focus Areas & Tools Used Ledger */}
                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                  {/* Focus Areas */}
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#736660] mb-3">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {story.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs font-sans text-[#2A2421] py-1 px-3 border border-[#E4DDD6] bg-[#FAF8F5]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#736660] mb-3">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {story.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-mono text-[#736660] py-1 px-3 border border-[#E4DDD6] bg-[#FAF8F5]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Optional Quote / Testimonial if present */}
                {story.quote && (
                  <div className="mt-10 p-6 sm:p-8 border-l-2 border-[#C75D38] bg-[#EEE9DE]/20 font-serif italic text-base sm:text-lg text-[#2A2421]">
                    <p>&ldquo;{story.quote.text}&rdquo;</p>
                    <p className="text-xs font-sans not-italic text-[#736660] mt-3 uppercase tracking-wider">
                      &mdash; {story.quote.attribution}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Closing Invitation Section: "Let's talk about your story." */}
        <section className="mt-28 md:mt-36 pt-16 md:pt-20 border-t border-[#E4DDD6] text-center max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
            Start a Collaboration
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
            Let&apos;s talk about your story.
          </h2>

          <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl mx-auto mb-10 font-sans">
            Whether you are looking to structure your recruitment pipeline, design an onboarding pathway 
            for incoming volunteers, or need hands-on HR coordination on a contract or project basis &mdash; 
            I would love to hear what you are building. Let&apos;s connect to discuss how we can create a clear, 
            people-centered solution for your team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {booking?.googleCalendarUrl && (
              <a
                href={booking.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Schedule via Google Meet &rarr;
              </a>
            )}

            {booking?.calendlyUrl && (
              <a
                href={booking.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-8 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                Book via Calendly &rarr;
              </a>
            )}

            <a
              href={`mailto:${profileData.contact.email.value}?subject=Collaboration%20Enquiry`}
              className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors py-2 px-4"
            >
              Send an Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
