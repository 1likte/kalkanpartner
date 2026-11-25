import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
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
  const { about } = getPagesContent(locale);

  return {
    title: about.seo.title,
    description: about.seo.description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        "de-DE": "/de/about",
        "tr-TR": "/tr/about",
        "en-US": "/en/about",
        "x-default": "/de/about",
      },
    },
    openGraph: {
      title: about.seo.title,
      description: about.seo.description,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { about } = getPagesContent(locale);

  return (
    <div className="bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {about.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {about.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {about.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Identity & Vision */}
      <section className="bg-surface py-16 sm:py-24 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {about.identityHeading}
              </h2>
              {about.identityParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-gold/40 bg-ivory p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {about.visionHeading}
                </p>
                <p className="mt-4 font-serif text-xl leading-relaxed text-navy">
                  {about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ivory py-16 sm:py-24 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {about.philosophyHeading}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {about.philosophyItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-border-subtle bg-surface p-7 shadow-xs"
              >
                <span className="font-serif text-2xl font-semibold text-gold-dark">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Model */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border-subtle bg-ivory p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <ShieldCheck
                className="mt-1 h-6 w-6 shrink-0 text-gold-dark"
                aria-hidden="true"
              />
              <div className="max-w-3xl">
                <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                  {about.partnerModelHeading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {about.partnerModelText}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {about.partnerTypes.map((partner) => (
                    <li
                      key={partner}
                      className="flex items-start gap-2.5 text-sm text-ink"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                        aria-hidden="true"
                      />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl bg-navy p-8 text-white sm:p-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                {about.ctaTitle}
              </h2>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                {about.ctaSubtitle}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <span>{about.ctaButton}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
