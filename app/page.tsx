import { HeroSection } from "@/components/sections/HeroSection";
import { AffiliationsBar } from "@/components/sections/AffiliationsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { profileData } from "@/config/profile";

export default function Home() {
  return (
    <div className="bg-[#F7F4EE] text-[#2A2421] selection:bg-[#E4DDD6] selection:text-[#2A2421]">
      {/* 1. Hero Section (Emily Trenouth layout with neema-portrait-01) */}
      <HeroSection />

      {/* 2. Affiliations & Institutional Engagements */}
      <AffiliationsBar />

      {/* 3. About Section (12-column grid with neema-portrait-02 and Simone Breker core philosophy) */}
      <AboutSection />

      {/* 4. Services Section (Emily's Numbered Hairline Ledger + Simone's Deliverables) */}
      <section id="services" className="py-24 md:py-32 border-t border-[#E4DDD6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Header 12-Col Split */}
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
                Services
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-snug mb-4">
                How I can help
              </h2>
              <p className="text-sm text-[#736660] leading-relaxed max-w-xl font-sans">
                Whether you need structured recruitment support, onboarding coordination,
                or reliable HR administration &mdash; I bring organized, dependable execution
                to every engagement.
              </p>
            </div>
          </div>

          {/* Numbered Ledger */}
          <div className="border-b border-[#E4DDD6]">
            {profileData.services.map((service, index) => {
              const numberStr = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={service.id}
                  className="group grid md:grid-cols-12 gap-6 py-10 border-t border-[#E4DDD6] hover:bg-[#EEE9DE]/40 transition-colors px-4 -mx-4"
                >
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-xs text-[#736660] font-mono">{numberStr}</span>
                  </div>

                  {/* Title & Headline */}
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#C75D38] mt-1.5 font-sans font-medium">
                      {service.headline}
                    </p>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="md:col-span-7">
                    <p className="text-sm text-[#736660] leading-relaxed font-sans mb-4">
                      {service.detailedDescription || service.shortDescription}
                    </p>

                    {service.deliverables && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.deliverables.map((del) => (
                          <span
                            key={del}
                            className="text-[11px] tracking-wide uppercase px-2.5 py-1 bg-[#FAF8F5] border border-[#E4DDD6] text-[#736660]"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Actions */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${profileData.contact.email.value}?subject=Consultation%20Enquiry`}
              className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Enquire about working together
            </a>
            {profileData.contact.whatsapp.phoneNumber && (
              <a
                href={`https://wa.me/${profileData.contact.whatsapp.phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(profileData.contact.whatsapp.defaultPrefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-8 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                Chat on WhatsApp &rarr;
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 5. Contact Section (Emily's Exact Underlined Contact Pattern) */}
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

              <div className="flex flex-col sm:flex-row flex-wrap gap-8 font-sans">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
