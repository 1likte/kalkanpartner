import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, LOCALE_META } from "@/i18n/config";
import { getDictionary } from "@/content";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/home/HeroSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import { RestaurantSpotlightSection } from "@/components/home/RestaurantSpotlightSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";

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

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <DepartmentsSection locale={locale} dict={dict} />
      <WhyUsSection dict={dict} />
      <HowWeWorkSection dict={dict} />
      <InternationalSection dict={dict} />
      <RestaurantSpotlightSection locale={locale} dict={dict} />
      <ContactCtaSection locale={locale} dict={dict} />
    </>
  );
}
