import type { Locale } from "@/i18n/config";
import type { CorporatePagesContent, InsightArticle } from "./types";
import { pagesDe } from "./de";
import { pagesTr } from "./tr";

export function getPagesContent(locale: Locale): CorporatePagesContent {
  return locale === "tr" ? pagesTr : pagesDe;
}

export function getInsightBySlug(
  locale: Locale,
  slug: string
): InsightArticle | undefined {
  const content = getPagesContent(locale);
  return content.insights.articles.find((article) => article.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return pagesDe.insights.articles.map((article) => article.slug);
}
