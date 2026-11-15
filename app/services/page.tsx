import type { Metadata } from "next";
import { ServicesContent } from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services & Capabilities — Neema Zihalirwa Elisabeth",
  description:
    "Explore human resources services offered by Neema Zihalirwa Elisabeth: recruitment, talent acquisition, HR administration, volunteer management, and organizational coordination.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
