"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left 4 Cols: Section Eyebrow */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#736660]">
              {t.aboutSection.eyebrow}
            </p>
          </div>

          {/* Right 8 Cols: Concise Minimalist Story */}
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-8">
              {t.aboutSection.title}
            </h2>

            {/* Split Story with Portrait */}
            <div className="grid sm:grid-cols-12 gap-8 sm:gap-10 my-8 items-center">
              <div className="sm:col-span-5">
                <div className="aspect-[4/5] overflow-hidden bg-[#EEE9DE]/40">
                  <Image
                    src="/images/portraits/neema-portrait-02.jpg"
                    alt="Neema Zihalirwa Elisabeth"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-5 text-sm sm:text-base text-[#736660] leading-relaxed font-sans">
                <p>
                  {t.aboutSection.paragraph1}
                </p>
                <p>
                  {t.aboutSection.paragraph2}
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors text-[#2A2421]"
                  >
                    {t.aboutSection.cta} &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
