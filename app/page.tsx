import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { AffiliationsBar } from "@/components/sections/AffiliationsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientStoriesSection } from "@/components/sections/ClientStoriesSection";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { profileData } from "@/config/profile";

export default function Home() {
  const booking = profileData.contact.booking;
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
      <section id="contact" className="py-24 md:py-32 border-t border-[#E4DDD6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Left 4 Cols: Category Label */}
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
                Contact
              </p>
            </div>

            {/* Right 8 Cols: Headline, Intro & Direct Actions */}
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-6">
                Let&apos;s connect
              </h2>
              <p className="text-sm text-[#736660] leading-relaxed mb-10 max-w-md font-sans">
                Whether it is recruitment support, HR administrative consulting, or an
                interdisciplinary collaboration &mdash; I would love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-8 font-sans mb-12">
                <a
                  href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
                  className="text-xs font-medium tracking-[0.15em] uppercase border-b border-[#2A2421] pb-1 hover:opacity-60 transition-opacity"
                >
                  {profileData.contact.email.value}
                </a>

                {profileData.contact.whatsapp.phoneNumber && (
                  <a
                    href={`https://wa.me/${profileData.contact.whatsapp.phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(profileData.contact.whatsapp.defaultPrefilledMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] border-b border-[#736660] pb-1 hover:text-[#2A2421] hover:border-[#2A2421] transition-colors"
                  >
                    WhatsApp ({profileData.contact.whatsapp.phoneNumber})
                  </a>
                )}

                <a
                  href={profileData.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] border-b border-[#736660] pb-1 hover:text-[#2A2421] hover:border-[#2A2421] transition-colors"
                >
                  LinkedIn &rarr;
                </a>
              </div>

              {/* Direct Booking Strip */}
              {booking?.googleCalendarUrl && (
                <div className="pt-8 border-t border-[#E4DDD6] max-w-md">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-3">
                    Direct Calendar Booking
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={booking.googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-6 py-3 hover:bg-[#C75D38] transition-colors"
                    >
                      Google Meet Call &rarr;
                    </a>
                    {booking.calendlyUrl && (
                      <a
                        href={booking.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-6 py-3 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
                      >
                        Calendly &rarr;
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
