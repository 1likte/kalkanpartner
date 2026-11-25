import type { Locale } from "@/i18n/config";
import { deepMerge, readCmsOverridesFromDisk } from "@/lib/cms";
import type { CorporatePagesContent, InsightArticle } from "./types";
import { pagesDe } from "./de";
import { pagesTr } from "./tr";
import { pagesEn } from "./en";

export const basePagesByLocale: Record<Locale, CorporatePagesContent> = {
  de: pagesDe,
  tr: pagesTr,
  en: pagesEn,
};

export function getPagesContent(locale: Locale): CorporatePagesContent {
  const overrides = readCmsOverridesFromDisk();
  return deepMerge(basePagesByLocale[locale], overrides.pages?.[locale]);
}

export function getInsightBySlug(
  locale: Locale,
  slug: string
): InsightArticle | undefined {
  const content = getPagesContent(locale);
  return content.insights.articles.find((article) => article.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  const slugs = new Set<string>();
  for (const loc of ["de", "tr", "en"] as const) {
    for (const art of getPagesContent(loc).insights.articles) {
      slugs.add(art.slug);
    }
  }
  return Array.from(slugs);
}
