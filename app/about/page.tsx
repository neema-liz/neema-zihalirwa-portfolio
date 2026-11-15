import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "About — Neema Zihalirwa Elisabeth",
  description:
    "Learn about Neema Zihalirwa Elisabeth's background, origins, education in General Pedagogy and International Relations, co-founding Umoja, and her human-centered vision of HR.",
};

export default function AboutPage() {
  const booking = profileData.contact.booking;

  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* 1. Editorial Header with Big Portrait & Opening Narrative Side-by-Side */}
        <div className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38] mb-4">
            About Neema Zihalirwa Elisabeth
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#2A2421] leading-[1.1] mb-12 md:mb-16 max-w-4xl">
            People, pedagogy, and purpose in modern organizations.
          </h1>

          {/* Side-by-Side: Portrait (Left) + Opening Narrative (Right) */}
          <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Full Uncut Portrait in Wider Dimension */}
            <div className="md:col-span-6 lg:col-span-6">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto md:mx-0 overflow-hidden bg-[#EEE9DE]/40">
                <Image
                  src="/images/portraits/neema-portrait-02.jpg"
                  alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover object-top filter grayscale-0 contrast-105 hover:grayscale-50 transition-all duration-700 ease-out"
                />
              </div>
              <p className="text-xs font-mono text-[#736660] mt-3">
                Neema Zihalirwa Elisabeth
              </p>
            </div>

            {/* Right: Opening Narrative (Zero mention of living in Rwanda) */}
            <div className="md:col-span-6 lg:col-span-6 space-y-6 text-lg sm:text-xl font-serif font-light text-[#2A2421] leading-[1.9]">
              <p>
                Born and raised in the Democratic Republic of Congo (Goma), my journey has been shaped 
                by an enduring conviction: organizations are only as strong as the clarity, care, 
                and dignity they offer to the people who build them.
              </p>
              <p className="text-base sm:text-lg text-[#736660] font-sans leading-[1.85]">
                Working across human resources, adult pedagogy, and cross-cultural initiatives, 
                I help teams build structured, transparent, and dependable people operations where 
                every individual is met with clear expectations and genuine respect.
              </p>
            </div>
          </div>
        </div>

        {/* 2. My Parcours & Origins (Dynamic Offset Narrative Layout) */}
        <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
              Origins &middot; Path
            </p>
          </div>

          <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
              An interdisciplinary path from pedagogy to diplomacy and HR
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#3D3531] font-sans leading-[1.9]">
              <p>
                My professional foundation began with a State Diploma in General Pedagogy from 
                Himbi Institute in Goma, DRC. There, I studied educational psychology and adult learning 
                theory &mdash; understanding how people absorb new information, gain confidence, and 
                overcome fear in unfamiliar environments.
              </p>
              <p>
                Seeking a broader continental and global perspective, I pursued my Bachelor&apos;s Honours degree 
                in International Relations at Kigali Independent University (ULK). Serving as Class Advisor 
                during my final year and researching UNICEF&apos;s contributions to child welfare in conflict zones 
                sharpened my skills in cross-cultural mediation, diplomacy, and analytical synthesis.
              </p>
              <p>
                This combination led me naturally into Human Resources. In HR, I found the exact intersection 
                of pedagogy and diplomacy: treating every recruitment as an empathetic diplomatic dialogue, 
                and every onboarding journey as an intentional learning process.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Co-Founding Umoja: African Solidarity & Transparent Mutual Aid */}
        <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
              Community &middot; Initiative
            </p>
          </div>

          <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
              Co-Founding Umoja: Accountable solidarity for those in need
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#3D3531] font-sans leading-[1.9]">
              <p>
                Beyond my institutional HR practice, I co-founded <strong>Umoja</strong> &mdash; an initiative 
                created to assist individuals and families in need through a transparent, serious, and 
                dependable way for Africans to support one another.
              </p>
              <p>
                In Swahili, <em>Umoja</em> means unity. We built the organization on the belief that genuine 
                community assistance must be grounded in integrity, accountability, and respect for human dignity. 
                Too often, mutual aid lacks follow-through or transparent record-keeping; Umoja was created to 
                set a serious, trustworthy precedent.
              </p>
              <p>
                This experience in community leadership directly informs my professional HR work: transparency 
                builds deep trust, and reliable, organized systems empower people to do their best work together.
              </p>
            </div>
          </div>
        </section>

        {/* 4. My Vision of HR & Philosophy */}
        <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
              Philosophy
            </p>
          </div>

          <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
              My vision of Human Resources
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#3D3531] font-sans leading-[1.9]">
              <p>
                I reject the notion that human resources exists merely to enforce corporate paperwork or 
                treat colleagues as interchangeable units on a headcount spreadsheet.
              </p>
              <p>
                To me, HR is about <strong>intentional alignment and pedagogical support</strong>:
              </p>

              <ul className="space-y-5 my-6 pl-2">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-3 shrink-0" />
                  <span>
                    <strong>Candidate Dignity:</strong> Every applicant deserves prompt, courteous, and transparent 
                    communication &mdash; whether they are selected or not. A respectful recruitment process 
                    speaks volumes about an organization&apos;s true values.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-3 shrink-0" />
                  <span>
                    <strong>Pedagogical Scaffolding:</strong> New hires and volunteers should not be thrown into 
                    the deep end. They need structured, progressive support that builds confidence and clarity 
                    during their first 90 days.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] mt-3 shrink-0" />
                  <span>
                    <strong>Operational Calm:</strong> Meticulous HR record-keeping, policy documentation, and 
                    clear compliance aren&apos;t bureaucratic obstacles &mdash; they are the foundation that prevents 
                    chaos, burnout, and confusion.
                  </span>
                </li>
              </ul>

              {/* Borderless Editorial Pull-Quote */}
              <div className="my-10 pl-6 border-l-2 border-[#C75D38] font-serif italic text-lg sm:text-2xl text-[#2A2421] font-light leading-[1.85] py-2">
                &ldquo;Great hires don&apos;t happen through speed alone. They happen when role requirements, 
                human capability, and organizational culture actually align.&rdquo;
              </div>
            </div>
          </div>
        </section>

        {/* 5. Values & Principles (Cardless, Badge-Free, Dynamic Offset) */}
        <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
              Guiding Principles
            </p>
          </div>

          <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
              The values that guide every engagement
            </h2>

            <div className="space-y-10">
              {/* Principle 01 */}
              <div>
                <span className="text-xs font-mono text-[#C75D38] block mb-2 font-medium">01</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
                  Radical Transparency &amp; Integrity
                </h3>
                <p className="text-base text-[#736660] font-sans leading-[1.9]">
                  Open communication and honest expectation-setting prevent friction before it begins. 
                  Whether managing volunteer funds or candidate pipelines, integrity is non-negotiable.
                </p>
              </div>

              {/* Principle 02 */}
              <div>
                <span className="text-xs font-mono text-[#C75D38] block mb-2 font-medium">02</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
                  Pedagogical Empathy
                </h3>
                <p className="text-base text-[#736660] font-sans leading-[1.9]">
                  Viewing team members as active adult learners. We facilitate growth not through rigid 
                  criticism, but through structured feedback loops, supportive scaffolding, and active listening.
                </p>
              </div>

              {/* Principle 03 */}
              <div>
                <span className="text-xs font-mono text-[#C75D38] block mb-2 font-medium">03</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
                  Cross-Cultural Diplomacy
                </h3>
                <p className="text-base text-[#736660] font-sans leading-[1.9]">
                  Fluent across French, English, and Swahili, with formal academic training in International 
                  Relations. I bridge regional and international perspectives with cultural tact and ease.
                </p>
              </div>

              {/* Principle 04 */}
              <div>
                <span className="text-xs font-mono text-[#C75D38] block mb-2 font-medium">04</span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
                  Quiet Operational Excellence
                </h3>
                <p className="text-base text-[#736660] font-sans leading-[1.9]">
                  Dependable execution, meticulous documentation, and strict confidentiality. Delivering 
                  consistent quality that leaders and candidates can count on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Academic Background (Dynamic Offset) */}
        <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#736660]">
              Education
            </p>
          </div>

          <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-tight">
              Academic foundations
            </h2>

            <div className="space-y-10">
              <div>
                <p className="text-xs font-mono text-[#C75D38] mb-1">2023 &ndash; 2026</p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light mb-2">
                  Bachelor of Social Sciences in International Relations
                </h3>
                <p className="text-xs font-mono text-[#736660] uppercase tracking-wider mb-3">
                  Kigali Independent University (ULK)
                </p>
                <p className="text-sm text-[#736660] font-sans leading-[1.85]">
                  Focus on diplomacy, international cooperation, and governance. Served as International Relations 
                  Class Advisor and completed academic research examining UNICEF&apos;s contribution to child welfare.
                </p>
              </div>

              <div className="pt-8 border-t border-[#E4DDD6]/60">
                <p className="text-xs font-mono text-[#C75D38] mb-1">2017 &ndash; 2020 &middot; Goma, DRC</p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light mb-2">
                  State Diploma in General Pedagogy
                </h3>
                <p className="text-xs font-mono text-[#736660] uppercase tracking-wider mb-3">
                  Himbi Institute
                </p>
                <p className="text-sm text-[#736660] font-sans leading-[1.85]">
                  Foundational study in education psychology, learning processes, communication dynamics, and 
                  instructional methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Closing Invitation */}
        <section className="pt-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#736660] mb-4">
            Connect
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
            Let&apos;s connect and start a conversation.
          </h2>

          <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl mx-auto mb-10 font-sans">
            Whether you want to discuss a human resources role, operational collaboration, or community initiatives &mdash; 
            I look forward to hearing from you.
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
              href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
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
