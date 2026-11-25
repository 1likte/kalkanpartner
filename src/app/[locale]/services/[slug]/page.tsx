import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Lock,
  ShieldAlert,
} from "lucide-react";
import { ACTIVE_LOCALES, isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import {
  getServiceBySlug,
  getServicesOverview,
} from "@/content/services";
import { isValidServiceSlug, SERVICE_SLUGS } from "@/content/services/types";
import { DepartmentIcon } from "@/components/services/DepartmentIcon";

export function generateStaticParams() {
  return ACTIVE_LOCALES.flatMap((locale) =>
    SERVICE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isValidServiceSlug(slug)) return {};

  const service = getServiceBySlug(locale, slug);
  const meta = LOCALE_META[locale];

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        "de-DE": `/de/services/${slug}`,
        "tr-TR": `/tr/services/${slug}`,
        "en-US": `/en/services/${slug}`,
        "x-default": `/de/services/${slug}`,
      },
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: "article",
      locale: meta.ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isValidServiceSlug(slug)) {
    notFound();
  }

  const service = getServiceBySlug(locale, slug);
  const overview = getServicesOverview(locale);
  const relatedServices = service.relatedSlugs.map((relSlug) =>
    getServiceBySlug(locale, relSlug)
  );

  // Verified Service JSON-LD (no fabricated ratings, prices, or claims)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
    areaServed: ["DE", "TR"],
    availableLanguage: ["German", "Turkish"],
  };

  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Department Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-white/65"
          >
            <Link href={`/${locale}`} className="hover:text-gold-light transition-colors">
              {overview.breadcrumbHome}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/services`}
              className="hover:text-gold-light transition-colors"
            >
              {overview.breadcrumbServices}
            </Link>
            <span>/</span>
            <span className="text-gold-light">{service.title}</span>
          </nav>

          <div
            className={`mt-8 grid grid-cols-1 gap-10 ${
              service.heroImage ? "lg:grid-cols-12 lg:items-center" : ""
            }`}
          >
            <div className={service.heroImage ? "lg:col-span-7" : "max-w-3xl"}>
              <div className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-white/10 text-gold-light">
                  <DepartmentIcon icon={service.icon} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {service.eyebrow}
                </span>
              </div>

              <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-4 inline-flex rounded-full border border-gold/30 bg-white/5 px-3.5 py-1 text-xs font-medium text-gold-light">
                {service.audienceBadge}
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                {service.lead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
                >
                  <span>{service.inquiry.primaryCtaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-gold-light hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>{service.inquiry.secondaryCtaLabel}</span>
                </Link>
              </div>
            </div>

            {service.heroImage && (
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-gold/35 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 1: What Is This Service? */}
      <section className="bg-surface py-16 sm:py-20 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                01
              </span>
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {service.whatIs.heading}
              </h2>
              {service.whatIs.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl border border-border-subtle bg-ivory p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                  {service.whatIs.scopeTitle}
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.whatIs.scopeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink"
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
          </div>
        </div>
      </section>

      {/* Section 2: Target Audience */}
      <section className="bg-ivory py-16 sm:py-20 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              02
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {service.targetAudience.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {service.targetAudience.intro}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.targetAudience.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border-subtle bg-surface p-6 shadow-xs"
              >
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {group.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Problems Solved */}
      <section className="bg-surface py-16 sm:py-20 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              03
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {service.problemsSolved.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {service.problemsSolved.intro}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {service.problemsSolved.items.map((item) => (
              <div
                key={item.problem}
                className="flex flex-col rounded-xl border border-border-subtle bg-ivory/70 p-6"
              >
                <p className="text-sm font-semibold text-navy">{item.problem}</p>
                <div className="my-4 h-px w-12 bg-gold" />
                <p className="text-sm leading-relaxed text-muted">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-architectural-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              04
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
              {service.process.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              {service.process.intro}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-white/15 bg-white/[0.04] p-6"
              >
                <span className="font-serif text-3xl font-semibold text-gold-light">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Boundary Box */}
      <section className="bg-ivory py-12 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gold/50 bg-surface p-6 sm:p-8 shadow-xs">
            <div className="flex items-start gap-3.5">
              <ShieldAlert
                className="mt-0.5 h-6 w-6 shrink-0 text-gold-dark"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-serif text-2xl font-semibold text-navy">
                  {service.legalBoundary.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {service.legalBoundary.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/85"
                    >
                      <Check
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-dark"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Inquiry & Consultation CTA */}
      <section id="inquiry" className="bg-surface py-16 sm:py-20 border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy p-8 text-white shadow-xl sm:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  05
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  {service.inquiry.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  {service.inquiry.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`/${locale}/contact?topic=${service.inquiryTopic}`}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
                  >
                    <span>{service.inquiry.primaryCtaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-light"
                  >
                    <span>{service.inquiry.secondaryCtaLabel}</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-white/15 bg-white/[0.05] p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
                    {service.inquiry.prepChecklistTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.inquiry.prepChecklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/85"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-start gap-2.5 border-t border-white/15 pt-4 text-xs text-white/75">
                    <Lock
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                      aria-hidden="true"
                    />
                    <span>{service.inquiry.sensitiveDataReminder}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services (Internal Linking) */}
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
              {overview.relatedHeading}
            </h2>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
            >
              <span>{overview.allServicesCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${locale}/services/${rel.slug}`}
                className="group rounded-xl border border-border-subtle bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-ivory text-navy">
                  <DepartmentIcon icon={rel.icon} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy group-hover:text-gold-dark transition-colors">
                  {rel.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                  {rel.lead}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                  <span>{overview.cardReadMore}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
