import React from "react";
import type { Metadata } from "next";
import { ClientStoriesContent } from "@/components/client-stories/ClientStoriesContent";

export const metadata: Metadata = {
  title: "Client Stories — Neema Zihalirwa Elisabeth",
  description:
    "Real stories of collaboration, structured recruitment, and operational impact across organizations Neema Zihalirwa Elisabeth has worked with.",
};

export default function ClientStoriesPage() {
  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <ClientStoriesContent />
    </main>
  );
}
