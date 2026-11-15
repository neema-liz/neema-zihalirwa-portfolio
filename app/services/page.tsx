import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { profileData } from "@/config/profile";

export const metadata: Metadata = {
  title: "Services & Capabilities — Neema Zihalirwa Elisabeth",
  description:
    "Explore human resources services offered by Neema Zihalirwa Elisabeth: recruitment, talent acquisition, HR administration, volunteer management, and organizational coordination.",
};

export default function ServicesPage() {
  const booking = profileData.contact.booking;
  const services = profileData.services;

  return (
    <div className="bg-[#F7F4EE] text-[#2A2421]">
      {/* 1. Hero Introduction with Remarkable Sized Portrait of Elisabeth */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#E4DDD6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Remarkable Portrait */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-[3/4] max-w-md mx-auto md:max-w-none border border-[#E4DDD6] bg-[#EEE9DE]/30 p-2 sm:p-3 shadow-sm">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/portraits/neema-portrait-01.jpg"
                    alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right: Thoughtful Editorial Introduction */}
            <div className="md:col-span-7 order-1 md:order-2">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
                Services &amp; Collaboration
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight mb-6">
                How can I help your organization thrive?
              </h1>

              <p className="text-sm sm:text-base text-[#736660] leading-relaxed font-sans mb-6">
                Building a dependable, high-performing team begins with structured people operations. 
                Whether you are scaling an emerging enterprise, coordinating a remote volunteer network, 
                or seeking hands-on HR administrative execution, I bring organized processes, educational 
                pedagogy, and cross-cultural clarity to your workforce.
              </p>

              {/* Engagement Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#E4DDD6]">
                <div>
                  <span className="font-mono text-xs text-[#C75D38] block mb-1">01 &mdash; Project</span>
                  <h3 className="font-serif text-sm font-medium text-[#2A2421]">Recruitment Sprints</h3>
                  <p className="text-xs text-[#736660] font-sans mt-1">Targeted candidate sourcing, screening, and shortlisting.</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C75D38] block mb-1">02 &mdash; Ongoing</span>
                  <h3 className="font-serif text-sm font-medium text-[#2A2421]">People Operations</h3>
                  <p className="text-xs text-[#736660] font-sans mt-1">Dedicated support for onboarding, records, and team queries.</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C75D38] block mb-1">03 &mdash; Structure</span>
                  <h3 className="font-serif text-sm font-medium text-[#2A2421]">Workflow &amp; Policy</h3>
                  <p className="text-xs text-[#736660] font-sans mt-1">Organizing documentation and repeatable HR processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Services Roster (Clean Minimalist Presentation, No Overwhelming Badges) */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-end">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-2">
                Detailed Offerings
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#2A2421] leading-tight mb-3">
                Core services &amp; deliverables
              </h2>
              <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-xl font-sans">
                Each engagement is tailored to your organization&apos;s stage &mdash; ensuring candidates are treated with 
                respect and internal processes remain organized and compliant.
              </p>
            </div>
          </div>

          <div className="border-b border-[#E4DDD6]">
            {services.map((service, index) => {
              const numberStr = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={service.id}
                  className="group py-12 sm:py-16 border-t border-[#E4DDD6] hover:bg-[#EEE9DE]/20 transition-colors px-4 -mx-4"
                >
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Col 1: Number Ledger */}
                    <div className="md:col-span-1">
                      <span className="font-mono text-xs sm:text-sm text-[#736660] group-hover:text-[#C75D38] transition-colors font-medium">
                        {numberStr}
                      </span>
                    </div>

                    {/* Col 2-5: Title & Headline */}
                    <div className="md:col-span-4 pr-4">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-light leading-snug mb-2 group-hover:text-[#C75D38] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#C75D38] font-sans font-medium leading-relaxed">
                        {service.headline}
                      </p>
                    </div>

                    {/* Col 6-12: Detailed Value & Minimalist Deliverables */}
                    <div className="md:col-span-7">
                      <p className="text-sm text-[#736660] leading-relaxed font-sans mb-6">
                        {service.detailedDescription || service.shortDescription}
                      </p>

                      {/* Clean 2-Column Deliverables List (Zero bulky badge boxes) */}
                      {service.deliverables && service.deliverables.length > 0 && (
                        <div className="pt-4 border-t border-[#E4DDD6]">
                          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#736660] mb-3">
                            Key Deliverables:
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm font-sans text-[#2A2421]">
                            {service.deliverables.map((del) => (
                              <li key={del} className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C75D38] shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Capabilities & Competencies Section */}
      <CapabilitiesSection />

      {/* 4. Schedule a Conversation Section */}
      <section className="py-24 md:py-32 border-t border-[#E4DDD6] bg-[#EEE9DE]/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-3">
            Schedule a Conversation
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] mb-6">
            Ready to discuss your organization&apos;s HR needs?
          </h2>

          <p className="text-sm sm:text-base text-[#736660] leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            Every team has unique priorities and operational rhythms. Whether you are looking to streamline 
            your hiring pipeline, design an onboarding curriculum for new team members or volunteers, or 
            require hands-on HR coordination on a contract or project basis &mdash; let&apos;s start with an open 
            conversation. Choose a convenient 30-minute slot on my calendar via Google Meet or Calendly, or 
            send a direct message with your project scope.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
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
                Book via Calendly &rarr;
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
