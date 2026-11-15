import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "Experience & Career History — Neema Zihalirwa Elisabeth",
  description:
    "Explore the professional experience, human resources practice, and operational background of Neema Zihalirwa Elisabeth.",
};

export default function ExperiencePage() {
  const booking = profileData.contact.booking;
  const experiences = profileData.experience;
  const education = profileData.education;

  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Editorial Page Header */}
        <div className="mb-20 md:mb-28 border-b border-[#E4DDD6] pb-14">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38] mb-3">
            Career &amp; Practice
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#2A2421] leading-[1.1] mb-6">
            Professional Experience
          </h1>
          <p className="text-base sm:text-lg text-[#736660] font-sans max-w-2xl leading-relaxed mb-8">
            A comprehensive overview of my hands-on roles across human resources, people operations, 
            and startup coordination &mdash; combining structured execution, adult learning pedagogy, 
            and cross-cultural communication.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="/documents/neema-zihalirwa-cv.pdf"
              download="Neema_Zihalirwa_Elisabeth_CV.pdf"
              className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-6 py-3.5 hover:bg-[#C75D38] transition-colors"
            >
              Download CV (PDF) &darr;
            </a>
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-6 py-3.5 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
            >
              View Services &amp; Capabilities &rarr;
            </Link>
          </div>
        </div>

        {/* Detailed Experience Positions with Side Timeline Axis */}
        <div className="space-y-20 md:space-y-28">
          {experiences.map((exp, index) => {
            const numberStr = String(index + 1).padStart(2, "0");

            return (
              <div
                key={exp.id}
                id={exp.id}
                className="group grid grid-cols-12 gap-6 lg:gap-10 items-stretch scroll-mt-28 border-b border-[#E4DDD6] pb-16 md:pb-24 last:border-b-0"
              >
                {/* Left: Detailed Role Content */}
                <article className="col-span-9 sm:col-span-10 lg:col-span-11 pr-2 sm:pr-6">
                  {/* Meta: Number & Organization */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
                    <span className="text-[#C75D38] font-medium tracking-widest uppercase">
                      Role {numberStr}
                    </span>
                    <span className="text-[#736660]">&middot;</span>
                    <span className="text-[#736660] uppercase tracking-wider">{exp.organization}</span>
                    <span className="text-[#736660]">&middot;</span>
                    <span className="text-[#736660]">{exp.location}</span>
                  </div>

                  {/* Role Title */}
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug mb-6 group-hover:text-[#C75D38] transition-colors">
                    {exp.role}
                  </h2>

                  {/* Overview */}
                  <p className="text-base sm:text-lg text-[#2A2421] font-sans leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#736660] border-b border-[#E4DDD6] pb-2 mb-4">
                      Key Responsibilities &amp; Operational Scope
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#2A2421] font-sans leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="p-6 sm:p-8 bg-[#EEE9DE]/30 border border-[#E4DDD6]">
                      <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#736660] mb-4 font-medium">
                        Verified Milestones &amp; Outcomes
                      </h3>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <li
                            key={aIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#2A2421] font-sans italic"
                          >
                            <span className="text-[#C75D38] font-serif not-italic font-bold">&check;</span>
                            <span>&ldquo;{ach}&rdquo;</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>

                {/* Right: Timing / Period + Vertical Line Timeline Axis */}
                <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-start pt-2 select-none">
                  <span className="text-[10px] sm:text-xs font-mono text-[#736660] group-hover:text-[#2A2421] transition-colors text-center leading-tight mb-3 tracking-wider">
                    {exp.period}
                  </span>
                  <div className="w-px flex-1 bg-[#2A2421] group-hover:bg-[#C75D38] transition-colors min-h-[80px]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Academic Foundation with Side Timeline Axis */}
        <section className="mt-24 md:mt-32 pt-16 border-t border-[#E4DDD6]">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#736660] mb-3">
            Academic Background
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2A2421] leading-tight mb-12">
            Education &amp; Foundations
          </h2>

          <div className="space-y-16">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group grid grid-cols-12 gap-6 lg:gap-10 items-stretch pb-12 border-b border-[#E4DDD6]/60 last:border-b-0"
              >
                {/* Left: Academic Content */}
                <div className="col-span-9 sm:col-span-10 lg:col-span-11 pr-2 sm:pr-6">
                  <h3 className="font-serif text-2xl text-[#2A2421] font-light mb-1 group-hover:text-[#C75D38] transition-colors">
                    {edu.degree} &mdash; {edu.field}
                  </h3>
                  {edu.institution && (
                    <p className="text-xs font-mono uppercase tracking-wider text-[#C75D38] mb-4">
                      {edu.institution}
                    </p>
                  )}
                  {edu.highlights && (
                    <ul className="space-y-2 mt-3">
                      {edu.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#736660] font-sans leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right: Timing / Period + Vertical Line Timeline Axis */}
                <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-start pt-2 select-none">
                  {edu.period && (
                    <span className="text-[10px] sm:text-xs font-mono text-[#736660] group-hover:text-[#2A2421] transition-colors text-center leading-tight mb-3 tracking-wider">
                      {edu.period}
                    </span>
                  )}
                  <div className="w-px flex-1 bg-[#2A2421] group-hover:bg-[#C75D38] transition-colors min-h-[60px]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Conversation Section */}
        <section className="mt-28 md:mt-36 pt-16 border-t border-[#E4DDD6] text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#736660] mb-4">
            Next Steps
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
            Let&apos;s discuss how my experience fits your team.
          </h2>

          <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl mx-auto mb-10 font-sans">
            Whether you are seeking a dedicated HR Officer, recruitment coordination support, or project-based 
            people operations &mdash; let&apos;s schedule a 30-minute discovery call to discuss your goals.
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
              href={`mailto:${profileData.contact.email.value}?subject=Opportunity%20Enquiry`}
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
