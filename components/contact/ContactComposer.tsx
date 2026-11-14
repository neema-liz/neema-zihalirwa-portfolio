"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { profileData } from "@/config/profile";

export function ContactComposer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [topic, setTopic] = useState("Recruitment & Talent Sourcing");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const recipientEmail = profileData.contact.email.value;
  const whatsappNumber = profileData.contact.whatsapp.phoneNumber?.replace(/[^0-9]/g, "") || "250796164579";

  const validate = () => {
    if (!name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return false;
    }
    if (!message.trim()) {
      setError("Please enter a short message describing your enquiry.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const emailSubject = `[Portfolio Enquiry] ${topic} — ${name}${organization ? ` (${organization})` : ""}`;
    const emailBody = `Name: ${name}
Email: ${email}
Organization: ${organization || "Not specified"}
Topic: ${topic}

Message:
${message}

---
Sent via Neema Zihalirwa Portfolio (neemazihalirwa.com)`;

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleSendViaWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waText = `*Portfolio Enquiry*
*Name:* ${name}
*Email:* ${email}
*Organization:* ${organization || "N/A"}
*Topic:* ${topic}

*Message:*
${message}`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSendViaEmail} className="p-8 bg-[#FAF8F5] border border-[#E4DDD6] font-sans">
      <div className="mb-6">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#736660] mb-1">
          Direct Message Composer
        </p>
        <h3 className="font-serif text-2xl text-[#2A2421] font-normal">
          Draft your enquiry
        </h3>
        <p className="text-xs text-[#736660] mt-1.5 leading-relaxed">
          Fill out the details below to dispatch your message directly through your personal email client or WhatsApp.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-[#C75D38]/10 border-l-2 border-[#C75D38] text-xs text-[#C75D38] font-medium">
          {error}
        </div>
      )}

      <div className="space-y-5">
        {/* Row 1: Name and Email */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="composer-name" className="block text-[11px] uppercase tracking-wider text-[#736660] mb-2 font-medium">
              Your Name <span className="text-[#C75D38]">*</span>
            </label>
            <input
              id="composer-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Marie Claire"
              className="w-full px-4 py-3 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm text-[#2A2421] placeholder-[#736660]/50 focus:outline-none focus:border-[#2A2421] focus:bg-[#FAF8F5] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="composer-email" className="block text-[11px] uppercase tracking-wider text-[#736660] mb-2 font-medium">
              Your Email <span className="text-[#C75D38]">*</span>
            </label>
            <input
              id="composer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. marie@organization.org"
              className="w-full px-4 py-3 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm text-[#2A2421] placeholder-[#736660]/50 focus:outline-none focus:border-[#2A2421] focus:bg-[#FAF8F5] transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Organization and Topic */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="composer-org" className="block text-[11px] uppercase tracking-wider text-[#736660] mb-2 font-medium">
              Organization &middot; Company <span className="text-[#736660]/60 font-normal">(Optional)</span>
            </label>
            <input
              id="composer-org"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="e.g. Tech NGO / Initiative"
              className="w-full px-4 py-3 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm text-[#2A2421] placeholder-[#736660]/50 focus:outline-none focus:border-[#2A2421] focus:bg-[#FAF8F5] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="composer-topic" className="block text-[11px] uppercase tracking-wider text-[#736660] mb-2 font-medium">
              Area of Interest
            </label>
            <select
              id="composer-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm text-[#2A2421] focus:outline-none focus:border-[#2A2421] focus:bg-[#FAF8F5] transition-colors"
            >
              <option value="Recruitment & Talent Sourcing">Recruitment &amp; Talent Sourcing</option>
              <option value="Onboarding & Orientation Systems">Onboarding &amp; Orientation Systems</option>
              <option value="HR Administration & Compliance">HR Administration &amp; Compliance</option>
              <option value="Training & Pedagogical Scaffolding">Training &amp; Pedagogical Scaffolding</option>
              <option value="Volunteer Coordination">Volunteer Coordination</option>
              <option value="General Consultation & Advisory">General Consultation &amp; Advisory</option>
              <option value="Other Enquiries">Other Enquiries</option>
            </select>
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label htmlFor="composer-message" className="block text-[11px] uppercase tracking-wider text-[#736660] mb-2 font-medium">
            Message <span className="text-[#C75D38]">*</span>
          </label>
          <textarea
            id="composer-message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please describe your organization's requirements, timeline, or discussion topics..."
            className="w-full px-4 py-3 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm text-[#2A2421] placeholder-[#736660]/50 focus:outline-none focus:border-[#2A2421] focus:bg-[#FAF8F5] transition-colors resize-y"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-6 py-3.5 hover:bg-[#C75D38] transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Open in Email App &rarr;</span>
          </button>

          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="inline-flex items-center justify-center gap-2 text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-6 py-3.5 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#1e3a34]" />
            <span>Send via WhatsApp &rarr;</span>
          </button>
        </div>

        {/* Privacy Assurance */}
        <p className="text-[11px] text-[#736660] leading-relaxed pt-2 border-t border-[#E4DDD6]/60 flex items-center gap-1.5">
          <Send className="w-3 h-3 text-[#736660] shrink-0" />
          <span>
            <strong>Zero third-party tracking:</strong> Your draft is processed entirely in your browser and transmitted directly via your preferred application.
          </span>
        </p>
      </div>
    </form>
  );
}
