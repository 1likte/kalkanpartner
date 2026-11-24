import type { DepartmentIconKey, InquiryTopic } from "../types";

export const SERVICE_SLUGS = [
  "recruitment",
  "relocation",
  "behoerdenservice",
  "translation-communication",
  "business-setup",
  "medical-tourism",
  "digital-ai",
  "family-education",
  "restaurant-kitchen",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isValidServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export interface ServiceDetailContent {
  slug: ServiceSlug;
  inquiryTopic: InquiryTopic;
  icon: DepartmentIconKey;
  featured?: boolean;
  heroImage?: {
    src: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  eyebrow: string;
  title: string;
  lead: string;
  audienceBadge: string;
  // 1. Hizmet nedir? / Was ist dieser Service?
  whatIs: {
    heading: string;
    paragraphs: string[];
    scopeTitle: string;
    scopeItems: string[];
  };
  // 2. Kime hitap ediyor? / Für wen ist dieser Service gedacht?
  targetAudience: {
    heading: string;
    intro: string;
    groups: {
      title: string;
      description: string;
    }[];
  };
  // 3. Hangi sorunları çözüyor? / Welche Herausforderungen lösen wir?
  problemsSolved: {
    heading: string;
    intro: string;
    items: {
      problem: string;
      solution: string;
    }[];
  };
  // 4. Süreç nasıl işliyor? / Wie läuft der Prozess ab?
  process: {
    heading: string;
    intro: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  // 5. Teklif veya görüşme talebi / Anfrage & Erstgespräch
  inquiry: {
    heading: string;
    description: string;
    prepChecklistTitle: string;
    prepChecklist: string[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    sensitiveDataReminder: string;
  };
  legalBoundary: {
    heading: string;
    points: string[];
  };
  relatedSlugs: ServiceSlug[];
}

export interface ServicesOverviewContent {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  eyebrow: string;
  title: string;
  subtitle: string;
  categories: {
    id: string;
    label: string;
    description: string;
    slugs: ServiceSlug[];
  }[];
  cardReadMore: string;
  breadcrumbHome: string;
  breadcrumbServices: string;
  relatedHeading: string;
  allServicesCta: string;
  legalBannerTitle: string;
  legalBannerBody: string;
}
