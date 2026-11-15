import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice & Disclaimers | Neema Zihalirwa Elisabeth",
  description: "Terms of use, liability disclaimers, and copyright notices for the professional website of Neema Zihalirwa Elisabeth.",
};

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-[#E4DDD6] pb-8">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C75D38] mb-3">
            Legal &amp; Terms
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2A2421] leading-tight mb-4">
            Legal Notice
          </h1>
          <p className="text-sm text-[#736660] font-sans">
            Terms of use, professional disclaimers, and intellectual property
          </p>
        </div>

        {/* Content */}
        <div className="editorial-prose space-y-8 font-sans text-sm sm:text-base leading-relaxed text-[#3D3531]">
          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              1. Professional Advice Disclaimer
            </h2>
            <p>
              The essays, field notes, and perspectives shared on this portfolio website are provided for informational, 
              educational, and discussion purposes. While informed by practical human resources experience, adult learning pedagogy, 
              and organizational development principles, content on this website does not constitute formal legal counsel or statutory employment advice. 
              Organizations should consult qualified labor law attorneys for formal compliance matters specific to their jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              2. Intellectual Property &amp; Copyright
            </h2>
            <p>
              Unless otherwise indicated, all original written essays, framework diagrams, layout structures, and biographical texts 
              on this website are the intellectual property of <strong>Neema Zihalirwa Elisabeth</strong> &copy; 2026. 
              Excerpts and brief quotations may be shared provided clear attribution and a direct link to the original page are included. 
              Commercial reproduction or systematic harvesting without prior written permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              3. External Links &amp; Third-Party Content
            </h2>
            <p>
              This website includes links to external third-party platforms (e.g., Google Calendar, Calendly, LinkedIn, WhatsApp, 
              and institutional partner websites). While these links are curated in good faith, I have no ongoing control over third-party 
              content or privacy practices and assume no responsibility for external sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              4. Accuracy of Information
            </h2>
            <p>
              Reasonable efforts are taken to keep published information, service descriptions, and contact pathways accurate and up to date. 
              However, service offerings, availability, and engagement terms are subject to adjustment based on individual client agreements.
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
