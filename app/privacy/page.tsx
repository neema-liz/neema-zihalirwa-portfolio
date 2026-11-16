import React from "react";
import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Neema Zihalirwa Elisabeth",
  description: "Privacy policy and data protection practices for the professional portfolio of Neema Zihalirwa Elisabeth.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F7F4EE] text-[#2A2421]">
      <PrivacyContent />
    </main>
  );
}
