import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Info, MessageCircle, Send } from "lucide-react";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { getPagesContent } from "@/content/pages";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const { contact } = getPagesContent(locale);

  return {
    title: contact.seo.title,
    description: contact.seo.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        "de-DE": "/de/contact",
        "tr-TR": "/tr/contact",
        "x-default": "/de/contact",
      },
    },
    openGraph: {
      title: contact.seo.title,
      description: contact.seo.description,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const { contact } = getPagesContent(locale);

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-architectural-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              {contact.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {contact.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {contact.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="rounded-2xl border border-border-subtle bg-surface p-8 text-sm text-muted">
                    ...
                  </div>
                }
              >
                <ContactForm locale={locale} content={contact} />
              </Suspense>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              {/* Direct Messenger Buttons: WhatsApp & Telegram */}
              <div className="rounded-2xl border border-gold/50 bg-navy p-6 sm:p-7 text-white shadow-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                  {locale === "tr" ? "Hızlı İletişim" : "Direktkontakt"}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-white">
                  {locale === "tr"
                    ? "WhatsApp & Telegram"
                    : "Per WhatsApp & Telegram"}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  {locale === "tr"
                    ? "Kısa sorularınız veya ön görüşme talebiniz için bize doğrudan WhatsApp ya da Telegram üzerinden yazabilirsiniz."
                    : "Für kurze Rückfragen oder eine schnelle Terminabstimmung erreichen Sie uns direkt per WhatsApp oder Telegram."}
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={siteConfig.legal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-navy-deep shadow-xs transition-all hover:brightness-105"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {locale === "tr"
                        ? "WhatsApp ile İletişime Geç"
                        : "Über WhatsApp kontaktieren"}
                    </span>
                  </a>

                  <a
                    href={siteConfig.legal.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#229ED9] px-4 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110"
                  >
                    <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {locale === "tr"
                        ? "Telegram ile İletişime Geç"
                        : "Über Telegram kontaktieren"}
                    </span>
                  </a>
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-white/65">
                  {locale === "tr"
                    ? "Not: Lütfen mesajlaşma uygulamaları üzerinden de pasaport veya tıbbi belge göndermeyiniz."
                    : "Hinweis: Bitte senden Sie auch über Messenger keine Reisepässe oder medizinischen Befunde."}
                </p>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-7 shadow-xs">
                <h2 className="font-serif text-2xl font-semibold text-navy">
                  {contact.sidebar.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {contact.sidebar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gold/40 bg-surface p-6 sm:p-7 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Info
                    className="h-4 w-4 text-gold-dark"
                    aria-hidden="true"
                  />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                    {contact.sidebar.legalNoticeTitle}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-muted">
                  {contact.sidebar.legalNoticeBody}
                </p>
                <div className="border-t border-border-subtle pt-3 text-xs text-muted space-y-1">
                  <p className="font-semibold text-navy">
                    {siteConfig.brandName}
                  </p>
                  <p>{siteConfig.legal.streetAddress}</p>
                  <p>
                    {siteConfig.legal.postalCodeCity}, {siteConfig.legal.country}
                  </p>
                  <p>
                    <a
                      href={`mailto:${siteConfig.legal.email}`}
                      className="text-navy hover:text-gold-dark transition-colors"
                    >
                      {siteConfig.legal.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${siteConfig.legal.phoneHref}`}
                      className="text-navy hover:text-gold-dark transition-colors"
                    >
                      {siteConfig.legal.phone}
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
