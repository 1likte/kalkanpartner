import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getDepartmentImage } from "@/config/department-images";
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
        "en-US": "/en/services",
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
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-white/75"
          >
            <Link href={`/${locale}`} className="hover:text-gold-light transition-colors">
              {overview.breadcrumbHome}
            </Link>
            <span>/</span>
            <span className="text-gold-light">{overview.breadcrumbServices}</span>
          </nav>

          <div className="mt-5 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {overview.eyebrow}
            </p>
            <h1 className="mt-2.5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {overview.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              {overview.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Categorized Visual Services Grid */}
      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {overview.categories.map((category) => (
            <div key={category.id}>
              <div className="max-w-3xl border-b border-border-subtle pb-4">
                <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
                  {category.label}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                {category.slugs.map((slug) => {
                  const service = getServiceBySlug(locale, slug);
                  const isFeatured = Boolean(service.featured);
                  const imageSrc = getDepartmentImage(service.slug);

                  return (
                    <article
                      key={service.slug}
                      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                        isFeatured
                          ? "border-gold/80 bg-navy text-white shadow-md"
                          : "border-border-subtle bg-surface text-ink shadow-xs hover:border-gold/70"
                      }`}
                    >
                      <Link
                        href={`/${locale}/services/${service.slug}`}
                        className="relative block aspect-[16/9] w-full overflow-hidden bg-navy-deep"
                      >
                        <Image
                          src={imageSrc}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/50 bg-navy-deep/85 text-gold-light backdrop-blur-xs">
                            <DepartmentIcon icon={service.icon} className="h-4 w-4" />
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light">
                            {service.eyebrow}
                          </span>
                        </div>
                      </Link>

                      <div className="flex flex-1 flex-col p-6">
                        <h3
                          className={`font-serif text-2xl font-semibold ${
                            isFeatured ? "text-white" : "text-navy"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`mt-1.5 text-xs font-semibold ${
                            isFeatured ? "text-gold-light" : "text-gold-dark"
                          }`}
                        >
                          {service.audienceBadge}
                        </p>
                        <p
                          className={`mt-3 text-sm leading-relaxed ${
                            isFeatured ? "text-white/90" : "text-muted"
                          }`}
                        >
                          {service.lead}
                        </p>

                        <div className="mt-auto pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-current/10">
                          <Link
                            href={`/${locale}/services/${service.slug}`}
                            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
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
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Legal Clarity Banner */}
          <div className="rounded-xl border border-gold/40 bg-surface p-6 shadow-xs">
            <div className="flex items-start gap-3.5">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-serif text-xl font-semibold text-navy">
                  {overview.legalBannerTitle}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
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
