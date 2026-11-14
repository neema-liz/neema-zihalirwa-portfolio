import type { ProfileData, EducationEntry, ExperienceEntry, ServiceEntry, CapabilityGroup } from "@/types/profile";

/**
 * Centralized profile configuration for Neema Zihalirwa Elisabeth.
 *
 * CRITICAL RULE:
 * Only verified facts provided by Neema are marked status: "confirmed".
 * All unverified details are marked status: "pending" and excluded from
 * production rendering by accessor helpers.
 */


export const profileData: ProfileData = {
  fullName: "Neema Zihalirwa Elisabeth",

  professionalTitle: "Human Resources Professional",

  tagline:
    "Building stronger organizations through people, purpose, and effective management.",

  shortBio:
    "A Human Resources Professional with practical experience in recruitment, talent acquisition, onboarding, volunteer management, HR administration, and organizational coordination. With an academic background in International Relations and General Pedagogy, she brings an interdisciplinary perspective to people management, organizational development, and cross-cultural collaboration.",

  expandedBio: [
    "Neema Zihalirwa Elisabeth is a Human Resources Professional passionate about people, organizational development, and creating effective workplace environments. She holds a Bachelor's Honours degree in International Relations from Kigali Independent University and a State Diploma in General Pedagogy from Himbi Institute. Her interdisciplinary academic background provides a foundation in communication, education, international affairs, and human development.",

    "Her professional experience includes working with Diaspora Together Trust and Support Association (DTTASA), where she contributes to the human resources function through recruitment, candidate screening, shortlisting, interview coordination, volunteer onboarding, HR documentation, and volunteer relations. Her responsibilities involve supporting recruitment processes, maintaining candidate information, communicating with applicants, and contributing to organized and accountable HR practices.",

    "Beyond traditional HR responsibilities, Neema has developed an understanding of operational coordination through her work with KaziEasy, an emerging technology-driven business serving micro and small enterprises. Her responsibilities include operational research, competitor analysis, organizational coordination, and supporting the development of business processes.",

    "Her professional development includes training in human resource management, data protection and compliance, workforce management, safeguarding, equality and diversity, and international development-related subjects. She also brings digital and analytical capabilities, including Microsoft Office, Google Workspace, SPSS, and Microsoft Access.",

    "Outside her professional responsibilities, Neema is committed to youth empowerment, African development, international cooperation, and community transformation. Through her engagement with African Liberty, the International Organization of Youth, and Umoja, she contributes to initiatives and conversations that promote knowledge, solidarity, and positive social change.",

    "She believes that people are central to organizational success. Her professional philosophy is grounded in integrity, continuous learning, accountability, inclusion, and the conviction that organizations become stronger when they recognize, develop, and invest in their people."
  ],

  values: [
    {
      title: "People-Centered Approach",
      description:
        "Recognizing people as the foundation of organizational success and promoting respectful, inclusive, and productive working environments."
    },
    {
      title: "Integrity and Professional Ethics",
      description:
        "Upholding confidentiality, fairness, accountability, transparency, and ethical conduct in professional relationships and HR practices."
    },
    {
      title: "Continuous Learning",
      description:
        "Embracing professional development, knowledge sharing, innovation, and continuous improvement."
    },
    {
      title: "Collaboration and Inclusion",
      description:
        "Encouraging constructive communication, teamwork, cultural understanding, and mutual respect across diverse environments."
    },
    {
      title: "Purpose-Driven Impact",
      description:
        "Contributing to initiatives and organizational practices that create meaningful value for people and communities."
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor's Honours Degree",
      field: "International Relations",
      institution: "Kigali Independent University (ULK)",
      period: "2023 – 2026",
      highlights: [
        "Academic focus on international relations, diplomacy, governance, international cooperation, and development.",
        "Developed research, analytical writing, communication, and critical-thinking capabilities.",
        "Served as International Relations Class Advisor during the third year.",
        "Completed academic research examining UNICEF's contribution to child welfare in conflict-affected areas of the Democratic Republic of Congo."
      ],
      status: "confirmed"
    },
    {
      id: "edu-2",
      degree: "State Diploma (Diplôme d'État)",
      field: "General Pedagogy",
      institution: "Himbi Institute, Goma, DRC",
      period: "2017 – 2020",
      highlights: [
        "Academic foundation in education, pedagogy, communication, and learning.",
        "Developed an understanding of educational processes and individual development."
      ],
      status: "confirmed"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Human Resources Officer",
      organization:
        "Diaspora Together Trust and Support Association (DTTASA)",
      period: "2025 – Present",
      location: "Remote",
      description:
        "Supporting the organization's human resources function through recruitment, talent acquisition, volunteer management, onboarding, HR documentation, and administrative coordination.",
      responsibilities: [
        "Reviewing CVs and applications against organizational requirements.",
        "Screening, assessing, and shortlisting candidates and volunteers.",
        "Coordinating interviews and candidate communication across different time zones.",
        "Supporting volunteer onboarding, integration, and follow-up.",
        "Maintaining recruitment records, HR documentation, and candidate information.",
        "Supporting volunteer engagement and professional correspondence.",
        "Contributing to recruitment tracking, reporting, and administrative processes.",
        "Supporting the implementation of agreed HR procedures and organizational documentation."
      ],
      achievements: [
        "Successfully completed the DTTASA HR internship with a final evaluation of 93.3%.",
        "Progressed from an HR internship into an HR Officer volunteer role.",
        "Developed practical experience supporting recruitment and volunteer management processes."
      ],
      status: "confirmed"
    },
    {
      id: "exp-2",
      role: "Lead Operations",
      organization: "KaziEasy",
      period: "2026 – Present",
      location: "Rwanda",
      description:
        "Contributing to operational coordination and business development processes within an emerging technology-driven business serving micro and small enterprises.",
      responsibilities: [
        "Supporting operational planning and organizational coordination.",
        "Conducting market and competitor research to inform business decisions.",
        "Identifying opportunities to improve operational processes.",
        "Contributing to business process development and execution.",
        "Supporting coordination between business priorities and operational activities."
      ],
      status: "confirmed"
    }
  ],

  services: [
    {
      id: "service-1",
      title: "Recruitment and Talent Acquisition",
      headline: "Finding the right people to strengthen your organization.",
      shortDescription:
        "Structured recruitment support to help organizations identify, attract, screen, and shortlist suitable candidates.",
      detailedDescription:
        "I support recruitment processes by helping organizations organize candidate applications, review CVs, assess applicants against role requirements, and coordinate recruitment activities. My approach emphasizes structured processes, clear communication, and professional candidate experiences.",
      deliverables: [
        "CV and application screening",
        "Candidate sourcing support",
        "Candidate assessment and shortlisting",
        "Recruitment tracking",
        "Recruitment coordination"
      ],
      status: "confirmed"
    },
    {
      id: "service-2",
      title: "HR Administration",
      headline: "Creating organized and reliable HR processes.",
      shortDescription:
        "Administrative support that helps organizations maintain accurate HR records and structured people-management processes.",
      detailedDescription:
        "I provide practical HR administrative support, helping organizations organize documentation, maintain candidate and personnel records, coordinate administrative activities, and improve the organization of HR information.",
      deliverables: [
        "HR documentation",
        "Personnel record organization",
        "Candidate database management",
        "Recruitment tracking",
        "HR administrative support"
      ],
      status: "confirmed"
    },
    {
      id: "service-3",
      title: "Onboarding and Volunteer Management",
      headline: "Helping people integrate, contribute, and grow.",
      shortDescription:
        "Supporting the integration and engagement of new employees and volunteers through organized onboarding and follow-up.",
      detailedDescription:
        "I support organizations in welcoming new employees and volunteers, coordinating onboarding activities, communicating expectations, organizing relevant documentation, and maintaining follow-up throughout the integration process.",
      deliverables: [
        "Onboarding coordination",
        "New volunteer integration",
        "Welcome and follow-up communication",
        "Volunteer documentation",
        "Engagement and administrative support"
      ],
      status: "confirmed"
    },
    {
      id: "service-4",
      title: "HR Consulting and Organizational Support",
      headline: "Practical HR support for growing organizations.",
      shortDescription:
        "Supporting organizations in improving recruitment coordination, HR administration, documentation, and people-related processes.",
      detailedDescription:
        "I offer practical support within my areas of experience to organizations seeking to strengthen their HR processes. This includes reviewing administrative workflows, improving recruitment coordination, organizing documentation, and supporting people-management practices.",
      deliverables: [
        "Recruitment process review",
        "HR administrative guidance",
        "Documentation and process organization",
        "People-management process support",
        "HR workflow improvement recommendations"
      ],
      status: "confirmed"
    },
    {
      id: "service-5",
      title: "CV Review and Career Support",
      headline: "Helping professionals communicate their value.",
      shortDescription:
        "Supporting students, graduates, and job seekers in presenting their qualifications and professional experience effectively.",
      detailedDescription:
        "I help individuals improve their professional documents and communicate their skills, qualifications, and experience more clearly. This service is designed to strengthen the quality and presentation of job applications.",
      deliverables: [
        "CV review and improvement",
        "Professional profile development",
        "Cover letter support",
        "Job application document review",
        "Career preparation guidance"
      ],
      status: "confirmed"
    },
    {
      id: "service-6",
      title: "Interview Coordination",
      headline: "Making recruitment interviews organized and professional.",
      shortDescription:
        "Supporting smooth interview processes through scheduling, candidate communication, and follow-up.",
      detailedDescription:
        "I assist recruitment teams in organizing interviews, communicating with candidates, coordinating schedules across time zones, and maintaining clear recruitment documentation.",
      deliverables: [
        "Interview scheduling",
        "Candidate communication",
        "Cross-time-zone coordination",
        "Interview documentation",
        "Candidate follow-up"
      ],
      status: "confirmed"
    },
    {
      id: "service-7",
      title: "HR Documentation and Reporting",
      headline: "Turning HR information into organized records and useful reports.",
      shortDescription:
        "Helping organizations maintain structured HR information and prepare clear administrative and recruitment reports.",
      detailedDescription:
        "I support the organization of HR information through documentation, recruitment tracking, record maintenance, and the preparation of administrative reports that facilitate monitoring and informed decision-making.",
      deliverables: [
        "HR record management",
        "Candidate tracking",
        "Recruitment reports",
        "Administrative reporting",
        "Documentation organization"
      ],
      status: "confirmed"
    }
  ],

  capabilities: [
    {
      category: "Human Resources and Talent Acquisition",
      skills: [
        { name: "Recruitment Coordination", status: "confirmed" },
        { name: "CV Review and Candidate Screening", status: "confirmed" },
        { name: "Candidate Shortlisting", status: "confirmed" },
        { name: "Interview Coordination", status: "confirmed" },
        { name: "Candidate Communication", status: "confirmed" },
        { name: "Onboarding Support", status: "confirmed" },
        { name: "Volunteer Management", status: "confirmed" },
        { name: "HR Documentation", status: "confirmed" },
        { name: "Volunteer Relations", status: "confirmed" }
      ]
    },
    {
      category: "HR Administration and Operations",
      skills: [
        { name: "HR Record Management", status: "confirmed" },
        { name: "Recruitment Tracking", status: "confirmed" },
        { name: "Administrative Coordination", status: "confirmed" },
        { name: "Documentation and Reporting", status: "confirmed" },
        { name: "Operational Coordination", status: "confirmed" },
        { name: "Market and Competitor Research", status: "confirmed" }
      ]
    },
    {
      category: "People Development and Communication",
      skills: [
        { name: "Interpersonal Communication", status: "confirmed" },
        { name: "Cross-Cultural Communication", status: "confirmed" },
        { name: "Conflict Management", status: "confirmed" },
        { name: "Team Collaboration", status: "confirmed" },
        { name: "Learning and Development Foundations", status: "confirmed" },
        { name: "Professional Ethics and Confidentiality", status: "confirmed" }
      ]
    },
    {
      category: "Digital and Analytical Skills",
      skills: [
        { name: "Microsoft Office", status: "confirmed" },
        { name: "Google Workspace", status: "confirmed" },
        { name: "SPSS", status: "confirmed" },
        { name: "Microsoft Access", status: "confirmed" },
        { name: "HR Data Management", status: "confirmed" },
        { name: "Recruitment Tracking and Reporting", status: "confirmed" }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "English – C2", status: "confirmed" },
        { name: "French", status: "confirmed" },
        { name: "Swahili", status: "confirmed" }
      ]
    }
  ],

  contact: {
    email: {
      value: "lucianna.neema@gmail.com",
      isPublic: true,
      status: "confirmed"
    },
    whatsapp: {
      phoneNumber: "+250796164579",
      defaultPrefilledMessage:
        "Hello Neema, I visited your portfolio and would like to connect with you professionally.",
      status: "confirmed"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/elisabeth-zihalirwa/",
      status: "confirmed"
    }
  }
};


/**
 * Accessor helpers ensuring unverified/pending information is not rendered in production.
 */
export function getConfirmedEducation(): EducationEntry[] {
  return profileData.education.filter((item) => item.status === "confirmed");
}

export function getConfirmedExperience(): ExperienceEntry[] {
  return profileData.experience.filter((item) => item.status === "confirmed");
}

export function getConfirmedServices(): ServiceEntry[] {
  return profileData.services.filter((item) => item.status === "confirmed");
}

export function getConfirmedCapabilities(): CapabilityGroup[] {
  return profileData.capabilities
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => skill.status === "confirmed"),
    }))
    .filter((group) => group.skills.length > 0);
}
