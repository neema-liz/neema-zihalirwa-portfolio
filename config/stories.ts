export interface ClientStory {
  id: string;
  slug: string;
  client: string;
  sector: string;
  role: string;
  period?: string;
  title: string; // What I did for the organization
  homepageTeaser: string; // Concise 1-sentence teaser for the homepage
  situation: string; // The context, background, and challenge
  collaboration: string; // How Neema collaborated and executed
  impact: string[]; // Concrete results and outcomes achieved
  focusAreas: string[]; // Core capability focus domains
  toolsUsed: string[]; // Specific tools and platforms utilized
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
    sector: "International Non-Profit & Diaspora Engagement",
    role: "Human Resources Officer & Volunteer Coordinator",
    period: "2025 – Present",
    title: "Structuring a Cross-Border Volunteer Recruitment & Onboarding System",
    homepageTeaser:
      "Standardized candidate screening, interview coordination, and volunteer record-keeping across international time zones.",
    situation:
      "DTTASA coordinates cross-border volunteers and diaspora community members across multiple continents. As volunteer interest expanded, applicant inquiries were arriving through disparate, informal channels without unified evaluation criteria. This created administrative bottlenecks, delayed response times, and inconsistent onboarding documentation for incoming contributors.",
    collaboration:
      "Working remotely as an HR Officer and intern, I partnered with organizational leadership to establish a structured, repeatable recruitment and onboarding workflow. I reviewed and screened incoming CVs against organizational requirements, designed clear evaluation rubrics, scheduled and coordinated candidate interviews across differing time zones, and built an end-to-end welcome checklist to support volunteers through their first 90 days.",
    impact: [
      "Completed the rigorous DTTASA HR evaluation with a 93.3% performance score and progressed from intern to ongoing HR Officer.",
      "Achieved 100% record completeness for volunteer compliance documentation and safeguarding files.",
      "Significantly accelerated candidate screening turnaround through centralized application tracking.",
      "Maintained empathetic, professional candidate communications that elevated the organization's reputation among international applicants.",
    ],
    focusAreas: [
      "Recruitment & Candidate Screening",
      "Interview Scheduling & Coordination",
      "Volunteer Onboarding & Engagement",
      "HR Documentation & Safeguarding",
      "Cross-Time-Zone Communication",
    ],
    toolsUsed: [
      "Google Workspace (Sheets, Docs, Forms)",
      "Applicant Tracking Spreadsheets",
      "Slack & Asynchronous Channels",
      "Google Meet & Zoom",
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
    sector: "Emerging Technology & Micro-Enterprise Support",
    role: "Lead Operations",
    period: "2026 – Present",
    title: "Developing Operational Workflows & Market Intelligence for SME Tech",
    homepageTeaser:
      "Established structured operational planning cadences, competitor research protocols, and repeatable workflows for an emerging tech platform.",
    situation:
      "KaziEasy is an emerging technology-driven venture designed to serve micro and small enterprises in Rwanda. Delivering high-touch digital services to small business owners required transitioning from ad-hoc task coordination to standardized internal processes, clear team cadences, and continuous market intelligence.",
    collaboration:
      "Serving as Lead Operations, I supported operational planning cadences, conducted comprehensive competitor and market research across the region, identified friction points in service execution, and authored standard coordination templates to align daily team execution with strategic business priorities.",
    impact: [
      "Established repeatable operational templates that streamlined coordination between business development and daily delivery.",
      "Conducted structured competitor benchmarking briefs that informed key product and service decisions.",
      "Implemented structured weekly planning cadences to maintain accountability across operational activities.",
      "Strengthened internal workflow documentation to ensure consistency as the business expands.",
    ],
    focusAreas: [
      "Operational Process Design",
      "Competitor & Market Research",
      "Team Coordination Cadences",
      "Standard Operating Procedures (SOPs)",
      "Strategic Business Support",
    ],
    toolsUsed: [
      "Google Workspace & Excel Modeling",
      "Notion Process Documentation",
      "Market Research Frameworks",
      "Remote Team Collaboration Tools",
    ],
  },
  {
    id: "youth-pedagogy",
    slug: "pedagogical-talent-development",
    client: "Academic & Youth Leadership Initiatives (ULK & Himbi)",
    sector: "Higher Education & Leadership Development",
    role: "Class Advisor & Pedagogical Facilitator",
    period: "2023 – 2026",
    title: "Applying Pedagogical Scaffolding to Peer Mentorship & Cohort Coordination",
    homepageTeaser:
      "Applied educational psychology and milestone feedback loops to mentor peer cohorts and coordinate research deliverables.",
    situation:
      "University cohorts and emerging civic fellows often struggle with the transition from theoretical instruction to rigorous analytical writing, self-directed research, and coordinated group deliverables. Without pedagogical structure, learners frequently experience overload and inconsistent milestone completion.",
    collaboration:
      "Drawing on my foundational background in General Pedagogy and serving as Class Advisor at Kigali Independent University (ULK), I applied pedagogical instructional design to peer mentorship. I broke down complex international relations research projects into incremental milestones, facilitated structured peer critique circles, and provided individualized guidance on research methodology and written synthesis.",
    impact: [
      "Successfully coordinated academic and developmental milestones for an entire university cohort as Class Advisor.",
      "Demonstrated the practical impact of scaffolding and iterative feedback loops on adult learning and retention.",
      "Facilitated peer-review sessions that substantially improved analytical rigor and writing confidence.",
      "Built a culture of mutual support, empathetic listening, and collective accountability within the cohort.",
    ],
    focusAreas: [
      "Adult Learning & Pedagogical Scaffolding",
      "Milestone-Based Project Design",
      "Peer Mentorship & Guidance",
      "Diplomatic & Cross-Cultural Communication",
      "Cohort Coordination",
    ],
    toolsUsed: [
      "SPSS Statistical Analysis",
      "Academic Research Portals",
      "Google Docs & Collaborative Rubrics",
      "Milestone Tracking Spreadsheets",
    ],
  },
];
