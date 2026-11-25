import type { Locale } from "@/i18n/config";
import { deepMerge, readCmsOverridesFromDisk } from "@/lib/cms";
import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";
import { SERVICE_SLUGS } from "./types";
import { servicesDe, servicesOverviewDe } from "./de";
import { servicesTr, servicesOverviewTr } from "./tr";
import { servicesEn, servicesOverviewEn } from "./en";

export const baseServicesOverview: Record<Locale, ServicesOverviewContent> = {
  de: servicesOverviewDe,
  tr: servicesOverviewTr,
  en: servicesOverviewEn,
};

export const baseServicesByLocale: Record<
  Locale,
  Record<ServiceSlug, ServiceDetailContent>
> = {
  de: servicesDe,
  tr: servicesTr,
  en: servicesEn,
};

export function getServicesOverview(locale: Locale): ServicesOverviewContent {
  const overrides = readCmsOverridesFromDisk();
  return deepMerge(
    baseServicesOverview[locale],
    overrides.servicesOverview?.[locale]
  );
}

export function getServiceBySlug(
  locale: Locale,
  slug: ServiceSlug
): ServiceDetailContent {
  const overrides = readCmsOverridesFromDisk();
  return deepMerge(
    baseServicesByLocale[locale][slug],
    overrides.services?.[locale]?.[slug]
  );
}

export function getAllServices(locale: Locale): ServiceDetailContent[] {
  return SERVICE_SLUGS.map((slug) => getServiceBySlug(locale, slug));
}
