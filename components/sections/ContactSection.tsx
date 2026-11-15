import React from "react";
import { profileData } from "@/config/profile";

export function ContactSection() {
  const booking = profileData.contact.booking;

  return (
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
                  WhatsApp
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
                  or let&apos;s schedule a meeting
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
  );
}
