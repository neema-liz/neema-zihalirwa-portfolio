import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Neema Zihalirwa Elisabeth",
  description: "Privacy policy and data protection practices for the professional portfolio of Neema Zihalirwa Elisabeth.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-[#E4DDD6] pb-8">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C75D38] mb-3">
            Legal &amp; Transparency
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#2A2421] leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#736660] font-sans">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="editorial-prose space-y-8 font-sans text-sm sm:text-base leading-relaxed text-[#3D3531]">
          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              1. Overview &amp; Commitment
            </h2>
            <p>
              This website serves as the personal professional portfolio of <strong>Neema Zihalirwa Elisabeth</strong>, 
              a Human Resources and People Operations professional. I am committed to respecting 
              your privacy, practicing data minimization, and handling any personal information shared with ethical care.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              2. Data Collection &amp; Purpose
            </h2>
            <p>
              This website does <strong>not</strong> use tracking cookies, behavioral tracking pixels, or third-party marketing trackers. 
              The only personal information processed is that which you voluntarily provide when initiating contact:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Direct Email:</strong> When you click email links or send an enquiry to <a href="mailto:lucianna.neema@gmail.com" className="text-[#C75D38] underline">lucianna.neema@gmail.com</a>, your email address, name, and message content are processed solely to respond to your professional enquiry.
              </li>
              <li>
                <strong>WhatsApp Messaging:</strong> When you choose to initiate a chat via WhatsApp, interactions are governed by WhatsApp’s standard privacy terms.
              </li>
              <li>
                <strong>Consultation Scheduling:</strong> If you book a consultation via Google Calendar or Calendly, your name and email are used exclusively to coordinate the scheduled meeting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              3. Data Retention &amp; Security
            </h2>
            <p>
              Correspondence received is retained only for the duration required to address your enquiry, fulfill professional engagements, 
              or comply with legal record-keeping obligations. Personal information is never sold, leased, or shared with third parties for commercial or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              4. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of any email correspondence and contact records by writing directly to{" "}
              <a href="mailto:lucianna.neema@gmail.com" className="text-[#C75D38] underline">
                lucianna.neema@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#2A2421] font-normal mb-3">
              5. Contact Information
            </h2>
            <p>
              If you have any questions regarding this privacy statement, please contact:
            </p>
            <p className="mt-2 text-[#2A2421]">
              <strong>Neema Zihalirwa Elisabeth</strong><br />
              Email: <a href="mailto:lucianna.neema@gmail.com" className="text-[#C75D38] underline">lucianna.neema@gmail.com</a>
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
