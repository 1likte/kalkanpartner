import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";

export const servicesOverviewEn: ServicesOverviewContent = {
  seo: {
    title: "Our Services – Nine Specialized Departments | KALKAN PARTNER",
    description:
      "Explore all nine departments of KALKAN PARTNER: Recruitment, Relocation, Behördenservice, Translation & Communication, Business Setup, Medical Tourism Coordination, Digital & AI, Family & Education, and Restaurant & Kitchen Solutions.",
    keywords: [
      "Business services Germany",
      "International coordination Germany Türkiye",
      "Recruitment coordination Germany",
      "Relocation service Germany",
      "Restaurant consulting Germany",
    ],
  },
  eyebrow: "Service Portfolio",
  title: "Nine specialized departments for structured international solutions",
  subtitle:
    "Every department follows a clear coordination workflow with transparent legal scope, practical milestones, and a direct inquiry path for businesses and private clients.",
  categories: [
    {
      id: "business-gastronomy",
      label: "Business, Market Entry & Hospitality",
      description:
        "For employers, founders, hospitality operators, and SMEs in Germany and international markets.",
      slugs: ["restaurant-kitchen", "recruitment", "business-setup", "digital-ai"],
    },
    {
      id: "mobility-administration",
      label: "Mobility, Administration & Communication",
      description:
        "Structured organizational and communication support for arriving and operating smoothly in Germany.",
      slugs: ["relocation", "behoerdenservice", "translation-communication"],
    },
    {
      id: "family-health",
      label: "Family, Education & Medical Tourism Coordination",
      description:
        "Reliable coordination for families, students, and international patients with clear partner boundaries.",
      slugs: ["family-education", "medical-tourism"],
    },
  ],
  cardReadMore: "Explore Department",
  breadcrumbHome: "Home",
  breadcrumbServices: "Services",
  relatedHeading: "Complementary Departments",
  allServicesCta: "View All Nine Departments",
  legalBannerTitle: "Clear Legal Scope of Our Services",
  legalBannerBody:
    "KALKAN PARTNER provides organizational, communicative, and coordinating services. Wherever legal, tax, medical, architectural, or licensed activities are required, duly authorized independent specialists are engaged.",
};

