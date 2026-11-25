import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  const { howWeWork } = getPagesContent(locale);

  return {
    title: howWeWork.seo.title,
    description: howWeWork.seo.description,
    alternates: {
      canonical: `/${locale}/how-we-work`,
      languages: {
        "de-DE": "/de/how-we-work",
        "tr-TR": "/tr/how-we-work",
        "en-US": "/en/how-we-work",
        "x-default": "/de/how-we-work",
      },
    },
    openGraph: {
      title: howWeWork.seo.title,
      description: howWeWork.seo.description,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function HowWeWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { howWeWork } = getPagesContent(locale);

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {howWeWork.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {howWeWork.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {howWeWork.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {howWeWork.steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 gap-6 rounded-2xl border border-border-subtle bg-surface p-7 sm:p-9 lg:grid-cols-12 shadow-xs"
            >
              <div className="lg:col-span-5">
                <span className="font-serif text-4xl font-semibold text-gold-dark">
                  {step.number}
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-navy">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {step.summary}
                </p>
              </div>
              <div className="lg:col-span-7 flex items-center">
                <ul className="w-full space-y-3 rounded-xl border border-border-subtle bg-ivory/70 p-5 sm:p-6">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            {howWeWork.standardsHeading}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {howWeWork.standards.map((std) => (
              <div
                key={std.title}
                className="rounded-xl border border-border-subtle bg-ivory/70 p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {std.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {std.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-navy p-8 text-white sm:p-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl max-w-2xl">
              {howWeWork.ctaTitle}
            </h2>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <span>{howWeWork.ctaButton}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
