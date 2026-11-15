import React from "react";
import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Neema Zihalirwa Elisabeth",
  description:
    "Learn about Neema Zihalirwa Elisabeth's background, origins, education in General Pedagogy and International Relations, co-founding Umoja, and her human-centered vision of HR.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <AboutContent />
    </main>
  );
}
