/**
 * Central site configuration and legal metadata.
 * IMPORTANT: Unverified legal fields (Rechtsform, Handelsregister, USt-IdNr./W-IdNr.)
 * remain explicitly marked as TODO until legally finalized and verified.
 */
export const siteConfig = {
  brandName: "KALKAN PARTNER",
  descriptor: "International Business & Service Solutions",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://kalkanpartner.de",
  domain: "kalkanpartner.de",
  baseCountry: "Germany",
  markets: ["Germany", "Türkiye", "International"],
  legal: {
    owner: "Semra Kalkan",
    companyLegalName: "[Rechtsform – nach Festlegung ergänzen]",
    streetAddress: "Hauptstraße 192",
    postalCodeCity: "79739 Schwörstadt",
    country: "Deutschland",
    email: "kontakt@kalkanpartner.de",
    phone: "+49 152 04481954",
    phoneHref: "+4915204481954",
    whatsappUrl: "https://wa.me/4915204481954",
    telegramUrl:
      process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/+4915204481954",
    commercialRegister:
      "TODO: Handelsregister & Registernummer (nur falls Eintragung besteht)",
    vatId:
      "TODO: USt-IdNr. / W-IdNr. (erst nach Prüfung des BZSt-Bescheids ergänzen)",
    supervisoryAuthority:
      "TODO: Zuständige Aufsichtsbehörde (nur falls für einzelne Tätigkeiten erforderlich)",
  },
  // Prepared for future Local SEO & Google Business Profile integration
  localSeo: {
    googleBusinessProfileUrl: null as string | null,
    verifiedAddressAvailable: true,
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
