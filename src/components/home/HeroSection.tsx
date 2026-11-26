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
      {/* Vivid Architectural Skyline Photography with Left-Side Directional Scrim */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Modern European business district in Germany at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-62"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/78 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-14 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/45 bg-navy-deep/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>{hero.eyebrow}</span>
          </div>

          <p className="mt-5 font-serif text-xl sm:text-2xl italic text-gold-light tracking-wide">
            {hero.slogan}
          </p>

          <h1 className="mt-2.5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] drop-shadow-xs">
            {hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
            {hero.description}
          </p>

          {/* Primary Calls to Action */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep shadow-md transition-all hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/40 bg-navy-deep/45 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold-light hover:bg-navy-deep/70"
            >
              <span>{hero.secondaryCta}</span>
            </Link>
          </div>

          {/* Compact Legal Positioning Pill */}
          <div className="mt-7 inline-flex items-center gap-2 text-xs text-white/90">
            <ShieldCheck
              className="h-4 w-4 shrink-0 text-gold"
              aria-hidden="true"
            />
            <span>{hero.complianceBadge}</span>
          </div>
        </div>

        {/* Structural Corporate Pillars */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-xl border border-white/15 bg-navy-deep/65 p-5 backdrop-blur-sm sm:grid-cols-4 sm:p-6 lg:mt-16">
          {hero.pillars.map((pillar) => (
            <div key={pillar.label} className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                {pillar.label}
              </p>
              <p className="text-sm font-semibold text-white sm:text-base">
                {pillar.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
