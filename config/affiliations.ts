
export type AffiliationStatus = "confirmed" | "pending";

export type AffiliationCategory =
  | "startup"
  | "professional"
  | "fellowship"
  | "engagement";

export interface Affiliation {
  id: string;
  name: string;
  role: string;
  category: AffiliationCategory;
  href?: string;
  status: AffiliationStatus;
}

export const affiliations: Affiliation[] = [
  {
    id: "umoja",
    name: "Umoja",
    role: "Co-founder & Chief Operating Officer",
    category: "startup",
    href: "https://umojardc.vercel.app/en",
    status: "confirmed",
  },
  {
    id: "dttasa",
    name: "DTTASA",
    role: "Professional Experience",
    category: "professional",
    href: "https://dttasa.org/",
    status: "confirmed",
  },
  {
    id: "african-liberty",
    name: "African Liberty",
    role: "Writing Fellow · Class of 2026/2027",
    category: "fellowship",
    href: "https://www.africanliberty.org/fellows/",
    status: "confirmed",
  },
  {
    id: "kazieasy-rwanda",
    name: "KaziEasy Rwanda",
    role: "Professional Association",
    category: "professional",
    href: "https://kazieasy.com/",
    status: "confirmed",
  },
];

/**
 * Only confirmed affiliations are displayed publicly. 
 */
export const publishedAffiliations = affiliations.filter(
  (affiliation) => affiliation.status === "confirmed"
);

/**
 * Optional collections for dedicated sections.
 */
export const startupAffiliations = publishedAffiliations.filter(
  (affiliation) => affiliation.category === "startup"
);

export const professionalAffiliations = publishedAffiliations.filter(
  (affiliation) => affiliation.category === "professional"
);

export const fellowships = publishedAffiliations.filter(
  (affiliation) => affiliation.category === "fellowship"
);

export const publicEngagements = publishedAffiliations.filter(
  (affiliation) => affiliation.category === "engagement"
);
