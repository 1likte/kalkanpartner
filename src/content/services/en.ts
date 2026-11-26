import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";

export const servicesOverviewEn: ServicesOverviewContent = {
  seo: {
    title: "Our Services – Nine Specialized Departments | KALKAN PARTNER",
    description:
      "Explore all nine departments of KALKAN PARTNER: Recruitment, Relocation, Public Authority Support, Translation & Communication, Business Setup, Medical Tourism Coordination, Digital & AI Solutions, Family & Education, and Restaurant & Kitchen Solutions.",
    keywords: [
      "Business services Germany",
      "International coordination Germany Türkiye",
      "Recruitment coordination Germany",
      "Relocation service Germany",
      "Restaurant consulting Germany",
    ],
  },
  eyebrow: "Service Portfolio",
  title: "Nine departments for structured international solutions",
  subtitle:
    "Clear workflows, transparent legal boundaries, and direct inquiry routing.",
  categories: [
    {
      id: "business-gastronomy",
      label: "Business, Market Entry & Hospitality",
      description: "For employers, founders, hospitality operators, and SMEs.",
      slugs: ["restaurant-kitchen", "recruitment", "business-setup", "digital-ai"],
    },
    {
      id: "mobility-administration",
      label: "Mobility, Administration & Communication",
      description: "Structured organizational and communication support in Germany.",
      slugs: ["relocation", "behoerdenservice", "translation-communication"],
    },
    {
      id: "family-health",
      label: "Family, Education & Medical Tourism Coordination",
      description: "Reliable coordination for families, students, and patients.",
      slugs: ["family-education", "medical-tourism"],
    },
  ],
  cardReadMore: "Explore Department",
  breadcrumbHome: "Home",
  breadcrumbServices: "Services",
  relatedHeading: "Related Departments",
  allServicesCta: "All Departments",
  legalBannerTitle: "Clear Legal Scope",
  legalBannerBody:
    "KALKAN PARTNER provides organizational and coordinating services only. Legal, tax, medical, architectural, or licensed services are handled by duly authorized specialist partners.",
};

