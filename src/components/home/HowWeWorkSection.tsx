import type { Dictionary } from "@/content/types";

interface HowWeWorkSectionProps {
  dict: Dictionary;
}

export function HowWeWorkSection({ dict }: HowWeWorkSectionProps) {
  const { howWeWork } = dict;

  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-architectural-grid opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
            {howWeWork.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {howWeWork.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {howWeWork.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-semibold text-gold-light">
                  {item.step}
                </span>
                {idx < howWeWork.steps.length - 1 && (
                  <span
                    className="hidden lg:block h-px w-10 bg-gold/40"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
