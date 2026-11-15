export interface ClientStory {
  id: string;
  slug: string;
  client: string;
  sector: string;
  role: string;
  headline: string;
  summary: string; // Concise teaser for homepage section
  context: string;
  challenge: string;
  intervention: string;
  deliverables: string[];
  outcomes: string[];
  quote?: {
    text: string;
    attribution: string;
  };
}

export const clientStories: ClientStory[] = [
  {
    id: "dttasa",
    slug: "dttasa-volunteer-intake-system",
    client: "Diaspora Together Trust & Support Association (DTTASA)",
    sector: "Non-Profit & International Diaspora",
    role: "HR & Volunteer Coordination Support",
    headline: "Structuring a Cross-Border Volunteer Intake & Compliance Workflow",
    summary:
      "Transforming decentralized volunteer recruitment into a standardized screening rubric, structured interview coordination, and accountable onboarding documentation.",
    context:
      "DTTASA engages international diaspora communities, volunteers, and cross-border contributors. As engagement grew, managing applicant communications and volunteer onboarding required rigorous, organized human resources practices.",
    challenge:
      "Applicant inquiries were distributed across multiple informal channels, creating delays in screening, inconsistent candidate information records, and friction in volunteer onboarding transitions.",
    intervention:
      "Developed a standardized candidate screening rubric, centralized applicant tracking, and designed an interview coordination pipeline with clear communication templates and compliance documentation checklists.",
    deliverables: [
      "Standardized candidate screening rubrics",
      "Volunteer onboarding documentation checklists",
      "Interview scheduling & coordination templates",
      "Applicant communication cadence guidelines",
    ],
    outcomes: [
      "Significantly reduced candidate intake and screening response times",
      "Achieved 100% completeness in volunteer record-keeping and safeguarding files",
      "Established an empathetic, professional candidate experience for cross-border applicants",
    ],
    quote: {
      text: "A structured onboarding workflow transformed how our international contributors transition into active, supported volunteers.",
      attribution: "DTTASA People & Operations Leadership",
    },
  },
  {
    id: "kazieasy",
    slug: "kazieasy-sme-operations",
    client: "KaziEasy",
    sector: "Emerging Technology & Micro-Enterprise",
    role: "Operational Research & Coordination",
    headline: "Developing Operational Workflows for Emerging Small Enterprises",
    summary:
      "Establishing operational research protocols, competitor benchmarking, and structured coordination templates to align daily execution with strategic business priorities.",
    context:
      "KaziEasy is an emerging technology-driven business serving micro and small enterprises. Delivering high-touch services required scalable internal operational processes.",
    challenge:
      "Growing client demands required moving from ad-hoc task execution to standardized business workflows and systematic market research.",
    intervention:
      "Conducted structured competitor analysis, established operational planning cadences, and drafted standard operating procedures for team coordination.",
    deliverables: [
      "Competitor research & market benchmarking briefs",
      "Small business process standardization templates",
      "Cross-functional operational coordination cadences",
    ],
    outcomes: [
      "Created repeatable operational frameworks for service delivery",
      "Strengthened coordination between business development and daily operations",
      "Provided actionable competitor intelligence to guide service offerings",
    ],
  },
  {
    id: "youth-pedagogy",
    slug: "pedagogical-talent-development",
    client: "African Liberty & Youth Initiatives",
    sector: "Civic Leadership & Fellowship",
    role: "Fellow & Educational Facilitator",
    headline: "Applying Pedagogical Scaffolding to Talent Development & Mentorship",
    summary:
      "Leveraging foundations in General Pedagogy to design adult learning scaffolds, mentorship frameworks, and structured skill-building cycles.",
    context:
      "Working with distributed youth leaders and fellows from diverse educational backgrounds across Africa.",
    challenge:
      "Contributors possessed strong enthusiasm but varied levels of training in professional writing, critical research methodologies, and time management.",
    intervention:
      "Applied pedagogical instructional design: breaking complex research projects into incremental milestones with structured feedback loops and peer review sessions.",
    deliverables: [
      "Milestone-based learning scaffolds",
      "Peer review & constructive feedback rubrics",
      "Analytical writing & research guides",
    ],
    outcomes: [
      "High completion rates for research milestones across participant cohorts",
      "Enhanced analytical writing confidence and research rigor",
      "Fostered an inclusive culture of peer-to-peer knowledge sharing",
    ],
  },
];
