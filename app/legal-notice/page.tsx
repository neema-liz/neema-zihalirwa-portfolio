import React from "react";
import type { Metadata } from "next";
import { LegalNoticeContent } from "@/components/legal/LegalNoticeContent";

export const metadata: Metadata = {
  title: "Legal Notice & Disclaimers | Neema Zihalirwa Elisabeth",
  description: "Terms of use, liability disclaimers, and copyright notices for the professional website of Neema Zihalirwa Elisabeth.",
};

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <LegalNoticeContent />
    </main>
  );
}
