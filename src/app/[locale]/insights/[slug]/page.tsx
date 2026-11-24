import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { ACTIVE_LOCALES, isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import {
  getAllInsightSlugs,
  getInsightBySlug,
  getPagesContent,
} from "@/content/pages";

export function generateStaticParams() {
  const slugs = getAllInsightSlugs();
  return ACTIVE_LOCALES.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const article = getInsightBySlug(locale, slug);
  if (!article) return {};

  return {
    title: `${article.title} | KALKAN PARTNER`,
    description: article.seoDescription,
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
      languages: {
        "de-DE": `/de/insights/${slug}`,
        "tr-TR": `/tr/insights/${slug}`,
        "x-default": `/de/insights/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.seoDescription,
      type: "article",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const article = getInsightBySlug(locale, slug);
  if (!article) notFound();

  const { insights } = getPagesContent(locale);

  return (
    <article className="bg-surface">
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{insights.backToInsightsLabel}</span>
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/75">
            <span className="rounded-full border border-gold/40 bg-white/5 px-3 py-1 font-semibold text-gold-light">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          {article.sections.map((sec) => (
            <div key={sec.heading} className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="mt-4 space-y-2.5 rounded-xl border border-border-subtle bg-ivory p-5">
                  {sec.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-ink"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-xl border border-gold/45 bg-ivory p-6 sm:p-8">
            <p className="text-base font-medium leading-relaxed text-navy">
              {article.takeaway}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/services/${article.relatedServiceSlug}`}
                className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-mid transition-colors"
              >
                <span>{insights.relatedServiceLabel}</span>
                <ArrowRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-md border border-navy/20 bg-surface px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                <span>{insights.backToInsightsLabel}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
