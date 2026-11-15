import type { Metadata } from "next";
import Image from "next/image";
import { ContactComposer } from "@/components/contact/ContactComposer";
import { profileData } from "@/config/profile";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Consultation — Neema Zihalirwa Elisabeth",
  description:
    "Connect directly with Neema Zihalirwa Elisabeth for human resources consulting, recruitment, onboarding coordination, and direct consultation scheduling via Google Meet or WhatsApp.",
};

export default function ContactPage() {
  const booking = profileData.contact.booking;
  const email = profileData.contact.email.value;
  const rawPhone = profileData.contact.whatsapp.phoneNumber || "+250796164579";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${cleanPhone}`;
  const linkedIn = siteConfig.socialLinks.find((s) => s.platform === "LinkedIn");

  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* 1. Contact Hero Section with Photo & Exactly Two Primary Channels */}
        <div className="mb-20 md:mb-28 border-b border-[#E4DDD6] pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38]">
                Get In Touch
              </p>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#2A2421] leading-[1.1]">
                Great teams are built with intention and care. Let&apos;s talk about yours.
              </h1>

              <p className="font-serif text-lg sm:text-xl font-light text-[#736660] leading-relaxed max-w-xl">
                Whether you are hiring for critical roles, structuring onboarding for volunteers and staff, or seeking thoughtful HR advisory &mdash; I bring calm, structure, and dignity to your people operations.
              </p>

              {/* Exactly Two Fast Action Channels */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 font-mono text-xs uppercase tracking-wider">
                {booking?.googleCalendarUrl && (
                  <a
                    href={booking.googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#2A2421] text-[#FAF8F5] px-7 py-4 hover:bg-[#C75D38] transition-colors"
                  >
                    Schedule Call (Meet) &rarr;
                  </a>
                )}

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#2A2421] text-[#2A2421] px-7 py-4 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
                >
                  Message on WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* Right: Editorial Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 overflow-hidden bg-[#EEE9DE]/40">
                <Image
                  src="/images/portraits/neema-portrait-01.jpg"
                  alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 400px"
                  className="object-cover object-top contrast-105 filter grayscale-0 hover:grayscale-25 transition-all duration-700 ease-out"
                />
              </div>
              <p className="text-xs font-mono text-[#736660] mt-3 text-center lg:text-left">
                Neema Zihalirwa Elisabeth &middot; HR Professional
              </p>
            </div>
          </div>
        </div>

        {/* 2. Direct Message Form (Right Upfront, TanStack Form, Engaging Prompt) */}
        <section className="mb-24 md:mb-32 border-b border-[#E4DDD6] pb-16 md:pb-24 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
              Direct Message
            </p>
          </div>

          <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2421] font-light leading-snug">
              Send a quick note
            </h2>

            <p className="text-sm sm:text-base text-[#736660] font-sans leading-relaxed">
              Tell me about an open role, an operational bottleneck, or a project you are shaping &mdash; a few lines are plenty, and I&apos;ll take it from there.
            </p>

            <div className="pt-2">
              <ContactComposer />
            </div>
          </div>
        </section>

        {/* 3. What happens just after you contact me */}
        <div className="mb-14 md:mb-18">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C75D38] mb-3">
            What to Expect
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2A2421] leading-tight max-w-4xl">
            What happens just after you contact me
          </h2>
        </div>

        {/* 4. The Journey Follow-up Sequence with Channels Embedded Naturally */}
        <div className="space-y-16 md:space-y-20 pb-8">
          {/* Step 1: Initial Review & Direct Response */}
          <section className="space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                01 &middot; First Review
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                I review your note and reply within 24 to 48 hours
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                I personally read every inquiry. You will receive a direct, thoughtful response addressing your context, questions, and timeline &mdash; never an automated corporate sequence.
              </p>
              <p className="text-xs font-mono text-[#736660] pt-1">
                Prefer direct email? You can also write straight to{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-[#2A2421] underline hover:text-[#C75D38] transition-colors break-all"
                >
                  {email}
                </a>.
              </p>
            </div>
          </section>

          {/* Step 2: Exploratory Discovery Call */}
          <section className="space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                02 &middot; The Discovery Call
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                A focused 30-minute discovery conversation
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                We connect on Google Meet to walk through your operational landscape: what is working well, where your team feels stretched, and what practical scaffolding is needed.
              </p>
              {booking?.googleCalendarUrl && (
                <div className="pt-1">
                  <a
                    href={booking.googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#2A2421] border-b border-[#2A2421] pb-1 hover:text-[#C75D38] hover:border-[#C75D38] transition-colors"
                  >
                    Select an introductory slot on Google Calendar &rarr;
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Step 3: Actionable Roadmap & Proposal */}
          <section className="space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                03 &middot; Practical Roadmap
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                A concrete proposal tailored to your team
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                If we decide to collaborate, I outline a clear scope of work &mdash; whether for targeted recruitment sourcing, onboarding scaffolding, or general HR administration. No vague retainers, just accountable execution.
              </p>
              {linkedIn && (
                <p className="text-xs font-mono text-[#736660] pt-1">
                  You can also explore my professional background on{" "}
                  <a
                    href={linkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2A2421] underline hover:text-[#C75D38] transition-colors"
                  >
                    LinkedIn
                  </a>.
                </p>
              )}
            </div>
          </section>

          {/* Step 4: Discretion & Multilingual Alignment */}
          <section className="space-y-4 pb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#C75D38]">
                04 &middot; Discretion &amp; Trust
              </p>
            </div>
            <div className="md:ml-16 lg:ml-24 max-w-4xl space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-snug">
                Complete confidentiality in English, French, or Swahili
              </h3>
              <p className="text-base text-[#736660] font-sans leading-relaxed">
                All organizational challenges, recruitment pipelines, and candidate details shared are treated with strict confidentiality. We collaborate in whichever language is most natural for your team: English, French (Fran&ccedil;ais), or Swahili (Kiswahili).
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
