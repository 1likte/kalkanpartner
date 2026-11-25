import type { Locale } from "@/i18n/config";
import { deepMerge, readCmsOverridesFromDisk } from "@/lib/cms";
import type { Dictionary } from "./types";
import { de } from "./dictionaries/de";
import { tr } from "./dictionaries/tr";
import { en } from "./dictionaries/en";

export const baseDictionaries: Record<Locale, Dictionary> = {
  de,
  tr,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  const overrides = readCmsOverridesFromDisk();
  return deepMerge(baseDictionaries[locale], overrides.dictionary?.[locale]);
}
