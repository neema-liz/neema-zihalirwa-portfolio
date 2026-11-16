"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function LegalNoticeContent() {
  const { t } = useLanguage();
  const page = t.legalNoticePage;

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="mb-12 border-b border-[#E4DDD6] pb-8">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C75D38] mb-3">
          {page.eyebrow}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2A2421] leading-tight mb-4">
          {page.title}
        </h1>
        <p className="text-sm text-[#736660] font-sans">
          {page.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="editorial-prose space-y-8 font-sans text-sm sm:text-base leading-relaxed text-[#3D3531]">
        {page.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              {section.title}
            </h2>
            <p>{section.desc}</p>
          </section>
        ))}
      </div>

      {/* Back Link */}
      <div className="mt-16 pt-8 border-t border-[#E4DDD6]">
        <Link
          href="/"
          className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
        >
          {page.backToHome}
        </Link>
      </div>
    </div>
  );
}