export const servicesEn: Record<ServiceSlug, ServiceDetailContent> = {
  recruitment: {
    slug: "recruitment",
    inquiryTopic: "recruitment",
    icon: "users",
    seo: {
      title: "Recruitment & International Candidate Coordination | KALKAN PARTNER",
      description:
        "Structured candidate sourcing and recruitment process coordination connecting employers in Germany with qualified candidates from Türkiye and international markets.",
      keywords: [
        "Recruitment Germany Türkiye",
        "International candidate coordination Germany",
        "Hospitality and SME staffing coordination",
      ],
    },
    eyebrow: "Department 01 · Recruitment",
    title: "Recruitment & International Candidate Coordination",
    lead: "We connect employers in Germany with qualified candidates from Türkiye and international markets – managing CV structuring, interview scheduling, and onboarding coordination transparently.",
    audienceBadge: "For employers in Germany & international candidates",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Our Recruitment department helps employers in Germany bring structure to international hiring workflows, eliminating language gaps and scattered communication.",
        "We coordinate candidate sourcing, CV and document collection, pre-organization against the employer's profile, interview scheduling, and smooth onboarding communication.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "Candidate sourcing across Türkiye and international markets",
        "Collection and structured preparation of CVs and supporting documents",
        "Candidate pre-organization aligned with employer requirements",
        "Scheduling of online and in-person interviews",
        "Multilingual communication between employer and candidate",
        "Recruitment process and onboarding coordination",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "Designed for German businesses seeking direct hires and qualified candidates pursuing transparent international opportunities.",
      groups: [
        {
          title: "Employers in Germany",
          description:
            "SMEs, restaurants, hospitality groups, and service companies seeking direct permanent hires.",
        },
        {
          title: "Qualified Candidates Abroad",
          description:
            "Professionals from Türkiye and other countries who want well-structured documentation and clear employer interviews.",
        },
        {
          title: "New Site & Launch Teams",
          description:
            "Expanding businesses requiring coordinated recruitment timelines for new openings.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Cross-border hiring often stalls due to incomplete documents, language barriers, and uncoordinated follow-ups.",
      items: [
        {
          problem: "Incomplete or inconsistent candidate files",
          solution:
            "We collect and format CVs and credentials clearly so German employers can evaluate candidates efficiently.",
        },
        {
          problem: "Language barriers and misaligned expectations",
          solution:
            "We coordinate communication across German, Turkish, and English so expectations match early on.",
        },
        {
          problem: "Time lost in scheduling and back-and-forth emails",
          solution:
            "One dedicated coordinator manages interview slots, feedback loops, and pre-onboarding steps.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Four transparent stages from role briefing to onboarding coordination.",
      steps: [
        {
          number: "01",
          title: "Role & Profile Briefing",
          description:
            "Clarifying responsibilities, required qualifications, language levels, and target start dates.",
        },
        {
          number: "02",
          title: "Sourcing & Document Structuring",
          description:
            "Identifying matching candidates and organizing CVs and relevant records.",
        },
        {
          number: "03",
          title: "Interview Coordination",
          description:
            "Scheduling and facilitating structured interviews between employer and candidate.",
        },
        {
          number: "04",
          title: "Direct Contract & Onboarding Support",
          description:
            "Following direct agreement between employer and employee, we coordinate practical arrival and onboarding steps.",
        },
      ],
    },
    inquiry: {
      heading: "Request Staffing Support or Consultation",
      description:
        "Share your hiring need or candidate profile briefly and we will outline a realistic coordination plan.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Role(s) or field of expertise and city in Germany",
        "Required language proficiency and target timeline",
        "Company name and primary contact person (for employers)",
      ],
      primaryCtaLabel: "Start Recruitment Inquiry",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please do not send passport copies or sensitive ID documents in initial contact forms.",
    },
    legalBoundary: {
      heading: "Legal Scope & Transparency",
      points: [
        "Employment contracts are concluded exclusively and directly between employer and employee.",
        "KALKAN PARTNER explicitly does not engage in temporary agency work (Arbeitnehmerüberlassung).",
        "We do not promise or guarantee visas, work permits, or employment offers; official decisions rest solely with public authorities.",
        "German statutory rules governing job placement and candidate fee restrictions are strictly observed.",
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
        "Structured relocation coordination for professionals, individuals, and families moving to Germany – arrival planning, housing communication, school/kindergarten research, and utilities.",
      keywords: [
        "Relocation service Germany",
        "Moving to Germany coordination",
        "Family relocation support Germany",
      ],
    },
    eyebrow: "Department 02 · Relocation",
    title: "Relocation & Settlement Coordination in Germany",
    lead: "Moving to Germany involves dozens of interdependent tasks. We coordinate planning, communication, viewing appointments, and utility registrations in one clear sequence.",
    audienceBadge: "For professionals, individuals & families",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Our Relocation department supports individuals, international hires, and families before and after arriving in Germany so everyday settlement runs predictably.",
        "We create a structured relocation timeline, coordinate communication and viewing appointments during housing searches, research local schools and kindergartens, and organize moving and utility registrations.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "Personalized pre-arrival and arrival relocation planning",
        "Housing search communication and appointment scheduling coordination",
        "Local school and kindergarten research",
        "Moving logistics coordination",
        "Internet and electricity registration coordination",
        "Practical settlement orientation for the first weeks in Germany",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "Ideal for anyone starting a new job or family chapter in Germany who wants structured support.",
      groups: [
        {
          title: "International Professionals",
          description:
            "Newly hired specialists who want to settle smoothly while focusing on their new role.",
        },
        {
          title: "Relocating Families",
          description:
            "Households coordinating housing communication, school/kindergarten options, and utilities simultaneously.",
        },
        {
          title: "Employers Hiring Internationally",
          description:
            "Companies offering structured arrival support to incoming international team members.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "During the first weeks in Germany, language barriers, tight deadlines, and unfamiliar procedures collide.",
      items: [
        {
          problem: "Unclear sequence of registrations and tasks",
          solution:
            "We provide a clear step-by-step roadmap so critical milestones are handled in the right order.",
        },
        {
          problem: "Language barriers with landlords and utility providers",
          solution:
            "We prepare clear German correspondence and coordinate viewing appointments and follow-ups.",
        },
        {
          problem: "Scattered information on schools and childcare",
          solution:
            "We compile local options and registration steps tailored to your destination city.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "From pre-departure planning to settled daily routines.",
      steps: [
        {
          number: "01",
          title: "Needs & Destination Assessment",
          description:
            "Reviewing target city, move dates, household size, and top priorities.",
        },
        {
          number: "02",
          title: "Relocation Roadmap",
          description:
            "Structuring tasks, timelines, and required non-sensitive checklists.",
        },
        {
          number: "03",
          title: "Communication & Research",
          description:
            "Coordinating viewing schedules, school/kindergarten research, and utility registrations.",
        },
        {
          number: "04",
          title: "Arrival Follow-Through",
          description:
            "Supporting smooth completion of initial registrations and handovers.",
        },
      ],
    },
    inquiry: {
      heading: "Request a Relocation Consultation",
      description:
        "Tell us your destination city, target dates, and household setup for a tailored coordination plan.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Destination city/region in Germany and planned moving timeframe",
        "Individual, couple, or family (including school/kindergarten needs)",
        "Key priorities (planning, housing communication, utilities, family)",
      ],
      primaryCtaLabel: "Request Relocation Call",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please do not send ID copies, bank statements, or credit reports via initial contact forms.",
    },
    legalBoundary: {
      heading: "Legal Scope (§ 34c GewO)",
      points: [
        "KALKAN PARTNER does not act as a licensed real-estate broker and does not perform regulated real-estate brokerage under § 34c GewO.",
        "Our scope is strictly limited to relocation planning, communication support, and appointment coordination.",
        "Lease, moving, and utility contracts are concluded directly between the client and the respective provider.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "family-education", "recruitment"],
  },

  behoerdenservice: {
    slug: "behoerdenservice",
    inquiryTopic: "general",
    icon: "landmark",
    seo: {
      title: "Behördenservice & Administrative Coordination Germany | KALKAN PARTNER",
      description:
        "Appointment scheduling, document preparation, submission coordination, and administrative follow-ups in Germany – strictly without legal advice.",
      keywords: [
        "Behördenservice Germany",
        "Administrative coordination Germany",
        "Document preparation and appointment scheduling",
      ],
    },
    eyebrow: "Department 03 · Behördenservice",
    title: "Behördenservice & Administrative Coordination",
    lead: "Careful document organization, reliable appointment scheduling, and factual administrative communication within permissible boundaries.",
    audienceBadge: "For individuals & businesses in Germany",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Administrative procedures in Germany require complete, well-ordered files and punctual scheduling. Missing a single form or deadline often delays processes by weeks.",
        "Our Behördenservice relieves your organizational burden by structuring document checklists, scheduling appointments, coordinating submissions, and handling factual status inquiries under valid authorization where accepted.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "Appointment scheduling and deadline tracking",
        "Document preparation and completeness organization",
        "Timely submission coordination",
        "Administrative communication under valid authorization where accepted by the authority",
        "Permissible file-status inquiries and follow-up tracking",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For individuals and businesses seeking orderly, stress-free administrative preparation.",
      groups: [
        {
          title: "Newcomers & Families in Germany",
          description:
            "Structured preparation for standard public appointments and document folders.",
        },
        {
          title: "Busy Professionals",
          description:
            "Clients who want clear tracking of deadlines, letters, and appointments.",
        },
        {
          title: "Founders & Businesses",
          description:
            "Administrative coordination alongside qualified lawyers and tax advisers.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Many delays stem from incomplete paperwork rather than substantive issues.",
      items: [
        {
          problem: "Arriving at appointments with incomplete paperwork",
          solution:
            "We organize required documents cleanly in advance using clear checklists.",
        },
        {
          problem: "Missed deadlines or unclear administrative letters",
          solution:
            "We track timelines and coordinate factual organizational responses.",
        },
        {
          problem: "Multiple parallel administrative steps",
          solution:
            "All appointments, submissions, and follow-ups are tracked in one structured overview.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Structured in four clear steps with strict legal boundaries.",
      steps: [
        {
          number: "01",
          title: "Scope Verification",
          description:
            "Confirming which organizational steps apply and whether a licensed lawyer is required.",
        },
        {
          number: "02",
          title: "Document Structuring",
          description:
            "Organizing all required forms and records in review-ready order.",
        },
        {
          number: "03",
          title: "Scheduling & Submission",
          description:
            "Coordinating appointments and orderly document submission.",
        },
        {
          number: "04",
          title: "Status Follow-Up",
          description:
            "Handling permissible file-status inquiries and transparent progress updates.",
        },
      ],
    },
    inquiry: {
      heading: "Request Administrative Coordination",
      description:
        "Briefly describe the administrative procedure and timeframe so we can outline organizational support.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "General type of administrative procedure and city/region",
        "Upcoming deadlines or already scheduled appointments",
        "Whether legal counsel is already involved",
      ],
      primaryCtaLabel: "Request Behördenservice",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please do not transmit ID copies, registration certificates, or official notices via initial forms.",
    },
    legalBoundary: {
      heading: "Important Notice Under the German Legal Services Act (RDG)",
      points: [
        "KALKAN PARTNER explicitly does not provide legal advice, legal representation, or immigration-law assessments under the German RDG.",
        "Administrative communication takes place solely within permissible organizational limits and under valid authorization only where accepted by the respective authority.",
        "For legal questions, appeals, or contentious proceedings, we refer clients strictly to licensed attorneys.",
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
        "German–Turkish–English business communication, document translation coordination, and certified translator coordination when required.",
      keywords: [
        "German Turkish English business communication",
        "Translation coordination Germany",
        "Sworn translator coordination",
      ],
    },
    eyebrow: "Department 04 · Translation & Communication",
    title: "Translation & Communication (DE · TR · EN)",
    lead: "Clear, culturally accurate communication across German, Turkish, and English – from executive correspondence to sworn translator coordination.",
    audienceBadge: "For corporate & private communication (DE · TR · EN)",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Effective cross-border communication requires appropriate business tone, accurate terminology, and cultural precision – far beyond raw machine translation.",
        "We support German–Turkish and English business correspondence, coordinate general document translations, structure CVs and company profiles, and engage duly sworn translators whenever official certification is required.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "German–Turkish and English business correspondence and meeting preparation",
        "General document translation coordination",
        "Structuring and editing of CVs and corporate profiles",
        "Coordination with sworn/certified translators where officially required",
        "Ongoing international communication support with partners and suppliers",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For businesses and individuals operating across German, Turkish, and international environments.",
      groups: [
        {
          title: "Companies Trading Between DE & TR",
          description:
            "Businesses needing clear proposals, supplier alignment, and professional correspondence.",
        },
        {
          title: "Professionals & Private Clients",
          description:
            "Candidates and families organizing CVs, cover letters, or certified document translations.",
        },
        {
          title: "Multilingual Project Teams",
          description:
            "Cross-border initiatives requiring consistent communication across DE, TR, and EN.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Literal machine translations undermine credibility and create costly misunderstandings.",
      items: [
        {
          problem: "Unnatural or ambiguous business correspondence",
          solution:
            "We craft clear, market-appropriate correspondence in German, Turkish, and English.",
        },
        {
          problem: "Uncertainty about when certified translation is required",
          solution:
            "We clarify official requirements upfront and coordinate duly sworn translators whenever needed.",
        },
        {
          problem: "Slowdowns between international partners",
          solution:
            "Structured trilingual communication keeps decisions and follow-ups aligned.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Fast scoping, appropriate specialist matching, and reliable delivery.",
      steps: [
        {
          number: "01",
          title: "Language & Purpose Review",
          description:
            "Clarifying language pair, document type, and whether official certification is required.",
        },
        {
          number: "02",
          title: "Scope & Timeline Alignment",
          description:
            "Confirming turnaround time and sworn translator involvement if needed.",
        },
        {
          number: "03",
          title: "Execution & Quality Check",
          description:
            "Drafting correspondence or coordinating specialist translation with consistent terminology.",
        },
        {
          number: "04",
          title: "Delivery & Follow-Up",
          description:
            "Delivering finalized texts and supporting follow-up communication if desired.",
        },
      ],
    },
    inquiry: {
      heading: "Request Translation or Communication Support",
      description:
        "Share the language pair, document type, and target timeline for a clear coordination proposal.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Language pair (DE ↔ TR, DE ↔ EN, or TR ↔ EN)",
        "Type of text or document (business, CV, or official certificate)",
        "Target delivery timeframe",
      ],
      primaryCtaLabel: "Request Language Support",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please share confidential originals only after agreeing on a secure transmission channel.",
    },
    legalBoundary: {
      heading: "Transparency on Certified Translations",
      points: [
        "Not every translation is an officially certified translation.",
        "Officially certified translations required by public authorities are prepared exclusively by duly sworn and authorized translators coordinated through our network.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "business-setup", "recruitment"],
  },

  "business-setup": {
    slug: "business-setup",
    inquiryTopic: "business",
    icon: "briefcase",
    seo: {
      title: "Business Setup & German Market Entry Coordination | KALKAN PARTNER",
      description:
        "Structured support for entering the German market – market research, supplier and partner search, company formation coordination, and scheduling with notaries, lawyers, and tax advisers.",
      keywords: [
        "Business setup Germany coordination",
        "German market entry from Türkiye",
        "Supplier and partner search Germany",
      ],
    },
    eyebrow: "Department 05 · Business Setup",
    title: "Business Setup & German Market Entry Coordination",
    lead: "We support international entrepreneurs entering the German market with structured research, partner connections, and coordinated appointments with licensed legal and tax professionals.",
    audienceBadge: "For international entrepreneurs, founders & companies",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Entering the German market successfully requires sound market intelligence, reliable local partners, and well-prepared coordination with notaries, lawyers, and tax advisers.",
        "KALKAN PARTNER acts as your on-the-ground project coordinator – preparing commercial research and orchestrating administrative steps across all stakeholders.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "Market and competitor research for Germany",
        "Business partner and distributor search",
        "Supplier research and quotation coordination",
        "Company formation process organization",
        "Appointment coordination with notaries, lawyers, and tax advisers",
        "International business networking and administrative project tracking",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For decision-makers approaching the German market methodically rather than through trial and error.",
      groups: [
        {
          title: "Turkish & International Companies",
          description:
            "Established businesses launching a German subsidiary, branch, or commercial presence.",
        },
        {
          title: "Founders in Germany",
          description:
            "Entrepreneurs needing structured project coordination, supplier networks, and advisor interfaces.",
        },
        {
          title: "Cross-Border Trade Ventures",
          description:
            "Companies seeking vetted commercial partners and suppliers across Germany and Türkiye.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Cross-border formations lose months when local contacts and advisor preparations are fragmented.",
      items: [
        {
          problem: "Unclear sequence of formation steps in Germany",
          solution:
            "We map out organizational stages and prepare structured meetings with notaries, lawyers, and tax advisers.",
        },
        {
          problem: "Difficulty finding trustworthy local suppliers and partners",
          solution:
            "We conduct targeted research and coordinate initial commercial introductions.",
        },
        {
          problem: "Communication gaps between headquarters and German stakeholders",
          solution:
            "One trilingual coordinator keeps milestones, documents, and action items aligned.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Four structured phases from market scoping to operational launch.",
      steps: [
        {
          number: "01",
          title: "Business Model & Objective Review",
          description:
            "Clarifying sector, target region, timeline, and organizational priorities.",
        },
        {
          number: "02",
          title: "Market, Partner & Supplier Research",
          description:
            "Compiling practical market insights and shortlisted partner contacts.",
        },
        {
          number: "03",
          title: "Licensed Advisor Coordination",
          description:
            "Scheduling and preparing meetings with independent notaries, lawyers, and tax advisers.",
        },
        {
          number: "04",
          title: "Administrative Project Tracking",
          description:
            "Coordinating milestones through to operational readiness.",
        },
      ],
    },
    inquiry: {
      heading: "Discuss Your German Market Entry",
      description:
        "Share your industry and expansion plan to define the right coordination scope.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Industry, business model, and preferred region in Germany",
        "Current stage (concept, existing company abroad, expansion)",
        "Key priorities (research, partner search, formation coordination)",
      ],
      primaryCtaLabel: "Start Business Setup Inquiry",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please do not attach confidential corporate deeds or ID copies in initial forms.",
    },
    legalBoundary: {
      heading: "Boundary With Regulated Professions",
      points: [
        "KALKAN PARTNER provides organizational project coordination as well as market, supplier, and partner research.",
        "Legal advice, corporate drafting, tax advisory, and notarial certifications are performed exclusively by duly licensed lawyers, tax advisers, and notaries.",
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
        "Transparent communication, interpreter, and travel coordination connecting international patients with authorized healthcare providers in Türkiye.",
      keywords: [
        "Medical tourism coordination Türkiye",
        "International patient communication Türkiye",
        "Authorized hospital travel coordination",
      ],
    },
    eyebrow: "Department 06 · Medical Tourism Coordination",
    title: "Medical Tourism Coordination",
    lead: "We connect international patients with authorized hospitals and licensed medical tourism intermediaries in Türkiye – coordinating communication, translation, and travel logistics transparently.",
    audienceBadge: "For international patients & companions",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "International patients exploring healthcare options in Türkiye need reliable contact with authorized institutions, clear multilingual communication, and well-organized travel logistics.",
        "KALKAN PARTNER handles strictly organizational and communicative coordination – completely separate from medical evaluation or treatment.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "Communication with authorized hospitals and licensed medical tourism intermediaries in Türkiye",
        "Patient communication and organizational follow-up coordination",
        "Translation and interpretation coordination",
        "Quotation and general information requests to authorized providers",
        "Travel, transfer, and accommodation coordination",
        "Post-visit follow-up communication and complaint forwarding",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For international patients valuing calm, transparent organization over exaggerated marketing promises.",
      groups: [
        {
          title: "Patients from Germany & Europe",
          description:
            "Individuals seeking structured communication with authorized hospitals in Türkiye.",
        },
        {
          title: "Accompanying Family Members",
          description:
            "Relatives who want travel, accommodation, and interpreter logistics organized reliably.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Cross-border patient journeys often suffer from language gaps and fragmented travel planning.",
      items: [
        {
          problem: "Difficulty identifying authorized institutions",
          solution:
            "We connect patients exclusively with authorized hospitals and licensed medical tourism entities in Türkiye.",
        },
        {
          problem: "Language barriers in administrative communication",
          solution:
            "We coordinate clear communication and professional interpreter support.",
        },
        {
          problem: "Uncoordinated travel and appointment schedules",
          solution:
            "Flights, transfers, accommodation, and clinic appointments are aligned cleanly.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Strict separation between organizational logistics and medical care.",
      steps: [
        {
          number: "01",
          title: "Organizational Briefing",
          description:
            "Clarifying general information needs, preferred language, and approximate travel window.",
        },
        {
          number: "02",
          title: "Connection With Authorized Providers",
          description:
            "Forwarding general inquiries to authorized hospitals or licensed intermediaries in Türkiye.",
        },
        {
          number: "03",
          title: "Direct Medical Assessment by Physicians",
          description:
            "All medical questions, diagnoses, and treatment plans are handled directly between patient and licensed medical staff.",
        },
        {
          number: "04",
          title: "Travel, Interpreter & Follow-Up Coordination",
          description:
            "Organizing travel, accommodation, language support, and post-trip communication.",
        },
      ],
    },
    inquiry: {
      heading: "Request Coordination Consultation",
      description:
        "Share your general organizational request and preferred language. Medical records are never collected via our website.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "General area of interest and preferred city in Türkiye",
        "Preferred communication language (DE / TR / EN)",
        "Approximate travel timeframe",
      ],
      primaryCtaLabel: "Request Coordination",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "IMPORTANT: Never submit medical records, diagnoses, X-rays, health data, or passport copies via website contact forms.",
    },
    legalBoundary: {
      heading: "Medical & Legal Boundary",
      points: [
        "KALKAN PARTNER does not diagnose, prescribe, perform medical treatment, or guarantee medical outcomes.",
        "We never publish unverified medical claims or treatment success rates.",
        "Coordination is conducted exclusively in accordance with Turkish health tourism authorization requirements with duly authorized providers.",
      ],
    },
    relatedSlugs: ["translation-communication", "relocation", "family-education"],
  },

  "digital-ai": {
    slug: "digital-ai",
    inquiryTopic: "business",
    icon: "cpu",
    seo: {
      title: "Digital & AI Solutions Germany | Websites, SEO, GEO & Automation",
      description:
        "Corporate website design and development, SEO, Local SEO, GEO AI search visibility, chatbots, and process automation for businesses in Germany.",
      keywords: [
        "Digital and AI solutions Germany",
        "Corporate website SEO Local SEO",
        "GEO AI search visibility",
        "AI chatbots and business automation",
      ],
    },
    eyebrow: "Department 07 · Digital & AI Solutions",
    title: "Digital & AI Solutions for Measurable Business Growth",
    lead: "We build high-trust multilingual corporate websites, strengthen visibility across Google and AI search (GEO), and automate repetitive workflows practically.",
    audienceBadge: "For SMEs, service providers, hospitality & international brands",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Clients evaluate digital credibility before making first contact. Outdated websites, weak local search presence, and manual inquiry handling cost qualified business every day.",
        "Our Digital & AI Solutions department combines premium web engineering, multilingual SEO & Local SEO, Generative Engine Optimization (GEO), digital brand identity, and practical AI automation.",
      ],
      scopeTitle: "Concrete Service Modules",
      scopeItems: [
        "Multilingual corporate website design and development",
        "Search engine optimization (SEO) across German, Turkish, and English markets",
        "Local SEO and Google Business Profile structure preparation",
        "GEO (Generative Engine Optimization) for AI search visibility",
        "Social media management, digital content creation, and brand identity",
        "AI implementation, team training, chatbots, and business process automation",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For companies turning digital presence into reliable lead generation and operational efficiency.",
      groups: [
        {
          title: "SMEs & Service Firms",
          description:
            "Businesses seeking stronger regional visibility and conversion-focused corporate websites.",
        },
        {
          title: "Hospitality & New Openings",
          description:
            "Restaurants launching with strong local search visibility and clear brand presentation.",
        },
        {
          title: "Growing Cross-Border Teams",
          description:
            "Organizations automating routine inquiries and internal workflows with practical AI tools.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Digital investments fail when aesthetics are disconnected from search visibility and conversion.",
      items: [
        {
          problem: "Websites that fail to convert visitors into inquiries",
          solution:
            "We structure architecture, copy, and inquiry flows around clarity and trust.",
        },
        {
          problem: "Low visibility on Google and AI answer engines",
          solution:
            "Clean technical SEO, Local SEO signals, and structured GEO content improve discoverability.",
        },
        {
          problem: "Manual bottlenecks in routine communication",
          solution:
            "Lean AI chatbots and workflow automations save hours without bloated software.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Modular, fast, and aligned with privacy standards.",
      steps: [
        {
          number: "01",
          title: "Audit & Goal Definition",
          description:
            "Reviewing current digital presence, search opportunity, and automation potential.",
        },
        {
          number: "02",
          title: "Architecture, Design & SEO Plan",
          description:
            "Defining page structure, visual identity, and multilingual keyword targeting.",
        },
        {
          number: "03",
          title: "Development & AI Integration",
          description:
            "Building fast, responsive websites, content systems, and GDPR-conscious automations.",
        },
        {
          number: "04",
          title: "Launch, Training & Iteration",
          description:
            "Team handover, training, and optional ongoing SEO/AI optimization.",
        },
      ],
    },
    inquiry: {
      heading: "Discuss Your Digital or AI Project",
      description:
        "Whether launching a new corporate website, improving Local SEO, or automating workflows, let's map out a pragmatic solution.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Current website URL (if available) and target markets",
        "Primary focus (website, SEO/Local SEO, GEO, AI/automation)",
        "Target launch timeframe",
      ],
      primaryCtaLabel: "Start Digital Project Inquiry",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please do not share server credentials or API keys in initial contact forms.",
    },
    legalBoundary: {
      heading: "Data Protection & Technical Scope",
      points: [
        "All web, analytics, and AI architectures are designed with GDPR (DSGVO) data-minimization principles.",
        "Legal review of imprints, privacy policies, and sector-specific disclosures remains with qualified legal counsel.",
      ],
    },
    relatedSlugs: ["business-setup", "restaurant-kitchen", "translation-communication"],
  },

  "family-education": {
    slug: "family-education",
    inquiryTopic: "general",
    icon: "graduationCap",
    seo: {
      title: "Family & Education Coordination Germany | KALKAN PARTNER",
      description:
        "School and kindergarten research, course information, student application coordination, and family settlement support in Germany.",
      keywords: [
        "School and kindergarten research Germany",
        "Student application coordination Germany",
        "Family relocation and education support",
      ],
    },
    eyebrow: "Department 08 · Family & Education",
    title: "Family & Education – Guidance for Families & Students",
    lead: "Structured educational research, application document coordination, and family settlement support across Germany.",
    audienceBadge: "For families, pupils & international students",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Education and childcare rules in Germany vary significantly across federal states and municipalities. Deadlines, school tracks, and enrollment portals can be complex for newcomers.",
        "Our Family & Education department provides clear local research, structured application checklists, and German communication support.",
      ],
      scopeTitle: "Concrete Coordination Deliverables",
      scopeItems: [
        "Regional school research across primary and secondary tracks",
        "Kindergarten (Kita) research and registration process overview",
        "Information on language courses and continuing education programs",
        "Student application document and timeline coordination",
        "Integrated family relocation coordination",
        "Accommodation communication support for students and families",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For parents and prospective students preparing educational transitions in Germany.",
      groups: [
        {
          title: "Relocating Families With Children",
          description:
            "Parents seeking timely orientation on kindergartens and schools in their destination city.",
        },
        {
          title: "International Prospective Students",
          description:
            "Applicants organizing admission timelines, required records, and language course steps.",
        },
        {
          title: "Language & Vocational Learners",
          description:
            "Individuals comparing accredited course providers and enrollment schedules.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "Missing a single enrollment deadline can delay schooling or studies by an entire semester.",
      items: [
        {
          problem: "Complex municipal rules for schools and kindergartens",
          solution:
            "We research local options, portals, and registration timelines for your specific municipality.",
        },
        {
          problem: "Incomplete student or course application files",
          solution:
            "Clear checklists keep required documents and translations organized ahead of deadlines.",
        },
        {
          problem: "Language barriers with educational institutions",
          solution:
            "We assist with clear German correspondence and appointment scheduling.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Four structured steps aligned with academic timelines.",
      steps: [
        {
          number: "01",
          title: "Educational Goal & City Review",
          description:
            "Clarifying age, educational stage, destination city, and target intake.",
        },
        {
          number: "02",
          title: "Institution & Deadline Research",
          description:
            "Presenting suitable school, childcare, course, or university pathways.",
        },
        {
          number: "03",
          title: "File & Correspondence Preparation",
          description:
            "Organizing application checklists and institutional communication.",
        },
        {
          number: "04",
          title: "Ongoing Coordination",
          description:
            "Tracking appointments, responses, and family settlement steps.",
        },
      ],
    },
    inquiry: {
      heading: "Request Family & Education Support",
      description:
        "Share your destination city and educational needs for a structured initial consultation.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Destination city/state in Germany and target timeframe",
        "Type of need (kindergarten, school, language course, university)",
        "Current language level and general educational stage",
      ],
      primaryCtaLabel: "Start Education Inquiry",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Please do not send original diplomas, birth certificates, or ID copies via initial forms.",
    },
    legalBoundary: {
      heading: "Scope Notice",
      points: [
        "KALKAN PARTNER provides organizational research and application coordination.",
        "Admission, placement, and credential recognition decisions rest exclusively with the respective educational institutions and authorities.",
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
      title: "Restaurant & Kitchen Solutions Germany | Commercial Kitchen & Hospitality Consulting",
      description:
        "End-to-end operational restaurant and commercial kitchen consulting in Germany: concept, opening coordination, kitchen layout, equipment selection, menu, recipes, food cost, SOPs, and staff workflows.",
      keywords: [
        "Restaurant consulting Germany",
        "Commercial kitchen layout planning",
        "Menu recipe standardization and food cost",
        "Restaurant opening support and SOPs Germany",
      ],
    },
    eyebrow: "Department 09 · Flagship Differentiator",
    title: "Restaurant & Kitchen Solutions",
    lead: "From initial concept to disciplined daily service: hands-on operational culinary expertise for ergonomic kitchen workflows, controlled food cost, and repeatable quality.",
    audienceBadge: "For hospitality founders, investors & existing restaurants",
    whatIs: {
      heading: "What is this service?",
      paragraphs: [
        "Restaurant & Kitchen Solutions is one of KALKAN PARTNER's core differentiators. Grounded in real commercial kitchen leadership, we build practical operational systems that perform under peak-hour pressure.",
        "We guide founders and operators across concept development, functional zoning of hot kitchen, cold prep, dishwashing, and storage, equipment and supplier selection, menu engineering, gram-precise recipe standardization, food cost control, SOP manuals, and dining-room service workflows.",
      ],
      scopeTitle: "Comprehensive Operational & Organizational Scope",
      scopeItems: [
        "Restaurant concept development and operational positioning",
        "End-to-end restaurant opening coordination",
        "Kitchen layout planning and ergonomic workflow organization",
        "Hot kitchen, cold kitchen, pass, dishwashing, and storage area organization",
        "Commercial equipment research, selection, and quotation comparison",
        "Supplier and equipment installation coordination",
        "Menu development, recipe cards, and portion weight standardization",
        "Detailed food cost and gross-margin calculations",
        "Standard Operating Procedures (SOP) documentation",
        "Kitchen staff station organization and dining-room service workflow planning",
        "Pre-opening test runs and hands-on opening support",
      ],
    },
    targetAudience: {
      heading: "Who is it for?",
      intro:
        "For founders protecting capital before launch and existing operators improving consistency and margins.",
      groups: [
        {
          title: "New Restaurant Founders",
          description:
            "Entrepreneurs avoiding costly equipment mistakes, bottlenecked kitchen layouts, and uncalculated menus.",
        },
        {
          title: "Existing Restaurants & Cafés",
          description:
            " venues facing high food cost, inconsistent plate quality, or disorganized station workflows.",
        },
        {
          title: "Investors & Multi-Site Concepts",
          description:
            "Operators building repeatable recipes, portion standards, and SOP manuals across locations.",
        },
      ],
    },
    problemsSolved: {
      heading: "What challenges do we solve?",
      intro:
        "The costliest hospitality mistakes happen either in poor pre-opening kitchen layout or unstandardized daily production.",
      items: [
        {
          problem: "Inefficient kitchen traffic and mismatched equipment",
          solution:
            "We align hot, cold, dishwashing, and storage zones strictly with actual menu production flow.",
        },
        {
          problem: "Inconsistent taste and uncontrolled food cost",
          solution:
            "Gram-accurate standardized recipes and transparent food cost sheets protect both quality and margin.",
        },
        {
          problem: "Opening-week chaos and unclear staff responsibilities",
          solution:
            "Clear SOP documentation, station checklists, and pass-to-table workflows create calm execution.",
        },
      ],
    },
    process: {
      heading: "How does the process work?",
      intro: "Five clear stages from concept briefing to opening service.",
      steps: [
        {
          number: "01",
          title: "Concept, Space & Capacity Review",
          description:
            "Evaluating culinary concept, seating capacity, menu direction, and spatial constraints.",
        },
        {
          number: "02",
          title: "Kitchen Workflow & Equipment Spec",
          description:
            "Functional station zoning, equipment schedules, and supplier comparisons.",
        },
        {
          number: "03",
          title: "Menu, Recipes & Food Cost Architecture",
          description:
            "Developing menu structure, standardized recipe cards, portion weights, and cost sheets.",
        },
        {
          number: "04",
          title: "SOPs, Staff Roles & Installation Coordination",
          description:
            "Documenting SOPs, kitchen/service duties, and coordinating supplier deliveries.",
        },
        {
          number: "05",
          title: "Pre-Opening & Launch Support",
          description:
            "Test services, workflow fine-tuning, and operational support during launch.",
        },
      ],
    },
    inquiry: {
      heading: "Discuss Your Hospitality Project",
      description:
        "Whether planning a new restaurant or optimizing an existing kitchen, share your concept and timeline for a focused consultation.",
      prepChecklistTitle: "Helpful Details for Initial Consultation",
      prepChecklist: [
        "Concept type (restaurant, café, quick-service, production kitchen)",
        "City, approximate floor area / seating capacity, and project stage",
        "Key focus areas (full launch, kitchen workflow, menu/food cost, SOPs)",
      ],
      primaryCtaLabel: "Request Restaurant Proposal",
      secondaryCtaLabel: "View All Departments",
      sensitiveDataReminder:
        "Detailed lease agreements or engineering blueprints can be shared after our initial call.",
    },
    legalBoundary: {
      heading: "Engineering & Regulatory Scope Boundary",
      points: [
        "Our services cover operational hospitality consulting, kitchen workflow organization, menu costing, SOPs, and opening coordination.",
        "Regulated architectural, structural, electrical, gas, fire-safety, and ventilation engineering plans are handled exclusively by appropriately qualified and licensed architects, engineers, and specialist contractors where required.",
      ],
    },
    relatedSlugs: ["business-setup", "recruitment", "digital-ai"],
  },
};
