import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Globe2, ShieldCheck } from "lucide-react";
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
  const { network } = getPagesContent(locale);

  return {
    title: network.seo.title,
    description: network.seo.description,
    alternates: {
      canonical: `/${locale}/international-network`,
      languages: {
        "de-DE": "/de/international-network",
        "tr-TR": "/tr/international-network",
        "en-US": "/en/international-network",
        "x-default": "/de/international-network",
      },
    },
    openGraph: {
      title: network.seo.title,
      description: network.seo.description,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function InternationalNetworkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { network } = getPagesContent(locale);

  return (
    <div className="bg-surface">
      {/* Visual 2-Column Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
                {network.eyebrow}
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {network.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl">
                {network.lead}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-gold/40 shadow-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/departments/business-setup.jpg"
                    alt="International Business Network Headquarters"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-ivory py-12 sm:py-16 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {network.regions.map((region) => (
              <div
                key={region.name}
                className="flex flex-col rounded-xl border border-border-subtle bg-surface p-6 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    {region.tag}
                  </span>
                  <Globe2 className="h-5 w-5 text-navy/80" aria-hidden="true" />
                </div>
                <h2 className="mt-2.5 font-serif text-3xl font-semibold text-navy">
                  {region.name}
                </h2>
                <p className="mt-1.5 text-xs font-semibold text-muted">
                  {region.focus}
                </p>
                <ul className="mt-4 space-y-2 border-t border-border-subtle pt-4">
                  {region.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs sm:text-sm text-ink"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-dark"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {network.partnerCategoriesHeading}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-muted">
              {network.partnerCategoriesIntro}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {network.partnerCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl border border-border-subtle bg-ivory/80 p-5 sm:p-6"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck
                    className="h-4.5 w-4.5 text-gold-dark"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {cat.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm font-medium text-ink">{cat.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted border-l-2 border-gold pl-3">
                  {cat.boundary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-navy p-7 text-white sm:p-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl max-w-2xl">
              {network.ctaTitle}
            </h2>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <span>{network.ctaButton}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
