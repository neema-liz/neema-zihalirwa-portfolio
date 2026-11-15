"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { profileData } from "@/config/profile";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isOver80PercentVisible, setIsOver80PercentVisible] = useState(true);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { hero } = profileData;

  useEffect(() => {
    const target = imageContainerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Beyond 80% visibility in viewport: no grayscale (full color)
        // Under 80% visibility (not 80% on view): grayscale applied
        setIsOver80PercentVisible(entry.intersectionRatio >= 0.8);
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Editorial Headline & Narrative */}
          <div className="md:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#736660] mb-8">
              {hero.eyebrow}
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2A2421] leading-[0.95] mb-10">
              {hero.firstName}
              <br />
              <em className="font-light italic text-[#C75D38]">
                {hero.lastName}
              </em>
            </h1>

            <p className="max-w-md text-sm md:text-base text-[#736660] leading-relaxed mb-12 font-sans">
              {hero.bio}
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a
                href={`mailto:${profileData.contact.email.value}?subject=${encodeURIComponent(hero.primaryCta.subject)}`}
                className="text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-7 py-3.5 hover:opacity-90 transition-opacity"
              >
                {hero.primaryCta.label}
              </a>

              <a
                href={hero.secondaryCta.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
              >
                {hero.secondaryCta.label} &darr;
              </a>
            </div>
          </div>

          {/* Right: Larger Professional Portrait */}
          <div className="md:col-span-6">
            <div
              ref={imageContainerRef}
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[#EEE9DE] border border-[#E4DDD6]"
            >
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  "object-cover object-top hover:scale-[1.02] transition-[filter,transform] duration-700 ease-out",
                  isOver80PercentVisible ? "grayscale-0" : "grayscale"
                )}
                style={{
                  filter: isOver80PercentVisible ? "grayscale(0%)" : "grayscale(100%)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
