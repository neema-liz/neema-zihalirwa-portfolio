import React from "react";
import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience & Career History — Neema Zihalirwa Elisabeth",
  description:
    "Explore the professional experience, human resources practice, and operational background of Neema Zihalirwa Elisabeth.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <ExperienceContent />
    </main>
  );
}
