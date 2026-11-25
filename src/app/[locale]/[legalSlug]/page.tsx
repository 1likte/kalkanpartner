import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AlertTriangle, Check } from "lucide-react";
import {
  ACTIVE_LOCALES,
  isValidLocale,
  LEGAL_SLUGS,
  resolveLegalDocKey,
  type LegalDocKey,
  type Locale,
} from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getSiteSettings } from "@/lib/cms";
import { getLegalContent } from "@/content/legal";

export function generateStaticParams() {
  const params: { locale: Locale; legalSlug: string }[] = [];
  for (const locale of ACTIVE_LOCALES) {
    const slugs = Object.values(LEGAL_SLUGS[locale]);
    for (const legalSlug of slugs) {
      params.push({ locale, legalSlug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; legalSlug: string }>;
}): Promise<Metadata> {
  const { locale, legalSlug } = await params;
  if (!isValidLocale(locale)) return {};
  const docKey = resolveLegalDocKey(legalSlug);
  if (!docKey) return {};

  const legalDict = getLegalContent(locale);
  const doc = legalDict[docKey];
  const canonicalSlug = LEGAL_SLUGS[locale][docKey];

  return {
    title: doc.seoTitle,
    description: doc.seoDescription,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${locale}/${canonicalSlug}`,
      languages: {
        "de-DE": `/de/${LEGAL_SLUGS.de[docKey]}`,
        "tr-TR": `/tr/${LEGAL_SLUGS.tr[docKey]}`,
        "en-US": `/en/${LEGAL_SLUGS.en[docKey]}`,
        "x-default": `/de/${LEGAL_SLUGS.de[docKey]}`,
      },
    },
  };
}

export default async function LocalizedLegalPage({
  params,
}: {
  params: Promise<{ locale: string; legalSlug: string }>;
}) {
  const { locale, legalSlug } = await params;
  if (!isValidLocale(locale)) notFound();

  const docKey: LegalDocKey | null = resolveLegalDocKey(legalSlug);
  if (!docKey) {
    notFound();
  }

  // Redirect legacy or wrong-language legal slug to canonical native-language slug
  const canonicalSlug = LEGAL_SLUGS[locale][docKey];
  if (legalSlug !== canonicalSlug) {
    redirect(`/${locale}/${canonicalSlug}`);
  }

  const legalDict = getLegalContent(locale);
  const doc = legalDict[docKey];
  const labels = legalDict.labels;
  const site = getSiteSettings();

  const siblingLink =
    docKey === "imprint"
      ? {
          href: `/${locale}/${LEGAL_SLUGS[locale].privacy}`,
          label: labels.toPrivacy,
        }
      : docKey === "privacy"
        ? {
            href: `/${locale}/${LEGAL_SLUGS[locale].terms}`,
            label: labels.toTerms,
          }
        : {
            href: `/${locale}/${LEGAL_SLUGS[locale].imprint}`,
            label: labels.toImprint,
          };

  return (
    <div className="bg-surface">
      <section className="bg-navy-deep text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded bg-gold/20 px-2.5 py-1 text-xs font-semibold tracking-wider text-gold-light">
            {doc.badge}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-sm text-white/75">{doc.subtitle}</p>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {doc.warningTitle && (
            <div className="flex items-start gap-3.5 rounded-xl border border-amber-400/70 bg-amber-50 p-5 text-amber-950">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">{doc.warningTitle}</p>
                <p className="mt-1 text-xs sm:text-sm">{doc.warningBody}</p>
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-8 text-sm leading-relaxed text-ink">
            {doc.showContactBlock && (
              <div className="grid grid-cols-1 gap-6 rounded-xl border border-border-subtle bg-ivory/70 p-6 sm:grid-cols-2">
                <div className="space-y-1 text-muted">
                  <p className="font-semibold text-navy">{site.brandName}</p>
                  <p>
                    {labels.ownerPrefix}
                    {site.owner}
                  </p>
                  <p className="text-amber-800 font-medium">
                    {site.companyLegalName}
                  </p>
                  <p>{site.streetAddress}</p>
                  <p>{site.postalCodeCity}</p>
                  <p>{site.country}</p>
                </div>

                <div className="space-y-1.5 text-muted">
                  <p>
                    <span className="font-medium text-navy">
                      {labels.phoneWhatsappLabel}:
                    </span>{" "}
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-navy hover:text-gold-dark underline-offset-4 hover:underline"
                    >
                      {site.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-navy">
                      {labels.emailLabel}:
                    </span>{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-navy hover:text-gold-dark underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-navy">
                      {labels.websiteLabel}:
                    </span>{" "}
                    <a
                      href={siteConfig.siteUrl}
                      className="text-navy hover:text-gold-dark underline-offset-4 hover:underline"
                    >
                      https://{site.domain}
                    </a>
                  </p>
                </div>
              </div>
            )}

            {doc.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="font-serif text-2xl font-semibold text-navy">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2 rounded-xl border border-border-subtle bg-ivory/60 p-4">
                    {section.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {docKey === "imprint" && (
              <div className="rounded-xl border border-border-subtle bg-ivory p-5 space-y-2 text-xs text-muted">
                <p className="font-semibold uppercase tracking-[0.14em] text-navy">
                  {labels.pendingRegistryTitle}
                </p>
                <p>• {site.commercialRegister}</p>
                <p>• {site.vatId}</p>
                <p>• {site.supervisoryAuthority}</p>
              </div>
            )}

            <div className="border-t border-border-subtle pt-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/${locale}/contact`}
                className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                {labels.backToContact}
              </Link>
              <Link
                href={siblingLink.href}
                className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                {siblingLink.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
