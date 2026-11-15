"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { profileData } from "@/config/profile";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Revert to full color 180ms after scrolling stops
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Editorial Headline & Narrative */}
          <div className="md:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#736660] mb-8">
              Human Resources &middot; Talent &middot; People Operations
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2A2421] leading-[0.95] mb-10">
              Neema
              <br />
              <em className="font-light italic text-[#C75D38]">
                Elisabeth
              </em>
            </h1>

            <p className="max-w-md text-sm md:text-base text-[#736660] leading-relaxed mb-12 font-sans">
              Human Resources Professional with an academic foundation in
              International Relations and General Pedagogy. Dedicated to
              structured recruitment, talent onboarding, and people-centric
              organizational development.
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

          {/* Right: Larger Professional Portrait */}
          <div className="md:col-span-6">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[#EEE9DE] border border-[#E4DDD6]">
              <Image
                src="/images/portraits/neema-portrait-01.jpg"
                alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  "object-cover object-top hover:scale-[1.02] transition-[filter,transform] duration-500 ease-out",
                  isScrolling ? "grayscale" : "grayscale-0"
                )}
                style={{
                  filter: isScrolling ? "grayscale(100%)" : "grayscale(0%)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
