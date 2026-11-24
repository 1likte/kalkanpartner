import type { Locale } from "@/i18n/config";
import type { Dictionary } from "./types";
import { de } from "./dictionaries/de";
import { tr } from "./dictionaries/tr";

const dictionaries: Record<Locale, Dictionary> = {
  de,
  tr,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
