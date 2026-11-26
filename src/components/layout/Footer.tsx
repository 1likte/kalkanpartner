import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";
import type { SiteSettings } from "@/lib/cms";
import { BrandLogo } from "@/components/brand/BrandLogo";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
  site: SiteSettings;
}

export function Footer({ locale, dict, site }: FooterProps) {
  return (
    <footer className="bg-navy-deep text-white border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Legal Positioning Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href={`/${locale}`} aria-label="KALKAN PARTNER">
              <BrandLogo variant="full" theme="light" showDescriptor />
            </Link>
            <p className="text-sm leading-relaxed text-white/90 max-w-sm">
              {dict.footer.tagline}
            </p>
            <div className="rounded-lg border border-gold/30 bg-white/8 p-4">
              <p className="text-xs leading-relaxed text-white/90">
                {dict.footer.coordinationNotice}
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              {dict.footer.columns.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {dict.departmentsSection.departments.map((dept) => (
                <li key={dept.slug}>
                  <Link
                    href={`/${locale}/services/${dept.slug}`}
                    className="text-white/90 transition-colors hover:text-gold-light"
                  >
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              {dict.footer.columns.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {dict.footer.companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-white/90 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language-Specific Legal & Contact Column */}
          <div id="legal-notice" className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
              {dict.footer.columns.legalTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {dict.footer.legalLinks.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-white/90 transition-colors hover:text-gold-light leading-snug"
                  >
                    {item.label}
                  </Link>
                  {item.todoBadge && (
                    <span className="mt-0.5 shrink-0 rounded bg-gold/20 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-gold-light">
                      {item.todoBadge}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-1.5 border-t border-white/15 pt-4 text-xs text-white/85">
              <p className="font-semibold text-white">{site.brandName}</p>
              <p>{site.streetAddress}</p>
              <p>
                {site.postalCodeCity}, {site.country}
              </p>
              <p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {dict.footer.copyright}</p>
          <p>{dict.footer.futureLanguageNote}</p>
        </div>
      </div>
    </footer>
  );
}
