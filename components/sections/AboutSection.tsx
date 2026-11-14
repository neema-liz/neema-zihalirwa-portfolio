import React from "react";
import Image from "next/image";
import { ValuesGrid } from "@/components/sections/ValuesGrid";

interface AboutSectionProps {
  showExtendedBio?: boolean;
}

export function AboutSection({ showExtendedBio = false }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#E4DDD6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Left 4 Cols: Section Eyebrow */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              About
            </p>
          </div>

          {/* Right 8 Cols: Editorial Story */}
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-8">
              Building stronger organizations through people, purpose, and structured HR practice.
            </h2>

            <p className="text-sm text-[#736660] leading-relaxed mb-6 max-w-xl font-sans">
              Neema Zihalirwa Elisabeth is a Human Resources Professional passionate
              about people, organizational development, and creating effective workplace
              environments. Holding a Bachelor&apos;s Honours degree in International Relations
              from Kigali Independent University and a State Diploma in General Pedagogy
              from Himbi Institute, she brings an interdisciplinary perspective to people
              management, cross-cultural communication, and organizational coordination.
            </p>

            {/* Split Story with Secondary Portrait (neema-portrait-02) */}
            <div className="grid sm:grid-cols-12 gap-8 my-10 items-center">
              <div className="sm:col-span-5">
                <div className="aspect-[4/5] overflow-hidden bg-[#EEE9DE] border border-[#E4DDD6]">
                  <Image
                    src="/images/portraits/neema-portrait-02.jpg"
                    alt="Neema Zihalirwa Elisabeth — About portrait"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-4 text-sm text-[#736660] leading-relaxed font-sans">
                <p>
                  Her practical HR experience includes working with Diaspora Together Trust
                  and Support Association (DTTASA), where she contributes to recruitment,
                  candidate screening, interview coordination, volunteer onboarding, and HR
                  documentation across multiple time zones.
                </p>
                <p>
                  Through her work with KaziEasy in Rwanda, she coordinates operational
                  research and organizational processes, supporting emerging micro and small
                  enterprises in building structured business practices.
                </p>
              </div>
            </div>

            {showExtendedBio && (
              <div className="space-y-4 text-sm text-[#736660] leading-relaxed mb-8 max-w-xl font-sans">
                <p>
                  Outside her professional responsibilities, Neema is committed to youth
                  empowerment, African development, international cooperation, and community
                  transformation through engagements with African Liberty, the International
                  Organization of Youth, and Umoja.
                </p>
                <p>
                  Her analytical toolkit combines professional HR training in data
                  protection, safeguarding, and workforce compliance with digital tools
                  including Microsoft Office, Google Workspace, SPSS, and Microsoft Access.
                </p>
              </div>
            )}

            {/* Simone Breker-inspired Core Philosophy Pull-Quote */}
            <div className="my-10 p-6 sm:p-8 bg-[#EEE9DE]/60 border-l-2 border-[#C75D38] max-w-xl">
              <p className="font-serif text-lg italic text-[#2A2421] leading-relaxed mb-2">
                &ldquo;Great hires don&apos;t happen through speed alone. They happen when
                role requirements, human capability, and organizational culture actually
                align.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[#736660] font-sans">
                Neema Zihalirwa Elisabeth &mdash; HR Philosophy
              </p>
            </div>

            {/* Education Credentials Grid */}
            <div className="pt-8 border-t border-[#E4DDD6] max-w-xl">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-6">
                Education &middot; Academic Foundation
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 bg-[#EEE9DE]/30 border border-[#E4DDD6]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-1">
                    2023 &ndash; 2026 &middot; Kigali
                  </p>
                  <h3 className="font-serif text-base text-[#2A2421] font-medium">
                    Bachelor&apos;s Honours in International Relations
                  </h3>
                  <p className="text-xs text-[#736660] mt-1 font-sans">
                    Kigali Independent University (ULK)
                  </p>
                </div>

                <div className="p-5 bg-[#EEE9DE]/30 border border-[#E4DDD6]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-1">
                    2017 &ndash; 2020 &middot; Goma
                  </p>
                  <h3 className="font-serif text-base text-[#2A2421] font-medium">
                    State Diploma in General Pedagogy
                  </h3>
                  <p className="text-xs text-[#736660] mt-1 font-sans">
                    Himbi Institute
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <ValuesGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
