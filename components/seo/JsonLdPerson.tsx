import React from "react";
import { profileData } from "@/config/profile";
import { siteConfig } from "@/config/site";

export function JsonLdPerson() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const sameAsLinks = siteConfig.socialLinks
    .filter((s) => s.status === "confirmed")
    .map((s) => s.url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: profileData.fullName,
        jobTitle: profileData.professionalTitle,
        description: profileData.shortBio,
        url: baseUrl,
        image: `${baseUrl}/images/portraits/neema-portrait-01.jpg`,
        sameAs: sameAsLinks,
        knowsLanguage: ["English", "French", "Swahili"],
        alumniOf: profileData.education.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu.institution || edu.field,
        })),
        worksFor: profileData.experience.map((exp) => ({
          "@type": "Organization",
          name: exp.organization,
          location: exp.location || "Remote",
        })),
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: `${profileData.fullName} — ${profileData.professionalTitle}`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          url: baseUrl,
          name: siteConfig.name,
          description: siteConfig.description,
        },
        about: { "@id": `${baseUrl}/#person` },
        mainEntity: { "@id": `${baseUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
