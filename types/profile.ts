export type ConfirmationStatus = "confirmed" | "pending";

export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  period?: string;
  highlights?: string[];
  status: ConfirmationStatus;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  status: ConfirmationStatus;
}

export interface ServiceEntry {
  id: string;
  title: string;
  headline: string;
  shortDescription: string;
  detailedDescription?: string;
  deliverables?: string[];
  status: ConfirmationStatus;
}

export interface CapabilityGroup {
  category: string;
  skills: {
    name: string;
    status: ConfirmationStatus;
  }[];
}

export interface ContactInfo {
  email: {
    value: string;
    isPublic: boolean;
    status: ConfirmationStatus;
  };
  whatsapp: {
    phoneNumber: string;
    defaultPrefilledMessage: string;
    status: ConfirmationStatus;
  };
  linkedin: {
    url: string;
    status: ConfirmationStatus;
  };
  booking?: {
    googleCalendarUrl: string;
    calendlyUrl: string;
    preferredUrl: string;
    label: string;
    status: ConfirmationStatus;
  };
}

export interface ProfileData {
  fullName: string;
  professionalTitle: string;
  tagline: string;
  shortBio: string;
  expandedBio: string[];
  values: {
    title: string;
    description: string;
  }[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  services: ServiceEntry[];
  capabilities: CapabilityGroup[];
  contact: ContactInfo;
}
