import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getServiceBySlug, getServicesOverview } from "@/content/services";
import { DepartmentIcon } from "@/components/services/DepartmentIcon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const overview = getServicesOverview(locale);
  const meta = LOCALE_META[locale];

  return {
    title: overview.seo.title,
    description: overview.seo.description,
    keywords: overview.seo.keywords,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        "de-DE": "/de/services",
        "tr-TR": "/tr/services",
        "x-default": "/de/services",
      },
    },
    openGraph: {
      title: overview.seo.title,
      description: overview.seo.description,
      type: "website",
      locale: meta.ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function ServicesOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const overview = getServicesOverview(locale);

  return (
    <div className="bg-surface">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-white/65"
          >
            <Link href={`/${locale}`} className="hover:text-gold-light transition-colors">
              {overview.breadcrumbHome}
            </Link>
            <span>/</span>
            <span className="text-gold-light">{overview.breadcrumbServices}</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {overview.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {overview.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {overview.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Categorized Services Grid */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {overview.categories.map((category) => (
            <div key={category.id}>
              <div className="max-w-3xl border-b border-border-subtle pb-5">
                <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                  {category.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {category.slugs.map((slug) => {
                  const service = getServiceBySlug(locale, slug);
                  const isFeatured = Boolean(service.featured);

                  return (
                    <article
                      key={service.slug}
                      className={`flex flex-col rounded-xl border p-6 sm:p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                        isFeatured
                          ? "border-gold/70 bg-navy text-white shadow-md"
                          : "border-border-subtle bg-surface text-ink shadow-xs hover:border-gold/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                            isFeatured
                              ? "border-gold/40 bg-white/10 text-gold-light"
                              : "border-border-subtle bg-ivory text-navy"
                          }`}
                        >
                          <DepartmentIcon icon={service.icon} />
                        </div>
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                            isFeatured ? "text-gold-light" : "text-gold-dark"
                          }`}
                        >
                          {service.eyebrow}
                        </span>
                      </div>

                      <h3
                        className={`mt-5 font-serif text-2xl font-semibold ${
                          isFeatured ? "text-white" : "text-navy"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`mt-2 text-xs font-medium ${
                          isFeatured ? "text-gold-light/90" : "text-gold-dark"
                        }`}
                      >
                        {service.audienceBadge}
                      </p>
                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          isFeatured ? "text-white/80" : "text-muted"
                        }`}
                      >
                        {service.lead}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {service.whatIs.scopeItems.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2.5 text-xs sm:text-[13px] ${
                              isFeatured ? "text-white/90" : "text-ink/85"
                            }`}
                          >
                            <Check
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-current/10">
                        <Link
                          href={`/${locale}/services/${service.slug}`}
                          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                            isFeatured
                              ? "text-gold-light hover:text-white"
                              : "text-navy hover:text-gold-dark"
                          }`}
                        >
                          <span>{overview.cardReadMore}</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                          href={`/${locale}/contact?topic=${service.inquiryTopic}`}
                          className={`inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-2 text-xs font-semibold transition-colors ${
                            isFeatured
                              ? "bg-gold text-navy-deep hover:bg-gold-light"
                              : "bg-navy text-white hover:bg-navy-mid"
                          }`}
                        >
                          <span>{service.inquiry.primaryCtaLabel}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Legal Clarity Banner */}
          <div className="rounded-xl border border-gold/40 bg-surface p-6 sm:p-8 shadow-xs">
            <div className="flex items-start gap-4">
              <ShieldCheck
                className="mt-0.5 h-6 w-6 shrink-0 text-gold-dark"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-serif text-2xl font-semibold text-navy">
                  {overview.legalBannerTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {overview.legalBannerBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
