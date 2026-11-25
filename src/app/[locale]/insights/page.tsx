import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getPagesContent } from "@/content/pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const { insights } = getPagesContent(locale);

  return {
    title: insights.seo.title,
    description: insights.seo.description,
    alternates: {
      canonical: `/${locale}/insights`,
      languages: {
        "de-DE": "/de/insights",
        "tr-TR": "/tr/insights",
        "en-US": "/en/insights",
        "x-default": "/de/insights",
      },
    },
    openGraph: {
      title: insights.seo.title,
      description: insights.seo.description,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { insights } = getPagesContent(locale);

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {insights.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {insights.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {insights.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {insights.articles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col rounded-xl border border-border-subtle bg-surface p-7 shadow-xs transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold uppercase tracking-[0.14em] text-gold-dark">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug text-navy">
                  <Link
                    href={`/${locale}/insights/${article.slug}`}
                    className="hover:text-gold-dark transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-border-subtle/70">
                  <Link
                    href={`/${locale}/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                  >
                    <span>{insights.readArticleLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
