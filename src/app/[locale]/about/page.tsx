import type { Metadata } from "next";
import Image from "next/image";
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
      {/* Visual 2-Column Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
                {about.eyebrow}
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {about.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl">
                {about.lead}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-gold/40 shadow-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/hero-architecture.jpg"
                    alt="KALKAN PARTNER Germany Headquarters Architecture"
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

      {/* Identity & Vision */}
      <section className="bg-surface py-12 sm:py-16 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {about.identityHeading}
              </h2>
              {about.identityParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm sm:text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gold/45 bg-ivory p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {about.visionHeading}
                </p>
                <p className="mt-3 font-serif text-xl leading-relaxed text-navy">
                  {about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ivory py-12 sm:py-16 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {about.philosophyHeading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.philosophyItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-border-subtle bg-surface p-5 shadow-2xs"
              >
                <span className="font-serif text-2xl font-semibold text-gold-dark">
                  0{index + 1}
                </span>
                <h3 className="mt-2.5 text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Model & Bottom CTA */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-2xl border border-border-subtle bg-ivory p-6 sm:p-8">
            <div className="flex items-start gap-3.5">
              <ShieldCheck
                className="mt-1 h-5 w-5 shrink-0 text-gold-dark"
                aria-hidden="true"
              />
              <div className="w-full">
                <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                  {about.partnerModelHeading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted max-w-3xl">
                  {about.partnerModelText}
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {about.partnerTypes.map((partner) => (
                    <li
                      key={partner}
                      className="flex items-start gap-2.5 rounded-lg border border-border-subtle bg-surface p-3 text-xs sm:text-sm font-medium text-ink"
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

          <div className="rounded-2xl bg-navy p-7 text-white sm:p-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                {about.ctaTitle}
              </h2>
              <p className="mt-2 text-sm text-white/85 sm:text-base">
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
