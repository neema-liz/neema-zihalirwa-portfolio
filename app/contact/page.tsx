import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactComposer } from "@/components/contact/ContactComposer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Consultation — Neema Zihalirwa Elisabeth",
  description:
    "Connect directly with Neema Zihalirwa Elisabeth for human resources consulting, recruitment, onboarding coordination, and direct consultation scheduling via Google Meet or WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 pb-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header 12-Column Split */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
              Get In Touch
            </p>
            <p className="text-xs text-[#736660] font-sans leading-relaxed">
              Available for full-time opportunities, consulting engagements, and advisory collaborations across the Great Lakes region and remotely.
            </p>
          </div>

          <div className="md:col-span-8">
            <h1 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-6">
              Let&apos;s start a conversation about your team&apos;s people operations.
            </h1>
            <p className="text-sm text-[#736660] leading-relaxed max-w-xl font-sans">
              Whether you need structured recruitment pipelines, onboarding workflows, or
              dependable personnel administration, I bring thoughtful execution to every project.
            </p>
          </div>
        </div>

        {/* Main Content Grid: 12-Column */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Booking */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#736660] mb-4">
                Direct Channels &middot; Booking
              </p>
              <ContactChannels />
            </div>

            {/* Social Footprint */}
            <div className="pt-8 border-t border-[#E4DDD6]">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#736660] mb-4">
                Professional Networks
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-sans">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#736660] hover:text-[#2A2421] border-b border-[#E4DDD6] pb-0.5 hover:border-[#2A2421] transition-colors"
                  >
                    {social.platform} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="md:col-span-7">
            <ContactComposer />

            {/* Practical Notes */}
            <div className="mt-8 p-6 bg-[#EEE9DE]/30 border border-[#E4DDD6] font-sans text-xs text-[#736660] space-y-2">
              <p className="font-medium text-[#2A2421] uppercase tracking-wider text-[11px]">
                Engagement Expectations
              </p>
              <p className="leading-relaxed">
                <strong>Response Cadence:</strong> All written inquiries are reviewed and answered within 24 to 48 business hours.
              </p>
              <p className="leading-relaxed">
                <strong>Languages:</strong> Inquiries are welcomed in <strong>English</strong>, <strong>French (Fran&ccedil;ais)</strong>, or <strong>Swahili (Kiswahili)</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
