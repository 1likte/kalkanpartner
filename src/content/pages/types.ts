import type { InquiryTopic } from "../types";

export interface InsightArticle {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  seoDescription: string;
  relatedServiceSlug: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  takeaway: string;
}

export interface CorporatePagesContent {
  about: {
    seo: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    identityHeading: string;
    identityParagraphs: string[];
    visionHeading: string;
    visionText: string;
    philosophyHeading: string;
    philosophyItems: { title: string; description: string }[];
    partnerModelHeading: string;
    partnerModelText: string;
    partnerTypes: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  network: {
    seo: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    regions: {
      name: string;
      tag: string;
      focus: string;
      points: string[];
    }[];
    partnerCategoriesHeading: string;
    partnerCategoriesIntro: string;
    partnerCategories: {
      title: string;
      role: string;
      boundary: string;
    }[];
    ctaTitle: string;
    ctaButton: string;
  };
  howWeWork: {
    seo: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    steps: {
      number: string;
      title: string;
      summary: string;
      deliverables: string[];
    }[];
    standardsHeading: string;
    standards: { title: string; description: string }[];
    ctaTitle: string;
    ctaButton: string;
  };
  faq: {
    seo: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    categories: {
      title: string;
      items: { question: string; answer: string }[];
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  insights: {
    seo: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    readArticleLabel: string;
    backToInsightsLabel: string;
    relatedServiceLabel: string;
    articles: InsightArticle[];
  };
  contact: {
    seo: { title: string; description: string };
    eyebrow: string;
    title: string;
    lead: string;
    pathsHeading: string;
    paths: {
      topic: InquiryTopic;
      label: string;
      audience: string;
      description: string;
      defaultDepartment: string;
    }[];
    form: {
      customerTypeLabel: string;
      individualLabel: string;
      businessLabel: string;
      departmentLabel: string;
      departments: { value: string; label: string }[];
      countryLabel: string;
      countryPlaceholder: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      privacyConsent: string;
      submitLabel: string;
      submittingLabel: string;
      sensitiveDataTitle: string;
      sensitiveDataBody: string;
      successTitle: string;
      successBody: string;
      notConfiguredTitle: string;
      notConfiguredBody: string;
      errorTitle: string;
      validationError: string;
    };
    sidebar: {
      title: string;
      items: string[];
      legalNoticeTitle: string;
      legalNoticeBody: string;
    };
  };
}
