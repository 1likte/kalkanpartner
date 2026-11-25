import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ACTIVE_LOCALES,
  isValidLocale,
  LOCALE_META,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/content";
import { siteConfig } from "@/config/site";
import { getSiteSettings } from "@/lib/cms";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return ACTIVE_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = getDictionary(locale);
  const meta = LOCALE_META[locale];

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "de-DE": "/de",
        "tr-TR": "/tr",
        "en-US": "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: meta.ogLocale,
      siteName: siteConfig.brandName,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);
  const site = getSiteSettings();

  // Verified Organization structured data only (no fabricated address, phone, or registration numbers)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    url: siteConfig.siteUrl,
    description: dict.meta.description,
    areaServed: ["DE", "TR"],
    availableLanguage: ["German", "Turkish", "English"],
  };

  return (
    <div lang={LOCALE_META[typedLocale].htmlLang} className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header
        locale={typedLocale}
        dict={dict}
        whatsappUrl={site.whatsappUrl}
        telegramUrl={site.telegramUrl}
      />
      <main className="flex-1">{children}</main>
      <Footer locale={typedLocale} dict={dict} site={site} />
    </div>
  );
}
