"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { profileData } from "@/config/profile";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactComposer() {
  const [submitted, setSubmitted] = useState<"email" | "whatsapp" | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const recipientEmail = profileData.contact.email.value;
  const rawPhone = profileData.contact.whatsapp.phoneNumber || "+250796164579";
  const whatsappNumber = rawPhone.replace(/[^0-9]/g, "");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      // Default form submission routes to email
      dispatchEmail(value);
    },
  });

  const dispatchEmail = (values: FormValues) => {
    if (!values.name.trim()) {
      setGeneralError("Please enter your name.");
      return;
    }
    if (!values.email.trim() || !values.email.includes("@")) {
      setGeneralError("Please provide a valid email address so I can reply to you.");
      return;
    }
    if (!values.message.trim()) {
      setGeneralError("Please enter your message.");
      return;
    }

    setGeneralError(null);

    const emailSubject = values.subject.trim()
      ? `[Portfolio Enquiry] ${values.subject.trim()} — ${values.name.trim()}`
      : `[Portfolio Enquiry] Conversation with ${values.name.trim()}`;

    const emailBody = `Name: ${values.name.trim()}
Email: ${values.email.trim()}
Subject: ${values.subject.trim() || "General Enquiry"}

Message:
${values.message.trim()}

---
Sent via Neema Zihalirwa Portfolio (neemazihalirwa.com)`;

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted("email");
  };

  const dispatchWhatsApp = () => {
    const values = form.state.values;

    if (!values.name.trim()) {
      setGeneralError("Please enter your name.");
      return;
    }
    if (!values.message.trim()) {
      setGeneralError("Please enter a short message describing what you'd like to discuss.");
      return;
    }

    // Email is NOT mandatory for WhatsApp!
    setGeneralError(null);

    const emailLine = values.email.trim() ? `\n*Email:* ${values.email.trim()}` : "";
    const subjectLine = values.subject.trim() ? `\n*Subject:* ${values.subject.trim()}` : "";

    const waText = `*Portfolio Enquiry*
*Name:* ${values.name.trim()}${emailLine}${subjectLine}

*Message:*
${values.message.trim()}`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted("whatsapp");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6 font-sans max-w-3xl"
    >
      {generalError && (
        <div className="p-3.5 bg-[#C75D38]/10 border-l-2 border-[#C75D38] text-xs text-[#C75D38] font-medium">
          {generalError}
        </div>
      )}

      {submitted === "email" && (
        <div className="p-4 bg-[#EEE9DE]/60 border-l-2 border-[#2A2421] text-xs sm:text-sm text-[#2A2421] leading-relaxed">
          <p className="font-medium">Draft opened in your email client.</p>
          <p className="text-[#736660] mt-1">
            If your app didn&apos;t open automatically, write directly to{" "}
            <a href={`mailto:${recipientEmail}`} className="text-[#C75D38] underline">
              {recipientEmail}
            </a>.
          </p>
        </div>
      )}

      {submitted === "whatsapp" && (
        <div className="p-4 bg-[#EEE9DE]/60 border-l-2 border-[#2A2421] text-xs sm:text-sm text-[#2A2421] leading-relaxed">
          <p className="font-medium">WhatsApp chat initiated.</p>
          <p className="text-[#736660] mt-1">
            Looking forward to speaking with you!
          </p>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <form.Field
          name="name"
          children={(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>
                Your Name <span className="text-[#C75D38]">*</span>
              </Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="e.g. Marie Claire"
              />
            </div>
          )}
        />

        <form.Field
          name="email"
          children={(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>
                Your Email{" "}
                <span className="text-[#736660]/60 font-normal lowercase">
                  (for email replies)
                </span>
              </Label>
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="e.g. marie@organization.org"
              />
            </div>
          )}
        />
      </div>

      {/* Row 2: Subject */}
      <form.Field
        name="subject"
        children={(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>
              Subject <span className="text-[#736660]/60 font-normal">(Optional)</span>
            </Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="e.g. Recruitment support, Onboarding advisory, or Consultation"
            />
          </div>
        )}
      />

      {/* Row 3: Message */}
      <form.Field
        name="message"
        children={(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>
              Your Message <span className="text-[#C75D38]">*</span>
            </Label>
            <Textarea
              id={field.name}
              name={field.name}
              rows={5}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Tell me a bit about what you are working on or what you'd like to discuss..."
            />
          </div>
        )}
      />

      {/* Dual Modern Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-8 py-4 hover:bg-[#C75D38] transition-colors cursor-pointer"
        >
          Send via Email &rarr;
        </button>

        <button
          type="button"
          onClick={dispatchWhatsApp}
          className="inline-flex items-center justify-center text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-8 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          Send via WhatsApp &rarr;
        </button>
      </div>
    </form>
  );
}