export const servicesEn: Record<ServiceSlug, ServiceDetailContent> = {
  recruitment: {
    slug: "recruitment",
    inquiryTopic: "recruitment",
    icon: "users",
    seo: {
      title: "Recruitment & International Candidate Coordination | KALKAN PARTNER",
      description:
        "Structured candidate sourcing and hiring coordination connecting German employers with candidates from Türkiye and global markets.",
      keywords: [
        "Recruitment Germany Türkiye",
        "International candidate coordination Germany",
        "Hospitality and SME staffing coordination",
      ],
    },
    eyebrow: "Department 01 · Recruitment",
    title: "Recruitment & Candidate Coordination",
    lead: "Connecting employers in Germany with qualified candidates from Türkiye and international markets – from CV structuring to onboarding.",
    audienceBadge: "For employers in Germany & international candidates",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "We structure cross-border hiring from candidate sourcing and formatted CVs to interview scheduling and smooth onboarding coordination.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "Candidate sourcing (TR & global)",
        "CV & credential structuring",
        "Profile pre-organization",
        "Interview scheduling",
        "Multilingual communication",
        "Onboarding coordination",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "Built for German businesses hiring directly and qualified candidates.",
      groups: [
        {
          title: "Employers in Germany",
          description: "SMEs and hospitality venues seeking direct permanent hires.",
        },
        {
          title: "Qualified Candidates",
          description: "International professionals preparing clear dossiers for German interviews.",
        },
        {
          title: "Expansion Teams",
          description: "Growing businesses needing coordinated hiring for new openings.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Removing friction in cross-border hiring.",
      items: [
        {
          problem: "Inconsistent candidate files",
          solution: "Uniformly structured CVs and records ready for German employers.",
        },
        {
          problem: "Language & expectation gaps",
          solution: "Clear multilingual alignment from the very first call.",
        },
        {
          problem: "Scheduling bottlenecks",
          solution: "One dedicated coordinator managing slots and follow-ups.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "Clear from briefing to start date.",
      steps: [
        {
          number: "01",
          title: "Role Briefing",
          description: "Define duties, skills, language level, and start timeframe.",
        },
        {
          number: "02",
          title: "Sourcing & CVs",
          description: "Identify matching profiles and format supporting documents.",
        },
        {
          number: "03",
          title: "Interviews",
          description: "Schedule and facilitate employer–candidate interviews.",
        },
        {
          number: "04",
          title: "Direct Contract",
          description: "Following direct agreement, coordinate practical onboarding steps.",
        },
      ],
    },
    inquiry: {
      heading: "Request Staffing Support",
      description: "Share your hiring need or profile briefly for a focused assessment.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Target role(s) and city in Germany",
        "Required languages & timeline",
        "Company & primary contact",
      ],
      primaryCtaLabel: "Start Recruitment Inquiry",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Never send passport copies via initial contact forms.",
    },
    legalBoundary: {
      heading: "Legal Boundaries",
      points: [
        "Employment contracts are concluded directly between employer and employee.",
        "No temporary agency work (Arbeitnehmerüberlassung).",
        "No promises or guarantees for visas, permits, or employment offers.",
        "German statutory rules on job placement and candidate fee limits are strictly observed.",
      ],
    },
    relatedSlugs: ["relocation", "behoerdenservice", "translation-communication"],
  },

  relocation: {
    slug: "relocation",
    inquiryTopic: "general",
    icon: "home",
    seo: {
      title: "Relocation Service Germany | KALKAN PARTNER",
      description:
        "Structured relocation coordination for professionals and families moving to Germany.",
      keywords: [
        "Relocation service Germany",
        "Moving to Germany coordination",
        "Family relocation support Germany",
      ],
    },
    eyebrow: "Department 02 · Relocation",
    title: "Relocation & Settlement",
    lead: "Practical relocation coordination for Germany: arrival planning, housing viewing communication, school research, and utilities.",
    audienceBadge: "For professionals, individuals & families",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "We organize your arrival in Germany step by step – from move planning and viewing appointments to childcare research and electricity/internet registration.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "Pre-arrival & arrival roadmap",
        "Housing search communication",
        "School & kindergarten research",
        "Moving logistics coordination",
        "Electricity & internet setup",
        "First-weeks orientation",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For an orderly, stress-free start in Germany.",
      groups: [
        {
          title: "International Hires",
          description: "Professionals focusing on their new job while settling smoothly.",
        },
        {
          title: "Relocating Families",
          description: "Households coordinating housing, childcare, and utilities together.",
        },
        {
          title: "Employers",
          description: "Companies supporting incoming international team members.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Clear order instead of arrival chaos.",
      items: [
        {
          problem: "Confusing registration sequence",
          solution: "A step-by-step roadmap prevents missed deadlines.",
        },
        {
          problem: "Language barrier with landlords",
          solution: "We coordinate clear German outreach and viewing appointments.",
        },
        {
          problem: "Scattered local info",
          solution: "Concise city-specific school, daycare, and utility options.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "From planning to settled routines.",
      steps: [
        {
          number: "01",
          title: "Destination Review",
          description: "Confirm target city, dates, and household setup.",
        },
        {
          number: "02",
          title: "Roadmap",
          description: "Sequence tasks and required checklists cleanly.",
        },
        {
          number: "03",
          title: "Coordination",
          description: "Arrange viewings, school research, and utility setup.",
        },
        {
          number: "04",
          title: "Settlement",
          description: "Follow through on initial registrations after arrival.",
        },
      ],
    },
    inquiry: {
      heading: "Request Relocation Call",
      description: "Share your target city and dates for a clear coordination plan.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Destination city & move window",
        "Individual or family setup",
        "Key priority areas",
      ],
      primaryCtaLabel: "Request Relocation Call",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Never send ID copies, bank statements, or credit reports via initial forms.",
    },
    legalBoundary: {
      heading: "Legal Scope (§ 34c GewO)",
      points: [
        "We do not perform regulated real-estate brokerage under § 34c GewO.",
        "Scope is strictly limited to relocation planning, communication, and scheduling.",
        "Lease and utility contracts are concluded directly with respective providers.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "family-education", "recruitment"],
  },

  behoerdenservice: {
    slug: "behoerdenservice",
    inquiryTopic: "general",
    icon: "landmark",
    seo: {
      title: "Public Authority Support Germany | KALKAN PARTNER",
      description:
        "Appointment scheduling, document preparation, and administrative coordination in Germany.",
      keywords: [
        "Public authority support Germany",
        "Administrative coordination Germany",
        "Document preparation and appointment scheduling",
      ],
    },
    eyebrow: "Department 03 · Public Authority Support",
    title: "Public Authority Support",
    lead: "Structured appointment scheduling, complete document folders, and factual administrative coordination within legal limits.",
    audienceBadge: "For individuals & businesses in Germany",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "Missing forms delay public procedures by weeks. Without providing legal advice, we organize checklists, book appointments, and track submissions cleanly.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "Appointment & deadline tracking",
        "Document completeness checklists",
        "Timely submission support",
        "Correspondence where accepted",
        "Permissible status inquiries",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For orderly, punctual administrative workflows.",
      groups: [
        {
          title: "Newcomers & Families",
          description: "Well-prepared folders for standard municipal appointments.",
        },
        {
          title: "Busy Professionals",
          description: "Organized tracking of deadlines and public letters.",
        },
        {
          title: "Businesses",
          description: "Administrative prep alongside lawyers and tax advisers.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Preventing avoidable paperwork delays.",
      items: [
        {
          problem: "Incomplete appointment files",
          solution: "Structured checklists prepared ahead of every date.",
        },
        {
          problem: "Unclear letters & deadlines",
          solution: "Clear timeline tracking and factual administrative follow-ups.",
        },
        {
          problem: "Scattered offices",
          solution: "All appointments and submissions tracked in one place.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "Strictly bounded and transparent.",
      steps: [
        {
          number: "01",
          title: "Scope Check",
          description: "Confirm administrative scope and whether legal counsel is needed.",
        },
        {
          number: "02",
          title: "File Prep",
          description: "Arrange all forms and records in review-ready order.",
        },
        {
          number: "03",
          title: "Scheduling",
          description: "Coordinate appointments and timely submissions.",
        },
        {
          number: "04",
          title: "Follow-Up",
          description: "Handle permissible status inquiries and updates.",
        },
      ],
    },
    inquiry: {
      heading: "Request Admin Coordination",
      description: "Share the general procedure type and deadlines briefly.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Procedure type & German city",
        "Existing deadlines or dates",
        "Whether counsel is involved",
      ],
      primaryCtaLabel: "Request Public Authority Support",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Never send ID copies or official notices via initial forms.",
    },
    legalBoundary: {
      heading: "German RDG Boundaries",
      points: [
        "No legal advice, legal representation, or immigration-law assessments (RDG).",
        "Authorized communication occurs only where accepted by the respective authority.",
        "Legal questions or appeals are referred strictly to licensed attorneys.",
      ],
    },
    relatedSlugs: ["relocation", "translation-communication", "business-setup"],
  },

  "translation-communication": {
    slug: "translation-communication",
    inquiryTopic: "general",
    icon: "languages",
    seo: {
      title: "Translation & Communication (DE · TR · EN) | KALKAN PARTNER",
      description:
        "German–Turkish–English business communication and certified translator coordination.",
      keywords: [
        "German Turkish English business communication",
        "Translation coordination Germany",
        "Sworn translator coordination",
      ],
    },
    eyebrow: "Department 04 · Translation",
    title: "Translation & Communication",
    lead: "Accurate German, Turkish, and English business communication plus sworn translator coordination when officially required.",
    audienceBadge: "Corporate & private (DE · TR · EN)",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "We craft clear commercial correspondence, organize CVs and corporate profiles, and coordinate duly sworn translators whenever official certification is required.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "DE · TR · EN business correspondence",
        "General document translations",
        "CV & company profile editing",
        "Sworn translator scheduling",
        "Supplier & partner communication",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For clear credibility across languages.",
      groups: [
        {
          title: "DE–TR Trading Firms",
          description: "Clear commercial proposals and supplier coordination.",
        },
        {
          title: "Professionals & Individuals",
          description: "Well-structured CVs and certified document workflows.",
        },
        {
          title: "Multilingual Teams",
          description: "Consistent alignment across German, Turkish, and English.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Precision instead of awkward machine translation.",
      items: [
        {
          problem: "Ambiguous business texts",
          solution: "Market-appropriate tone for German and Turkish partners.",
        },
        {
          problem: "Unclear certification rules",
          solution: "Upfront clarity and sworn translator coordination.",
        },
        {
          problem: "Cross-border slowdowns",
          solution: "Fast trilingual correspondence keeps deals moving.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "Fast scoping and reliable delivery.",
      steps: [
        {
          number: "01",
          title: "Language Review",
          description: "Confirm language pair and certification needs.",
        },
        {
          number: "02",
          title: "Timeline",
          description: "Align turnaround and sworn translator booking if needed.",
        },
        {
          number: "03",
          title: "Execution",
          description: "Drafting or specialist translation with terminology QA.",
        },
        {
          number: "04",
          title: "Delivery",
          description: "Final handover and optional ongoing correspondence.",
        },
      ],
    },
    inquiry: {
      heading: "Request Language Support",
      description: "Share your language pair, document type, and target date.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Language pair (DE ↔ TR / EN)",
        "Document type (business, CV, official)",
        "Target delivery date",
      ],
      primaryCtaLabel: "Request Language Support",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Share confidential originals only after agreeing on a secure channel.",
    },
    legalBoundary: {
      heading: "Certification Scope",
      points: [
        "Not every general translation is an officially certified translation.",
        "Certified translations are prepared exclusively by duly sworn translators.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "business-setup", "recruitment"],
  },

  "business-setup": {
    slug: "business-setup",
    inquiryTopic: "business",
    icon: "briefcase",
    seo: {
      title: "Business Setup Germany | KALKAN PARTNER",
      description:
        "Market research, partner search, and scheduled coordination with notaries, lawyers, and tax advisers in Germany.",
      keywords: [
        "Business setup Germany coordination",
        "German market entry from Türkiye",
        "Supplier and partner search Germany",
      ],
    },
    eyebrow: "Department 05 · Business Setup",
    title: "Business Setup & Market Entry",
    lead: "Structured preparation for Germany: market and supplier research, partner outreach, and advisor scheduling.",
    audienceBadge: "For founders, companies & investors",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "As your local coordinator in Germany, we prepare commercial research, source suppliers and partners, and organize scheduled meetings with notaries, lawyers, and tax advisers.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "Market & competitor research",
        "Partner & distributor search",
        "Supplier sourcing & quotes",
        "Formation process coordination",
        "Notary, lawyer & tax adviser booking",
        "Administrative project tracking",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For methodical German market entry.",
      groups: [
        {
          title: "Turkish & Global Companies",
          description: "Launching a German subsidiary or commercial presence.",
        },
        {
          title: "Founders in Germany",
          description: "Needing organized timelines, suppliers, and advisor interfaces.",
        },
        {
          title: "Trade Ventures",
          description: "Seeking vetted commercial partners across DE and TR.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Saving months of trial and error.",
      items: [
        {
          problem: "Unclear formation sequence",
          solution: "Organized stages and well-prepared advisor meetings.",
        },
        {
          problem: "Finding reliable suppliers",
          solution: "Targeted local outreach and vetted introductions.",
        },
        {
          problem: "HQ-to-Germany gaps",
          solution: "One trilingual coordinator aligning every milestone.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "From scoping to launch readiness.",
      steps: [
        {
          number: "01",
          title: "Objectives",
          description: "Clarify sector, target region, and expansion goals.",
        },
        {
          number: "02",
          title: "Research",
          description: "Compile market insights and partner/supplier shortlists.",
        },
        {
          number: "03",
          title: "Advisors",
          description: "Schedule independent notaries, lawyers, and tax advisers.",
        },
        {
          number: "04",
          title: "Coordination",
          description: "Track administrative milestones through launch.",
        },
      ],
    },
    inquiry: {
      heading: "Discuss Market Entry",
      description: "Share your sector and target region for an initial assessment.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Industry & target region in Germany",
        "Current stage (concept or expansion)",
        "Key priorities",
      ],
      primaryCtaLabel: "Start Business Setup Inquiry",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Never attach confidential corporate deeds or ID copies in initial forms.",
    },
    legalBoundary: {
      heading: "Regulated Professions Boundary",
      points: [
        "KALKAN PARTNER handles organizational coordination and commercial research.",
        "Legal advice, tax advisory, and notarial acts are performed exclusively by licensed professionals.",
      ],
    },
    relatedSlugs: ["digital-ai", "restaurant-kitchen", "recruitment"],
  },

  "medical-tourism": {
    slug: "medical-tourism",
    inquiryTopic: "medical-tourism",
    icon: "heartPulse",
    seo: {
      title: "Medical Tourism Coordination Türkiye | KALKAN PARTNER",
      description:
        "Transparent communication, interpreter, and travel coordination with authorized hospitals in Türkiye.",
      keywords: [
        "Medical tourism coordination Türkiye",
        "International patient communication Türkiye",
        "Authorized hospital travel coordination",
      ],
    },
    eyebrow: "Department 06 · Medical Tourism",
    title: "Medical Tourism Coordination",
    lead: "Transparent communication, interpreter, and travel coordination connecting international patients with authorized hospitals in Türkiye.",
    audienceBadge: "For international patients",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "Strictly separate from medical evaluation or treatment, we coordinate communication, translation, travel, and accommodation with authorized hospitals in Türkiye.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "Authorized Turkish hospitals",
        "Patient communication",
        "Interpreter & translation support",
        "General information requests",
        "Travel, transfer & hotel booking",
        "Post-visit follow-up support",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For calm, transparent logistics.",
      groups: [
        {
          title: "Patients From Europe",
          description: "Seeking clear language support with authorized clinics in Türkiye.",
        },
        {
          title: "Companions & Families",
          description: "For smoothly aligned travel, stay, and interpreter schedules.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Clarity instead of aggressive marketing.",
      items: [
        {
          problem: "Finding authorized clinics",
          solution: "We connect solely with licensed Turkish healthcare providers.",
        },
        {
          problem: "Language barriers",
          solution: "Clear multilingual communication and interpreter coordination.",
        },
        {
          problem: "Uncoordinated travel",
          solution: "Flights, transfers, hotels, and clinic visits aligned cleanly.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "Clear split between logistics and medicine.",
      steps: [
        {
          number: "01",
          title: "Briefing",
          description: "Clarify general inquiry topic and preferred language.",
        },
        {
          number: "02",
          title: "Clinic Contact",
          description: "Forward general inquiry to authorized provider in Türkiye.",
        },
        {
          number: "03",
          title: "Medical Review",
          description: "All medical evaluation takes place directly with physicians.",
        },
        {
          number: "04",
          title: "Travel & Care",
          description: "Coordinate flights, hotels, interpreters, and follow-up.",
        },
      ],
    },
    inquiry: {
      heading: "Request Coordination",
      description: "Share your general inquiry and language preference – no medical files.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "General topic & preferred city in Türkiye",
        "Preferred language (DE / TR / EN)",
        "Approximate travel window",
      ],
      primaryCtaLabel: "Request Coordination",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "IMPORTANT: Never send medical records, X-rays, or passports via web forms.",
    },
    legalBoundary: {
      heading: "Medical, Advertising (HWG) & Legal Scope",
      points: [
        "No diagnosis, prescriptions, treatment, or clinical guarantees.",
        "No unverified healing claims or before-and-after visuals (German HWG).",
        "Treatment contracts exist solely directly with the authorized Turkish hospital.",
        "Transparency: Fees are either agreed with the client or received as a partner service fee.",
      ],
    },
    relatedSlugs: ["translation-communication", "relocation", "family-education"],
  },

  "digital-ai": {
    slug: "digital-ai",
    inquiryTopic: "business",
    icon: "cpu",
    seo: {
      title: "Digital & AI Solutions Germany | KALKAN PARTNER",
      description:
        "Corporate websites, SEO, Local SEO, GEO AI search visibility, chatbots, and workflow automation.",
      keywords: [
        "Digital and AI solutions Germany",
        "Corporate website SEO Local SEO",
        "GEO AI search visibility",
        "AI chatbots and business automation",
      ],
    },
    eyebrow: "Department 07 · Digital & AI",
    title: "Digital & AI Solutions",
    lead: "Conversion-focused corporate websites, Google & AI search visibility (GEO), and practical workflow automation.",
    audienceBadge: "For SMEs, hospitality & brands",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "We combine modern web design with technical SEO, Local SEO, Generative Engine Optimization (GEO), and lean GDPR-aligned AI automations that save daily time.",
      ],
      scopeTitle: "Service Modules",
      scopeItems: [
        "Multilingual corporate websites",
        "DE · TR · EN SEO strategy",
        "Local SEO & Google Business setup",
        "GEO (AI search visibility)",
        "Brand identity & content",
        "AI chatbots & automation",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For measurable visibility and efficiency.",
      groups: [
        {
          title: "SMEs & Service Firms",
          description: "Seeking credible web presence and qualified local leads.",
        },
        {
          title: "Hospitality Launches",
          description: "Strong local Google & web visibility from opening day.",
        },
        {
          title: "Growing Teams",
          description: "Automating repetitive inquiries and internal workflows.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Digital channels that actively convert.",
      items: [
        {
          problem: "Websites that don't convert",
          solution: "Clear architecture built around trust and inquiry capture.",
        },
        {
          problem: "Low Google & AI visibility",
          solution: "Technical SEO, Local SEO, and structured GEO content.",
        },
        {
          problem: "Manual bottlenecks",
          solution: "Practical chatbots and automations without software bloat.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "Modular and privacy-conscious.",
      steps: [
        {
          number: "01",
          title: "Digital Audit",
          description: "Review current presence, search opportunity, and AI scope.",
        },
        {
          number: "02",
          title: "Design & SEO",
          description: "Define site architecture, brand tone, and keyword strategy.",
        },
        {
          number: "03",
          title: "Build & AI",
          description: "Develop fast, GDPR-conscious websites and automations.",
        },
        {
          number: "04",
          title: "Handover",
          description: "Team training and optional ongoing optimization.",
        },
      ],
    },
    inquiry: {
      heading: "Discuss Your Digital Project",
      description: "Whether website, SEO/GEO, or AI automation, let's map out next steps.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Current website URL & target region",
        "Priority focus (Web, SEO/GEO, AI)",
        "Target launch date",
      ],
      primaryCtaLabel: "Start Digital Project Inquiry",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Please do not share server passwords or API keys in initial forms.",
    },
    legalBoundary: {
      heading: "Privacy & Scope",
      points: [
        "Designed with GDPR (DSGVO) data-minimization principles.",
        "Legal approval of imprints and policies remains with qualified counsel.",
      ],
    },
    relatedSlugs: ["business-setup", "restaurant-kitchen", "translation-communication"],
  },

  "family-education": {
    slug: "family-education",
    inquiryTopic: "general",
    icon: "graduationCap",
    seo: {
      title: "Family & Education Germany | KALKAN PARTNER",
      description:
        "School, kindergarten, and course research plus student application coordination in Germany.",
      keywords: [
        "School and kindergarten research Germany",
        "Student application coordination Germany",
        "Family relocation and education support",
      ],
    },
    eyebrow: "Department 08 · Family & Education",
    title: "Family & Education",
    lead: "Regional school, kindergarten, and course research plus organized student application coordination across Germany.",
    audienceBadge: "For families, pupils & students",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "Because German education rules vary by state and municipality, we research local options, structure application checklists, and assist with institutional communication.",
      ],
      scopeTitle: "Coordination Scope",
      scopeItems: [
        "Regional school research",
        "Kindergarten (Kita) options",
        "Language & vocational courses",
        "Student application checklists",
        "Family relocation alignment",
        "Accommodation communication",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For well-timed educational transitions.",
      groups: [
        {
          title: "Relocating Families",
          description: "Parents researching daycares and schools ahead of moving.",
        },
        {
          title: "International Students",
          description: "Applicants organizing admission files and language courses.",
        },
        {
          title: "Course Learners",
          description: "Comparing accredited language and vocational programs.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Preventing missed enrollment windows.",
      items: [
        {
          problem: "Complex municipal rules",
          solution: "Clear overview of local portals and registration deadlines.",
        },
        {
          problem: "Incomplete applications",
          solution: "Review-ready document checklists well ahead of deadlines.",
        },
        {
          problem: "Language barriers",
          solution: "Clear German correspondence with schools and offices.",
        },
      ],
    },
    process: {
      heading: "4-Step Process",
      intro: "Aligned with academic timelines.",
      steps: [
        {
          number: "01",
          title: "Goal & City",
          description: "Clarify age, educational stage, and destination city.",
        },
        {
          number: "02",
          title: "Research",
          description: "Present matching schools, daycares, or courses.",
        },
        {
          number: "03",
          title: "Files",
          description: "Organize application checklists and correspondence.",
        },
        {
          number: "04",
          title: "Follow-Up",
          description: "Track appointments and family settlement steps.",
        },
      ],
    },
    inquiry: {
      heading: "Request Education Support",
      description: "Share your target city and educational needs briefly.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Destination city/state & timeframe",
        "Need (Kita, school, course, university)",
        "Current language level",
      ],
      primaryCtaLabel: "Start Education Inquiry",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Never send original diplomas or birth certificates in initial forms.",
    },
    legalBoundary: {
      heading: "Scope Notice",
      points: [
        "Organizational research and application coordination only.",
        "Admission and placement decisions rest solely with institutions.",
      ],
    },
    relatedSlugs: ["relocation", "behoerdenservice", "translation-communication"],
  },

  "restaurant-kitchen": {
    slug: "restaurant-kitchen",
    inquiryTopic: "restaurant",
    icon: "utensilsCrossed",
    featured: true,
    heroImage: {
      src: "/images/restaurant-kitchen.jpg",
      alt: "Commercial stainless steel restaurant kitchen with induction island and organized pass area",
    },
    seo: {
      title: "Restaurant & Kitchen Solutions Germany | KALKAN PARTNER",
      description:
        "Concept, opening coordination, kitchen layout, equipment selection, menu, recipes, food cost, SOPs, and opening support.",
      keywords: [
        "Restaurant consulting Germany",
        "Commercial kitchen layout planning",
        "Menu recipe standardization and food cost",
        "Restaurant opening support and SOPs Germany",
      ],
    },
    eyebrow: "Department 09 · Flagship Practice",
    title: "Restaurant & Kitchen Solutions",
    lead: "Hands-on culinary operations from concept to service: kitchen layout, equipment, menu, recipes, food cost, SOPs, and launch support.",
    audienceBadge: "For hospitality founders & existing restaurants",
    whatIs: {
      heading: "What We Do",
      paragraphs: [
        "Instead of theoretical slides, we build commercial kitchen systems grounded in real service leadership – covering zoning, equipment, standardized recipes, food cost control, and SOPs.",
      ],
      scopeTitle: "Operational Scope",
      scopeItems: [
        "Concept & opening coordination",
        "Hot, cold, dish & storage layout",
        "Equipment specs & suppliers",
        "Menu, recipes & portion weights",
        "Food cost & margin calculation",
        "SOP manuals & kitchen roles",
        "Dining-room service workflow",
        "Pre-opening & launch support",
      ],
    },
    targetAudience: {
      heading: "Who It's For",
      intro: "For profitable, repeatable hospitality operations.",
      groups: [
        {
          title: "Restaurant Founders",
          description: "Avoiding costly equipment mistakes and bottlenecked kitchens before launch.",
        },
        {
          title: "Existing Venues",
          description: "Lowering high food cost and stabilizing plate consistency.",
        },
        {
          title: "Multi-Site Operators",
          description: "Building standardized recipes and SOPs across locations.",
        },
      ],
    },
    problemsSolved: {
      heading: "Challenges We Solve",
      intro: "Preventing costly pre-opening and daily margin mistakes.",
      items: [
        {
          problem: "Tight traffic & wrong equipment",
          solution: "Ergonomic zoning aligned strictly with actual menu flow.",
        },
        {
          problem: "Uncontrolled food cost",
          solution: "Gram-accurate recipes and clear margin sheets.",
        },
        {
          problem: "Opening-week chaos",
          solution: "Clear SOPs, station duties, and pass-to-table workflows.",
        },
      ],
    },
    process: {
      heading: "5-Stage Launch Process",
      intro: "From concept to opening service.",
      steps: [
        {
          number: "01",
          title: "Concept & Space",
          description: "Review concept, capacity, and floor constraints.",
        },
        {
          number: "02",
          title: "Layout & Specs",
          description: "Station zoning, equipment schedules, and suppliers.",
        },
        {
          number: "03",
          title: "Menu & Costing",
          description: "Recipe cards, gram weights, and food cost sheets.",
        },
        {
          number: "04",
          title: "SOPs & Setup",
          description: "SOP manuals, staff duties, and installation tracking.",
        },
        {
          number: "05",
          title: "Pre-Opening",
          description: "Test runs and hands-on opening support.",
        },
      ],
    },
    inquiry: {
      heading: "Discuss Your Hospitality Project",
      description: "Share your concept and timeline for a focused consultation.",
      prepChecklistTitle: "Helpful Details",
      prepChecklist: [
        "Concept type (restaurant, café, production)",
        "City, floor area / seats & stage",
        "Priority focus areas",
      ],
      primaryCtaLabel: "Request Restaurant Proposal",
      secondaryCtaLabel: "All Departments",
      sensitiveDataReminder:
        "Lease agreements or blueprints can follow after our initial call.",
    },
    legalBoundary: {
      heading: "Engineering Scope Boundary",
      points: [
        "We deliver operational hospitality consulting, kitchen workflow, costing, and opening coordination.",
        "Statutory architectural, structural, electrical, gas, fire, and ventilation plans are executed solely by licensed engineers.",
      ],
    },
    relatedSlugs: ["business-setup", "recruitment", "digital-ai"],
  },
};
