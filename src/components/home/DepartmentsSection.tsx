import Link from "next/link";
import {
  Users,
  Home,
  Landmark,
  Languages,
  Briefcase,
  HeartPulse,
  Cpu,
  GraduationCap,
  UtensilsCrossed,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { DepartmentIconKey, Dictionary } from "@/content/types";

const ICON_MAP: Record<DepartmentIconKey, LucideIcon> = {
  users: Users,
  home: Home,
  landmark: Landmark,
  languages: Languages,
  briefcase: Briefcase,
  heartPulse: HeartPulse,
  cpu: Cpu,
  graduationCap: GraduationCap,
  utensilsCrossed: UtensilsCrossed,
};

interface DepartmentsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function DepartmentsSection({ locale, dict }: DepartmentsSectionProps) {
  const { departmentsSection } = dict;

  return (
    <section id="services" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            {departmentsSection.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.65rem]">
            {departmentsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {departmentsSection.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departmentsSection.departments.map((dept) => {
            const Icon = ICON_MAP[dept.icon];
            const isFeatured = Boolean(dept.featured);

            return (
              <article
                key={dept.slug}
                id={`dept-${dept.slug}`}
                className={`group flex flex-col rounded-xl border p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isFeatured
                    ? "border-gold/70 bg-navy text-white shadow-md"
                    : "border-border-subtle bg-surface text-ink shadow-xs hover:border-gold/50"
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                      isFeatured
                        ? "border-gold/40 bg-white/10 text-gold-light"
                        : "border-border-subtle bg-ivory text-navy"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {isFeatured && (
                    <span className="rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light">
                      {departmentsSection.featuredBadge}
                    </span>
                  )}
                </div>

                {/* Audience + Title */}
                <p
                  className={`mt-5 text-xs font-medium ${
                    isFeatured ? "text-gold-light/90" : "text-gold-dark"
                  }`}
                >
                  {dept.audience}
                </p>
                <h3
                  className={`mt-1.5 font-serif text-2xl font-semibold leading-snug ${
                    isFeatured ? "text-white" : "text-navy"
                  }`}
                >
                  {dept.title}
                </h3>

                {/* Summary */}
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    isFeatured ? "text-white/90" : "text-muted"
                  }`}
                >
                  {dept.summary}
                </p>

                {/* Highlights */}
                <ul className="mt-5 space-y-2">
                  {dept.highlights.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-xs sm:text-[13px] font-medium ${
                        isFeatured ? "text-white/95" : "text-ink"
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

                {/* Spacer */}
                <div className="mt-auto pt-6">
                  {/* Legal Scope Note */}
                  <p
                    className={`rounded-md border px-3 py-2 text-[11px] leading-relaxed ${
                      isFeatured
                        ? "border-white/20 bg-white/8 text-white/85"
                        : "border-border-subtle bg-ivory/85 text-ink/90"
                    }`}
                  >
                    {dept.legalNote}
                  </p>

                  {/* Conversion CTA -> Dedicated Department Page */}
                  <Link
                    href={`/${locale}/services/${dept.slug}`}
                    className={`mt-4 inline-flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isFeatured
                        ? "bg-gold text-navy-deep hover:bg-gold-light"
                        : "border border-navy/15 bg-ivory text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    <span>{dept.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
