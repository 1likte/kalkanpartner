import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const { hero } = dict;

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* Background Architectural Photography */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="International corporate business district in Germany"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy/75" />
        <div className="absolute inset-0 bg-architectural-grid opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>{hero.eyebrow}</span>
          </div>

          <p className="mt-6 font-serif text-xl sm:text-2xl italic text-gold-light tracking-wide">
            {hero.slogan}
          </p>

          <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.description}
          </p>

          {/* Primary Calls to Action */}
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep shadow-sm transition-all hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:border-gold-light hover:bg-white/10"
            >
              <span>{hero.secondaryCta}</span>
            </Link>
          </div>

          {/* Transparent Legal Positioning Pill */}
          <div className="mt-8 inline-flex items-start gap-2.5 text-xs leading-relaxed text-white/70">
            <ShieldCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-gold"
              aria-hidden="true"
            />
            <span>{hero.complianceBadge}</span>
          </div>
        </div>

        {/* Structural Corporate Pillars */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4 lg:mt-20">
          {hero.pillars.map((pillar) => (
            <div key={pillar.label} className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light/85">
                {pillar.label}
              </p>
              <p className="text-sm font-medium text-white sm:text-base">
                {pillar.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
