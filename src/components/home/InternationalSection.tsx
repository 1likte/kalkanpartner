import { Globe2, ShieldAlert } from "lucide-react";
import type { Dictionary } from "@/content/types";

interface InternationalSectionProps {
  dict: Dictionary;
}

export function InternationalSection({ dict }: InternationalSectionProps) {
  const { internationalSection } = dict;

  return (
    <section
      id="international-network"
      className="bg-surface py-20 sm:py-28 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            {internationalSection.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {internationalSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {internationalSection.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {internationalSection.corridors.map((corridor) => (
            <div
              key={corridor.region}
              className="rounded-xl border border-border-subtle bg-ivory/70 p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {corridor.role}
                </span>
                <Globe2 className="h-5 w-5 text-navy/70" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">
                {corridor.region}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {corridor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold/35 bg-ivory p-5">
          <ShieldAlert
            className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-ink/85">
            {internationalSection.partnerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
