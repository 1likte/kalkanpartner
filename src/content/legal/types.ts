export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocumentContent {
  seoTitle: string;
  seoDescription: string;
  badge: string;
  title: string;
  subtitle: string;
  warningTitle: string;
  warningBody: string;
  showContactBlock?: boolean;
  sections: LegalSection[];
}

export interface LocaleLegalDictionary {
  imprint: LegalDocumentContent;
  privacy: LegalDocumentContent;
  terms: LegalDocumentContent;
  labels: {
    ownerPrefix: string;
    phoneWhatsappLabel: string;
    emailLabel: string;
    websiteLabel: string;
    pendingRegistryTitle: string;
    backToContact: string;
    toPrivacy: string;
    toImprint: string;
    toTerms: string;
  };
}
