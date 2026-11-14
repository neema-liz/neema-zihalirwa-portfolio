import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "Services — Neema Zihalirwa Elisabeth",
  description:
    "Explore human resources services offered by Neema Zihalirwa Elisabeth: recruitment, talent acquisition, HR administration, volunteer management, and organizational coordination.",
};

export default function ServicesPage() {
  const booking = profileData.contact.booking;

  return (
    <div className="pt-16 pb-20">
      {/* 1. Services Section */}
      <ServicesSection />

      {/* 2. Capabilities & Competencies Section */}
      <CapabilitiesSection />

      {/* 3. Call Booking Callout */}
      <section className="py-20 border-t border-[#E4DDD6] bg-[#EEE9DE]/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
            Schedule a Conversation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2A2421] mb-6">
            Ready to discuss your organization&apos;s HR needs?
          </h2>
          <p className="text-sm text-[#736660] leading-relaxed max-w-lg mx-auto mb-10 font-sans">
            Schedule a 30-minute discovery call directly via Google Meet or Calendly
            to discuss recruitment, operational support, or project-based collaboration.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            {booking?.googleCalendarUrl && (
              <a
                href={booking.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Schedule via Google Meet &rarr;
              </a>
            )}

            {booking?.calendlyUrl && (
              <a
                href={booking.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-8 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                Or via Calendly &rarr;
              </a>
            )}

            <a
              href={`mailto:${profileData.contact.email.value}?subject=Services%20Enquiry`}
              className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors py-2 px-4"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
