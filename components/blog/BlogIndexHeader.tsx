"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function BlogIndexHeader() {
  const { t } = useLanguage();
  const header = t.blogPage.header;

  return (
    <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
      <div className="md:col-span-4 space-y-3">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
          {header.eyebrow}
        </p>
        <div>
          <Link
            href="/rss.xml"
            target="_blank"
            className="inline-flex items-center text-[11px] uppercase tracking-wider text-[#736660] hover:text-[#C75D38] transition-colors"
          >
            {header.rss}
          </Link>
        </div>
      </div>

      <div className="md:col-span-8">
        <h1 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-4">
          {header.title}
        </h1>
        <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
          {header.subtitle}
        </p>
      </div>
    </div>
  );
}
