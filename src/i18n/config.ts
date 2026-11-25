export const ACTIVE_LOCALES = ["de", "tr", "en"] as const;
export const FUTURE_LOCALES = ["de", "tr", "en"] as const;

export type Locale = (typeof ACTIVE_LOCALES)[number];
export type FutureLocale = (typeof FUTURE_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "de";

export function isValidLocale(value: string): value is Locale {
  return (ACTIVE_LOCALES as readonly string[]).includes(value);
}

export const LOCALE_META: Record<
  Locale,
  { label: string; shortLabel: string; htmlLang: string; ogLocale: string }
> = {
  de: {
    label: "Deutsch",
    shortLabel: "DE",
    htmlLang: "de-DE",
    ogLocale: "de_DE",
  },
  tr: {
    label: "Türkçe",
    shortLabel: "TR",
    htmlLang: "tr-TR",
    ogLocale: "tr_TR",
  },
  en: {
    label: "English",
    shortLabel: "EN",
    htmlLang: "en-US",
    ogLocale: "en_US",
  },
};

export type LegalDocKey = "imprint" | "privacy" | "terms";

/**
 * Language-native slugs for legal pages (inspired by pia-advice.de structure):
 * DE: /de/impressum, /de/datenschutzerklaerung, /de/agb
 * TR: /tr/kuenye, /tr/gizlilik-ve-kisisel-verilerin-korunmasi-beyani, /tr/hizmet-sartlari-ve-cayma-haklari
 * EN: /en/imprint, /en/privacy-policy, /en/terms-and-withdrawal
 */
export const LEGAL_SLUGS: Record<Locale, Record<LegalDocKey, string>> = {
  de: {
    imprint: "impressum",
    privacy: "datenschutzerklaerung",
    terms: "agb",
  },
  tr: {
    imprint: "kuenye",
    privacy: "gizlilik-ve-kisisel-verilerin-korunmasi-beyani",
    terms: "hizmet-sartlari-ve-cayma-haklari",
  },
  en: {
    imprint: "imprint",
    privacy: "privacy-policy",
    terms: "terms-and-withdrawal",
  },
};

/**
 * Maps any localized legal slug (including legacy slugs) back to its canonical LegalDocKey.
 */
export function resolveLegalDocKey(slug: string): LegalDocKey | null {
  const map: Record<string, LegalDocKey> = {
    impressum: "imprint",
    kuenye: "imprint",
    kunye: "imprint",
    imprint: "imprint",
    datenschutzerklaerung: "privacy",
    datenschutz: "privacy",
    "gizlilik-ve-kisisel-verilerin-korunmasi-beyani": "privacy",
    "privacy-policy": "privacy",
    agb: "terms",
    "hizmet-sartlari-ve-cayma-haklari": "terms",
    "terms-and-withdrawal": "terms",
  };
  return map[slug] ?? null;
}

/**
 * Translates a current pathname into the equivalent path in `targetLocale`,
 * preserving localized legal page slugs across DE, TR, and EN.
 */
export function translateLocalePath(
  pathname: string | null,
  targetLocale: Locale
): string {
  if (!pathname) return `/${targetLocale}`;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${targetLocale}`;

  if (ACTIVE_LOCALES.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
    if (segments.length === 2) {
      const legalKey = resolveLegalDocKey(segments[1]);
      if (legalKey) {
        segments[1] = LEGAL_SLUGS[targetLocale][legalKey];
      }
    }
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}/${segments.join("/")}`;
}
