import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";
import { getDepartmentImage } from "@/config/department-images";
import { DepartmentIcon } from "@/components/services/DepartmentIcon";

interface DepartmentsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function DepartmentsSection({ locale, dict }: DepartmentsSectionProps) {
  const { departmentsSection } = dict;

  const unifiedScopeNote =
    locale === "tr"
      ? "Açık hukuki çerçeve: KALKAN PARTNER yalnızca organizasyon ve süreç koordinasyonu sunar. Hukuki/vergisel danışmanlık (RDG), tıbbi tedavi, personel kiralama (AÜG), emlak aracılığı (§ 34c GewO) ve ruhsatlı mühendislik projeleri yetkili iş ortaklarınca yürütülür."
      : locale === "en"
        ? "Clear legal scope: KALKAN PARTNER provides organizational and process coordination only. Legal/tax advice (RDG), medical treatment, temporary staffing (AÜG), real-estate brokerage (§ 34c GewO), and statutory engineering are performed exclusively by licensed partners."
        : "Klare Leistungsabgrenzung: KALKAN PARTNER erbringt ausschließlich Organisations- und Prozesskoordination. Rechts-/Steuerberatung (RDG), medizinische Behandlungen, Arbeitnehmerüberlassung (AÜG), Immobilienmaklertätigkeiten (§ 34c GewO) und genehmigungspflichtige Fachplanungen erfolgen durch zugelassene Partner.";

  return (
    <section id="services" className="bg-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            {departmentsSection.eyebrow}
          </p>
          <h2 className="mt-2.5 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem]">
            {departmentsSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {departmentsSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departmentsSection.departments.map((dept) => {
            const isFeatured = Boolean(dept.featured);
            const imageSrc = getDepartmentImage(dept.slug);

            return (
              <article
                key={dept.slug}
                id={`dept-${dept.slug}`}
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? "border-gold/80 bg-navy text-white shadow-lg"
                    : "border-border-subtle bg-surface text-ink shadow-xs hover:border-gold/70"
                }`}
              >
                {/* Visual Photo Header */}
                <Link
                  href={`/${locale}/services/${dept.slug}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-navy-deep"
                >
                  <Image
                    src={imageSrc}
                    alt={dept.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/15 to-transparent" />

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg border border-gold/50 bg-navy-deep/85 text-gold-light backdrop-blur-xs shadow-sm">
                    <DepartmentIcon icon={dept.icon} className="h-4.5 w-4.5" />
                  </div>

                  {isFeatured && (
                    <span className="absolute top-3 right-3 rounded-full border border-gold/70 bg-navy-deep/85 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold-light backdrop-blur-xs">
                      {departmentsSection.featuredBadge}
                    </span>
                  )}
                </Link>

                {/* Crisp, Scannable Card Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                      isFeatured ? "text-gold-light" : "text-gold-dark"
                    }`}
                  >
                    {dept.audience}
                  </p>

                  <h3
                    className={`mt-1.5 font-serif text-2xl font-semibold leading-snug ${
                      isFeatured ? "text-white" : "text-navy"
                    }`}
                  >
                    <Link
                      href={`/${locale}/services/${dept.slug}`}
                      className="hover:underline underline-offset-4 decoration-gold"
                    >
                      {dept.title}
                    </Link>
                  </h3>

                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      isFeatured ? "text-white/90" : "text-muted"
                    }`}
                  >
                    {dept.summary}
                  </p>

                  {/* Compact Key Highlights Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {dept.highlights.map((item) => (
                      <span
                        key={item}
                        className={`rounded-md px-2.5 py-1 text-[11.5px] font-medium ${
                          isFeatured
                            ? "bg-white/10 text-white/95"
                            : "bg-ivory text-ink border border-border-subtle/70"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Direct Conversion CTA */}
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/${locale}/services/${dept.slug}`}
                      className={`inline-flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isFeatured
                          ? "bg-gold text-navy-deep hover:bg-gold-light"
                          : "border border-navy/20 bg-ivory text-navy hover:bg-navy hover:text-white"
                      }`}
                    >
                      <span>{dept.ctaLabel}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Single Clean Unified Legal Boundary Bar */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold/40 bg-surface p-4 text-xs leading-relaxed text-ink shadow-2xs">
          <ShieldCheck
            className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-dark"
            aria-hidden="true"
          />
          <p>{unifiedScopeNote}</p>
        </div>
      </div>
    </section>
  );
}
