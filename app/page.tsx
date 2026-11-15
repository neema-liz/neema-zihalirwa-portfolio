import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { AffiliationsBar } from "@/components/sections/AffiliationsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientStoriesSection } from "@/components/sections/ClientStoriesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getAllPosts(false).slice(0, 3);

  return (
    <div className="bg-[#F7F4EE] text-[#2A2421] selection:bg-[#E4DDD6] selection:text-[#2A2421]">
      {/* 1. Hero Section (Emily Trenouth layout with neema-portrait-01) */}
      <HeroSection />

      {/* 2. Affiliations & Institutional Engagements */}
      <AffiliationsBar />

      {/* 3. About Section (12-column grid with neema-portrait-02 and Simone Breker core philosophy) */}
      <AboutSection />

      {/* 4. Experience Section (DTTASA & KaziEasy verified career timeline) */}
      <ExperienceSection />

      {/* 5. Capabilities Section (Categorized competencies & languages) */}
      <CapabilitiesSection />

      {/* 6. Services Section (Emily's Numbered Hairline Ledger + Google Meet / Calendly booking) */}
      <ServicesSection />

      {/* 7. Client Stories Teaser Section */}
      <ClientStoriesSection />

      {/* 8. Selected Essays & Writing */}
      {latestPosts.length > 0 && (
        <section id="writing" className="py-24 md:py-32 border-t border-[#E4DDD6]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="grid md:grid-cols-12 gap-12 mb-16">
              <div className="md:col-span-4">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
                  Writing
                </p>
              </div>
              <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-4">
                    Selected essays &amp; field notes
                  </h2>
                  <p className="text-sm text-[#736660] leading-relaxed max-w-lg font-sans">
                    Perspectives on talent acquisition, pedagogical scaffolding in onboarding,
                    and operational frameworks in emerging markets.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  View all essays &rarr;
                </Link>
              </div>
            </div>

            <div className="border-b border-[#E4DDD6]">
              {latestPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Contact Section (Direct email, WhatsApp & Booking Touchpoints) */}
      <ContactSection />
    </div>
  );
}
