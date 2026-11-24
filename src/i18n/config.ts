export const ACTIVE_LOCALES = ["de", "tr"] as const;
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
};
