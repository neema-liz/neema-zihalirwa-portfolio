import type { Metadata } from "next";
import Link from "next/link";
import { AboutSection } from "@/components/sections/AboutSection";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "About — Neema Zihalirwa Elisabeth",
  description:
    "Learn about Neema Zihalirwa Elisabeth's background in International Relations, General Pedagogy, and human resources practice.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 pb-20">
      <AboutSection showExtendedBio={true} />

      {/* Bottom CTA on dedicated About page */}
      <section className="py-16 border-t border-[#E4DDD6] bg-[#EEE9DE]/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
            Collaboration &middot; Opportunities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#2A2421] mb-6">
            Interested in working together?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
              className="text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <Link
              href="/#services"
              className="text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-8 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
            >
              View Services &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
