/**
 * Central site configuration and verified statutory metadata for
 * Semra Kalkan – KALKAN PARTNER (Einzelunternehmen, Schwörstadt, Germany).
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
    companyLegalName: "Semra Kalkan – KALKAN PARTNER",
    streetAddress: "Hauptstraße 192",
    postalCodeCity: "79739 Schwörstadt",
    country: "Deutschland",
    email: "kontakt@kalkanpartner.de",
    phone: "+49 152 04481954",
    phoneHref: "+4915204481954",
    whatsappUrl: "https://wa.me/4915204481954",
    telegramUrl:
      process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/+4915204481954",
    mstvResponsible:
      "Semra Kalkan, Hauptstraße 192, 79739 Schwörstadt, Deutschland",
    // Optional statutory fields (leave empty for Einzelunternehmen without HR/USt-IdNr.; fill via /admin if later issued)
    commercialRegister: "",
    vatId: "",
    supervisoryAuthority: "",
  },
  localSeo: {
    googleBusinessProfileUrl: null as string | null,
    verifiedAddressAvailable: true,
    openingHours: null as string | null,
  },
  integrations: {
    crmWebhookConfigured: Boolean(process.env.CRM_WEBHOOK_URL),
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null,
    emailServiceConfigured: Boolean(
      process.env.RESEND_API_KEY || process.env.SMTP_HOST
    ),
  },
} as const;
