import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/content";
import { HeroSection } from "@/components/home/HeroSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import { RestaurantSpotlightSection } from "@/components/home/RestaurantSpotlightSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";

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
