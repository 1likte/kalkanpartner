/**
 * Central site configuration and verified legal metadata.
 * IMPORTANT: Never fabricate registration numbers, addresses, emails, phone numbers,
 * or licenses. Keep unverified items explicitly marked as TODO until supplied.
 */
export const siteConfig = {
  brandName: "KALKAN PARTNER",
  descriptor: "International Business & Service Solutions",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  baseCountry: "Germany",
  markets: ["Germany", "Türkiye", "International"],
  legal: {
    companyLegalName: "TODO: Vollständiger Firmenname / Rechtsform eintragen",
    managingDirector: "TODO: Vertretungsberechtigte Person eintragen",
    streetAddress: "TODO: Geschäftsadresse (Straße, Hausnummer)",
    postalCodeCity: "TODO: PLZ & Ort, Deutschland",
    email: "TODO: Geschäftliche E-Mail-Adresse",
    phone: "TODO: Geschäftliche Telefonnummer",
    commercialRegister: "TODO: Handelsregister & Registernummer (falls zutreffend)",
    vatId: "TODO: USt-IdNr. gemäß § 27a UStG (falls zutreffend)",
    supervisoryAuthority: "TODO: Zuständige Aufsichtsbehörde (falls erforderlich)",
  },
  // Prepared for future Local SEO & Google Business Profile integration
  localSeo: {
    googleBusinessProfileUrl: null as string | null,
    verifiedAddressAvailable: false,
    openingHours: null as string | null,
  },
  // Prepared for future scalability (CRM, booking calendar, analytics)
  integrations: {
    crmWebhookConfigured: Boolean(process.env.CRM_WEBHOOK_URL),
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null,
    emailServiceConfigured: Boolean(
      process.env.RESEND_API_KEY || process.env.SMTP_HOST
    ),
  },
} as const;
