import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";

interface RestaurantSpotlightSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function RestaurantSpotlightSection({
  locale,
  dict,
}: RestaurantSpotlightSectionProps) {
  const { restaurantSpotlight } = dict;

  return (
    <section id="restaurant-solutions" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Photography Column */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-navy shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/restaurant-kitchen.jpg"
                  alt={restaurantSpotlight.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-gold/25 bg-navy-deep px-6 py-4 text-xs text-gold-light/90">
                {restaurantSpotlight.subtitle}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              {restaurantSpotlight.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {restaurantSpotlight.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {restaurantSpotlight.description}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {restaurantSpotlight.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-lg border border-border-subtle bg-surface p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-navy">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {cap.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div>
                <Link
                  href={`/${locale}/services/restaurant-kitchen`}
                  className="inline-flex items-center gap-2.5 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-mid"
                >
                  <span>{restaurantSpotlight.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
                </Link>
              </div>
              <p className="text-xs leading-relaxed text-muted border-l-2 border-gold pl-3.5">
                {restaurantSpotlight.legalDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
