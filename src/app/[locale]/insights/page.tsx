import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getDepartmentImage } from "@/config/department-images";
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
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {insights.eyebrow}
            </p>
            <h1 className="mt-2.5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {insights.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              {insights.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {insights.articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-xl"
              >
                <Link
                  href={`/${locale}/insights/${article.slug}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-navy-deep"
                >
                  <Image
                    src={getDepartmentImage(article.relatedServiceSlug)}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-gold/50 bg-navy-deep/85 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-gold-light backdrop-blur-xs">
                    {article.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
                    <Clock className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="mt-2.5 font-serif text-xl sm:text-2xl font-semibold leading-snug text-navy">
                    <Link
                      href={`/${locale}/insights/${article.slug}`}
                      className="hover:text-gold-dark transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-5 border-t border-border-subtle/70">
                    <Link
                      href={`/${locale}/insights/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
                    >
                      <span>{insights.readArticleLabel}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
