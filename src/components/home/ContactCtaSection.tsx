import Link from "next/link";
import { ArrowUpRight, Info, Lock } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";

interface ContactCtaSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCtaSection({ locale, dict }: ContactCtaSectionProps) {
  const { contactCta } = dict;

  return (
    <section id="contact-cta" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-navy/10 bg-navy p-8 text-white shadow-xl sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {contactCta.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {contactCta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              {contactCta.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contactCta.paths.map((path) => (
              <Link
                key={path.topic}
                href={`/${locale}/contact?topic=${path.topic}`}
                className="group flex flex-col justify-between rounded-xl border border-white/15 bg-white/[0.05] p-5 transition-all hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/[0.09]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light">
                      {path.audience}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-gold-light/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-white">
                    {path.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/75">
                    {path.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/15 pt-6 lg:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-gold/30 bg-white/[0.04] p-4">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-white/80">
                {contactCta.noticeBody}
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/[0.04] p-4">
              <Lock
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-white/80">
                {contactCta.sensitiveDataNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
