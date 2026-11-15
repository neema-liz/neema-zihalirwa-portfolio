import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "Imprint | Neema Zihalirwa Elisabeth",
  description: "Information pursuant to legal transparency standards for the professional website of Neema Zihalirwa Elisabeth.",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-[#E4DDD6] pb-8">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C75D38] mb-3">
            Legal &amp; Disclosure
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2A2421] leading-tight mb-4">
            Imprint
          </h1>
          <p className="text-sm text-[#736660] font-sans">
            Legal disclosure and editorial responsibility
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 font-sans text-sm sm:text-base leading-relaxed text-[#3D3531]">
          <section className="border-b border-[#E4DDD6] pb-8">
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-4">
              Information Pursuant to Identification Requirements
            </h2>
            <div className="space-y-1.5 text-[#2A2421]">
              <p className="font-medium">{profileData.fullName}</p>
              <p className="text-[#736660]">{profileData.professionalTitle}</p>
              <p className="text-[#736660]">Professional Focus: Human Resources &amp; People Operations</p>
            </div>
          </section>

          <section className="border-b border-[#E4DDD6] pb-8">
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-4">
              Direct Contact
            </h2>
            <div className="space-y-2">
              <p>
                <span className="text-[#736660] inline-block w-28">Email:</span>
                <a
                  href={`mailto:${profileData.contact.email.value}`}
                  className="text-[#C75D38] underline"
                >
                  {profileData.contact.email.value}
                </a>
              </p>
              <p>
                <span className="text-[#736660] inline-block w-28">WhatsApp:</span>
                <a
                  href={`https://wa.me/${profileData.contact.whatsapp.phoneNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A2421] hover:text-[#C75D38] transition-colors"
                >
                  {profileData.contact.whatsapp.phoneNumber}
                </a>
              </p>
              <p>
                <span className="text-[#736660] inline-block w-28">LinkedIn:</span>
                <a
                  href={profileData.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A2421] hover:text-[#C75D38] transition-colors"
                >
                  linkedin.com/in/lucianna-neema-570a2a297
                </a>
              </p>
            </div>
          </section>

          <section className="border-b border-[#E4DDD6] pb-8">
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-4">
              Editorial Responsibility
            </h2>
            <p>
              Responsible for editorial content, essays, and published perspectives on this website:
            </p>
            <p className="mt-2 text-[#2A2421] font-medium">
              Neema Zihalirwa Elisabeth
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-4">
              Nature of Engagements
            </h2>
            <p>
              This website presents the professional credentials, services, and independent human resources consulting capabilities 
              of Neema Zihalirwa Elisabeth. Engagements are contracted individually based on agreed scope of work and deliverables.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-[#E4DDD6]">
          <Link
            href="/"
            className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
