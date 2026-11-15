import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Consultation — Neema Zihalirwa Elisabeth",
  description:
    "Connect directly with Neema Zihalirwa Elisabeth for human resources consulting, recruitment, onboarding coordination, and direct consultation scheduling via Google Meet or WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <ContactContent />
    </main>
  );
}
