export type DepartmentIconKey =
  | "users"
  | "home"
  | "landmark"
  | "languages"
  | "briefcase"
  | "heartPulse"
  | "cpu"
  | "graduationCap"
  | "utensilsCrossed";

export type InquiryTopic =
  | "recruitment"
  | "business"
  | "medical-tourism"
  | "restaurant"
  | "general";

export interface DepartmentCardContent {
  slug: string;
  inquiryTopic: InquiryTopic;
  icon: DepartmentIconKey;
  title: string;
  audience: string;
  summary: string;
  highlights: string[];
  ctaLabel: string;
  legalNote: string;
  featured?: boolean;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    services: string;
    restaurant: string;
    network: string;
    howWeWork: string;
    whyUs: string;
    contact: string;
    primaryCta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    slogan: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: {
      label: string;
      value: string;
    }[];
    complianceBadge: string;
  };
  departmentsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    departments: DepartmentCardContent[];
  };
  whySection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  internationalSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    corridors: {
      region: string;
      role: string;
      description: string;
    }[];
    partnerNote: string;
  };
  restaurantSpotlight: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    capabilities: {
      title: string;
      detail: string;
    }[];
    ctaLabel: string;
    legalDisclaimer: string;
    imageAlt: string;
  };
  contactCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pathsTitle: string;
    paths: {
      topic: InquiryTopic;
      label: string;
      audience: string;
      description: string;
    }[];
    noticeTitle: string;
    noticeBody: string;
    sensitiveDataNote: string;
  };
  footer: {
    tagline: string;
    coordinationNotice: string;
    columns: {
      servicesTitle: string;
      companyTitle: string;
      legalTitle: string;
    };
    companyLinks: {
      label: string;
      href: string;
    }[];
    legalLinks: {
      label: string;
      href: string;
      todoBadge: string;
    }[];
    futureLanguageNote: string;
    copyright: string;
  };
}
