import type { Dictionary } from "@/content/types";

interface WhyUsSectionProps {
  dict: Dictionary;
}

export function WhyUsSection({ dict }: WhyUsSectionProps) {
  const { whySection } = dict;

  return (
    <section id="why-us" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              {whySection.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {whySection.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {whySection.subtitle}
            </p>
            <div className="mt-8 h-0.5 w-16 bg-gold" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whySection.items.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-border-subtle bg-ivory/60 p-6 transition-colors hover:border-gold/60"
              >
                <span className="font-serif text-3xl font-semibold text-gold-dark">
                  {item.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
