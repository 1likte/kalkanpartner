import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
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
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

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
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: dict.meta.title,
      template: "%s | KALKAN PARTNER",
    },
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

export default async function LocaleRootLayout({
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

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${site.owner} – ${site.brandName}`,
    alternateName: site.brandName,
    url: siteConfig.siteUrl,
    description: dict.meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      postalCode: "79739",
      addressLocality: "Schwörstadt",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneHref,
      email: site.email,
      availableLanguage: ["German", "Turkish", "English"],
    },
    areaServed: ["DE", "TR"],
  };

  return (
    <html
      lang={LOCALE_META[typedLocale].htmlLang}
      className={`${plusJakarta.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header
          locale={typedLocale}
          dict={dict}
          site={site}
        />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} dict={dict} site={site} />
      </body>
    </html>
  );
}
