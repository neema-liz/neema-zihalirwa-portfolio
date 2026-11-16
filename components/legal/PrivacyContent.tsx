"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/config/profile";
import { useLanguage } from "@/context/LanguageContext";

export function PrivacyContent() {
  const { t } = useLanguage();
  const page = t.privacyPage;
  const email = profileData.contact.email.value;

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
          {page.updated}
        </p>
      </div>

      {/* Content */}
      <div className="editorial-prose space-y-8 font-sans text-sm sm:text-base leading-relaxed text-[#3D3531]">
        <section>
          <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
            {page.overviewTitle}
          </h2>
          <p>{page.overviewDesc}</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
            {page.collectionTitle}
          </h2>
          <p>{page.collectionDesc}</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            {page.items.map((item, idx) => (
              <li key={idx}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
            {page.retentionTitle}
          </h2>
          <p>{page.retentionDesc}</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
            {page.rightsTitle}
          </h2>
          <p>
            {page.rightsDesc}{" "}
            <a href={`mailto:${email}`} className="text-[#C75D38] underline">
              {email}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
            {page.contactTitle}
          </h2>
          <p>{page.contactDesc}</p>
          <p className="mt-2 text-[#2A2421]">
            <strong>{profileData.fullName}</strong><br />
            Email:{" "}
            <a href={`mailto:${email}`} className="text-[#C75D38] underline">
              {email}
            </a>
          </p>
        </section>
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
