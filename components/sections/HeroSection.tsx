import React from "react";
import Image from "next/image";
import { profileData } from "@/config/profile";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left 7 Columns: Editorial Headline & Narrative */}
          <div className="md:col-span-7">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-8">
              Human Resources &middot; Talent &middot; People Operations
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2A2421] leading-[0.95] mb-10">
              Neema
              <br />
              <em className="font-light italic text-[#C75D38]">Zihalirwa</em>
            </h1>

            <p className="max-w-md text-sm text-[#736660] leading-relaxed mb-12 font-sans">
              Human Resources Professional with an academic foundation in International
              Relations and General Pedagogy. Dedicated to structured recruitment,
              talent onboarding, and people-centric organizational development.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a
                href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
                className="text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-7 py-3.5 hover:opacity-90 transition-opacity"
              >
                Work with me
              </a>
              <a
                href="#about"
                className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
              >
                Explore Profile &darr;
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Architectural 3:4 Portrait */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-[#EEE9DE] border border-[#E4DDD6]">
              <Image
                src="/images/portraits/neema-portrait-01.jpg"
                alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                width={900}
                height={1200}
                priority
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
