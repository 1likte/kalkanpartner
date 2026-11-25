import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getPagesContent } from "@/content/pages";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const { faq } = getPagesContent(locale);

  return {
    title: faq.seo.title,
    description: faq.seo.description,
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        "de-DE": "/de/faq",
        "tr-TR": "/tr/faq",
        "en-US": "/en/faq",
        "x-default": "/de/faq",
      },
    },
    openGraph: {
      title: faq.seo.title,
      description: faq.seo.description,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { faq } = getPagesContent(locale);

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {faq.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {faq.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {faq.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {faq.categories.map((category) => (
            <div key={category.title}>
              <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl mb-4">
                {category.title}
              </h2>
              <FaqAccordion items={category.items} />
            </div>
          ))}

          <div className="rounded-2xl bg-navy p-8 text-white sm:p-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold">
                {faq.ctaTitle}
              </h2>
              <p className="mt-2 text-sm text-white/80">{faq.ctaSubtitle}</p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <span>{faq.ctaButton}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
