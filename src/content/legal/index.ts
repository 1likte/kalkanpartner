import type { Locale } from "@/i18n/config";
import { deepMerge, readCmsOverridesFromDisk } from "@/lib/cms";
import type { LocaleLegalDictionary } from "./types";
import { legalContentDefault } from "./default";

export { legalContentDefault };

export function getLegalContent(locale: Locale): LocaleLegalDictionary {
  const overrides = readCmsOverridesFromDisk();
  return deepMerge(legalContentDefault[locale], overrides.legal?.[locale]);
}
