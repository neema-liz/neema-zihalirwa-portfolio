import React from "react";
import type { Metadata } from "next";
import { ImprintContent } from "@/components/legal/ImprintContent";

export const metadata: Metadata = {
  title: "Imprint | Neema Zihalirwa Elisabeth",
  description: "Information pursuant to legal transparency standards for the professional website of Neema Zihalirwa Elisabeth.",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <ImprintContent />
    </main>
  );
}
