import { HeroSection } from "@/components/sections/HeroSection";
import { AffiliationsBar } from "@/components/sections/AffiliationsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientStoriesSection } from "@/components/sections/ClientStoriesSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-[#F7F4EE] text-[#2A2421] selection:bg-[#E4DDD6] selection:text-[#2A2421]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Affiliations & Institutional Engagements */}
      <AffiliationsBar />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Experience Section */}
      <ExperienceSection />

      {/* 5. Capabilities Overview Section */}
      <CapabilitiesSection overview={true} />

      {/* 6. Services Section */}
      <ServicesSection />

      {/* 7. Client Stories Teaser Section */}
      <ClientStoriesSection />

      {/* 8. Selected Essays & Writing */}
      <WritingSection />

      {/* 9. Contact Section */}
      <ContactSection />
    </div>
  );
}
