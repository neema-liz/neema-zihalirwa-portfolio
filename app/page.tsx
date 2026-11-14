import Image from "next/image";
import { profileData } from "@/config/profile";

export default function Home() {
  return (
    <div className="bg-[#F7F4EE] text-[#2A2421] selection:bg-[#E4DDD6] selection:text-[#2A2421]">
      {/* =========================================================================
          HERO SECTION (Directly inspired by Emily Trenouth's editorial Hero)
      ========================================================================= */}
      <section className="min-h-screen flex items-center pt-28 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column: Headline & Narrative */}
            <div className="md:col-span-7">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-8">
                Human Resources &middot; Talent &middot; People Operations
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2A2421] leading-[0.95] mb-10">
                Neema
                <br />
                <em className="font-light italic text-[#C75D38]">Zihalirwa</em>
              </h1>

              <p className="max-w-md text-sm text-[#736660] leading-relaxed mb-12 font-sans">
                Human Resources Professional with an academic foundation in International
                Relations and General Pedagogy. Dedicated to structured recruitment,
                talent onboarding, and people-centric organizational development.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <a
                  href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
                  className="text-xs font-medium tracking-[0.15em] uppercase bg-[#C75D38] text-[#FAF8F5] px-7 py-3.5 hover:opacity-90 transition-opacity"
                >
                  Work with me
                </a>
                <a
                  href="#about"
                  className="text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
                >
                  Learn more &darr;
                </a>
              </div>
            </div>

            {/* Right Column: Architectural 3:4 Portrait */}
            <div className="md:col-span-5">
              <div className="aspect-[3/4] overflow-hidden bg-[#EEE9DE] border border-[#E4DDD6]">
                <Image
                  src="/images/portraits/neema-portrait-01.jpg"
                  alt="Neema Zihalirwa Elisabeth — Human Resources Professional"
                  width={900}
                  height={1200}
                  priority
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AFFILIATIONS & ENGAGEMENTS (Quiet, elegant editorial logo strip)
      ========================================================================= */}
      <section className="py-16 border-t border-[#E4DDD6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] text-center mb-10">
            Selected Affiliations &middot; Institutions &middot; Engagements
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
              DTTASA Association
            </span>
            <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
              KaziEasy Rwanda
            </span>
            <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
              Kigali Independent Univ. (ULK)
            </span>
            <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
              Himbi Institute
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT SECTION (12-Column Asymmetrical Grid)
      ========================================================================= */}
      <section id="about" className="py-24 md:py-32 border-t border-[#E4DDD6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            {/* Left 4 Cols: Section Eyebrow */}
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660]">
                About
              </p>
            </div>

            {/* Right 8 Cols: Editorial Story */}
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2A2421] leading-snug mb-8">
                Building stronger organizations through people, purpose, and structured HR practice.
              </h2>

              <p className="text-sm text-[#736660] leading-relaxed mb-6 max-w-xl font-sans">
                Neema Zihalirwa Elisabeth is a Human Resources Professional passionate
                about people, organizational development, and creating effective workplace
                environments. Holding a Bachelor&apos;s Honours degree in International Relations
                from Kigali Independent University and a State Diploma in General Pedagogy
                from Himbi Institute, she brings an interdisciplinary perspective to people
                management, cross-cultural communication, and organizational coordination.
              </p>

              <p className="text-sm text-[#736660] leading-relaxed mb-6 max-w-xl font-sans">
                Her practical HR experience includes working with Diaspora Together Trust
                and Support Association (DTTASA), where she contributes to recruitment,
                candidate screening, interview coordination, volunteer onboarding, and HR
                documentation across multiple time zones.
              </p>

              <p className="text-sm text-[#736660] leading-relaxed mb-8 max-w-xl font-sans">
                Beyond traditional HR, Neema coordinates operational activities and competitor
                research with KaziEasy in Rwanda, supporting emerging micro and small
                enterprises with structured operational processes.
              </p>

              {/* Simone Breker-inspired Core Philosophy Pull-Quote */}
              <div className="my-10 p-6 sm:p-8 bg-[#EEE9DE]/60 border-l-2 border-[#C75D38] max-w-xl">
                <p className="font-serif text-lg italic text-[#2A2421] leading-relaxed mb-2">
                  &ldquo;Great hires don&apos;t happen through speed alone. They happen when
                  role requirements, human capability, and organizational culture actually
                  align.&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-[#736660] font-sans">
                  Neema Zihalirwa Elisabeth &mdash; HR Philosophy
                </p>
              </div>

              {/* Education Cards (Clean Hairline Grid) */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[#E4DDD6] max-w-xl">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-1">
                    2023 &ndash; 2026 &middot; Kigali, Rwanda
                  </p>
                  <h3 className="font-serif text-base text-[#2A2421] font-medium">
                    Bachelor&apos;s Honours in International Relations
                  </h3>
                  <p className="text-xs text-[#736660] mt-1">
                    Kigali Independent University (ULK)
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#736660] mb-1">
                    2017 &ndash; 2020 &middot; Goma, DRC
                  </p>
                  <h3 className="font-serif text-base text-[#2A2421] font-medium">
                    State Diploma in General Pedagogy
                  </h3>
                  <p className="text-xs text-[#736660] mt-1">Himbi Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION (Emily's Numbered Hairline Ledger + Simone's Deliverables)
      ========================================================================= */}
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

      {/* =========================================================================
          CONTACT SECTION (Emily's Exact Underlined Contact Pattern)
      ========================================================================= */}
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
