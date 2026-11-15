"use client";

import React from "react";
import Image from "next/image";
import { ContactComposer } from "@/components/contact/ContactComposer";
import { profileData } from "@/config/profile";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export function ContactContent() {
  const { t } = useLanguage();
  const page = t.contactPage;

  const booking = profileData.contact.booking;
  const email = profileData.contact.email.value;
  const rawPhone = profileData.contact.whatsapp.phoneNumber || "+250796164579";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${cleanPhone}`;
  const linkedIn = siteConfig.socialLinks.find((s) => s.platform === "LinkedIn");

  const step1 = page.expectations.steps[0];
  const step2 = page.expectations.steps[1];
  const step3 = page.expectations.steps[2];
  const step4 = page.expectations.steps[3];

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10">
      {/* 1. Contact Hero Section with Photo & Exactly Two Primary Channels */}
      <div className="mb-20 md:mb-28 border-b border-[#E4DDD6] pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38]">
              {page.hero.eyebrow}
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2A2421] leading-[1.1]">
              {page.hero.title}
            </h1>

            <p className="font-serif text-lg sm:text-xl font-light text-[#736660] leading-relaxed max-w-xl">
              {page.hero.subtitle}
            </p>

            {/* Exactly Two Fast Action Channels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 font-mono text-xs uppercase tracking-wider">
              {booking?.googleCalendarUrl && (
                <a
                  href={booking.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#2A2421] text-[#FAF8F5] px-7 py-4 hover:bg-[#C75D38] transition-colors"
                >
                  {page.hero.scheduleMeet}
                </a>
              )}

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2421] text-[#2A2421] px-7 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                {page.hero.messageWhatsApp}
              </a>
            </div>
          </div>

          {/* Right: Editorial Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 overflow-hidden bg-[#EEE9DE]/40">
              <Image
                src="/images/portraits/neema-portrait-01.jpg"
                alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 400px"
                className="object-cover object-top contrast-105 filter grayscale-0 hover:grayscale-25 transition-all duration-700 ease-out"
              />
            </div>
            <p className="text-xs font-mono text-[#736660] mt-3 text-center lg:text-left">
              {page.hero.portraitCaption}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Direct Message Form */}
      <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
            {page.formSection.eyebrow}
          </p>
        </div>

        <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
            {page.formSection.title}
          </h2>

          <p className="text-sm sm:text-base text-[#736660] font-sans leading-relaxed">
            {page.formSection.subtitle}
          </p>

          <div className="pt-2">
            <ContactComposer />
          </div>
        </div>
      </section>

      {/* 3. What happens just after you contact me */}
      <div className="mb-14 md:mb-18">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38] mb-3">
          {page.expectations.eyebrow}
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight max-w-4xl">
          {page.expectations.title}
        </h2>
      </div>

      {/* 4. The Journey Follow-up Sequence with Channels Embedded Naturally */}
      <div className="space-y-16 md:space-y-20 pb-8">
        {/* Step 1: Initial Review & Direct Response */}
        {step1 && (
          <section className="space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                {step1.tag}
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                {step1.title}
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                {step1.desc}
              </p>
              <p className="text-xs font-mono text-[#736660] pt-1">
                {step1.directNote}{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-[#2A2421] underline hover:text-[#C75D38] transition-colors break-all"
                >
                  {email}
                </a>.
              </p>
            </div>
          </section>
        )}

        {/* Step 2: Exploratory Discovery Call */}
        {step2 && (
          <section className="space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                {step2.tag}
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                {step2.title}
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                {step2.desc}
              </p>
              {booking?.googleCalendarUrl && (
                <div className="pt-1">
                  <a
                    href={booking.googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#2A2421] border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors"
                  >
                    {step2.action}
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Step 3: Actionable Roadmap & Proposal */}
        {step3 && (
          <section className="space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                {step3.tag}
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                {step3.title}
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                {step3.desc}
              </p>
              {linkedIn && (
                <p className="text-xs font-mono text-[#736660] pt-1">
                  {step3.linkedInNote}{" "}
                  <a
                    href={linkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2A2421] underline hover:text-[#C75D38] transition-colors"
                  >
                    LinkedIn
                  </a>.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Step 4: Discretion & Multilingual Alignment */}
        {step4 && (
          <section className="space-y-4 pb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                {step4.tag}
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                {step4.title}
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                {step4.desc}
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
