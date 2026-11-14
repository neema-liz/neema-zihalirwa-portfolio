import React from "react";
import { Mail, MessageCircle, Calendar, Video, MapPin, Clock } from "lucide-react";
import { profileData } from "@/config/profile";
import { CopyEmailButton } from "./CopyEmailButton";

export function ContactChannels() {
  const email = profileData.contact.email.value;
  const whatsappNumber = profileData.contact.whatsapp.phoneNumber;
  const whatsappClean = whatsappNumber ? whatsappNumber.replace(/[^0-9]/g, "") : "";
  const whatsappPrefill = encodeURIComponent(
    profileData.contact.whatsapp.defaultPrefilledMessage ||
      "Hello Neema, I came across your portfolio and would like to connect."
  );
  const booking = profileData.contact.booking;

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Direct Email Card */}
      <div className="p-6 bg-[#EEE9DE]/40 border border-[#E4DDD6] transition-colors">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#736660] font-medium">
            <Mail className="w-4 h-4 text-[#C75D38]" />
            <span>Direct Email</span>
          </div>
          <CopyEmailButton email={email} />
        </div>

        <a
          href={`mailto:${email}?subject=Professional%20Enquiry`}
          className="font-serif text-xl sm:text-2xl text-[#2A2421] hover:text-[#C75D38] transition-colors block mb-2 break-all"
        >
          {email}
        </a>
        <p className="text-xs text-[#736660] leading-relaxed">
          Best for detailed project scopes, recruitment enquiries, or institutional collaboration proposals.
        </p>
      </div>

      {/* 2. Direct WhatsApp Card */}
      {whatsappNumber && (
        <div className="p-6 bg-[#EEE9DE]/40 border border-[#E4DDD6] transition-colors">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#736660] font-medium mb-3">
            <MessageCircle className="w-4 h-4 text-[#C75D38]" />
            <span>WhatsApp Direct Chat</span>
          </div>

          <a
            href={`https://wa.me/${whatsappClean}?text=${whatsappPrefill}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-xl sm:text-2xl text-[#2A2421] hover:text-[#C75D38] transition-colors block mb-2"
          >
            {whatsappNumber} &rarr;
          </a>
          <p className="text-xs text-[#736660] leading-relaxed">
            Direct chat for quick questions, scheduling alignment, and urgent talent queries.
          </p>
        </div>
      )}

      {/* 3. Direct Calendar Booking Strip */}
      {booking && (
        <div className="p-6 bg-[#EEE9DE]/40 border border-[#E4DDD6] transition-colors">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[#736660] font-medium mb-3">
            <Calendar className="w-4 h-4 text-[#C75D38]" />
            <span>30-Minute Consultation Call</span>
          </div>

          <h3 className="font-serif text-xl text-[#2A2421] font-normal mb-2">
            Schedule a Discovery Conversation
          </h3>
          <p className="text-xs text-[#736660] leading-relaxed mb-5">
            Book a dedicated 30-minute introductory call directly on my calendar to discuss your team&apos;s HR needs.
          </p>

          <div className="flex flex-wrap gap-3">
            {booking.googleCalendarUrl && (
              <a
                href={booking.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase bg-[#2A2421] text-[#FAF8F5] px-5 py-2.5 hover:bg-[#C75D38] transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Google Meet &rarr;</span>
              </a>
            )}

            {booking.calendlyUrl && (
              <a
                href={booking.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase border border-[#2A2421] text-[#2A2421] px-5 py-2.5 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Calendly &rarr;</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* 4. Location & Availability Note */}
      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#E4DDD6] text-xs text-[#736660]">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-[#736660] shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-[#2A2421] block">Location</span>
            <span>Kigali, Rwanda &middot; Available for remote &amp; regional travel</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-[#736660] shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-[#2A2421] block">Timezone</span>
            <span>Central Africa Time (CAT &middot; UTC+2)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
