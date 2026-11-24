import type { Locale } from "@/i18n/config";
import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";
import { servicesDe, servicesOverviewDe } from "./de";
import { servicesTr, servicesOverviewTr } from "./tr";

export function getServicesOverview(locale: Locale): ServicesOverviewContent {
  return locale === "tr" ? servicesOverviewTr : servicesOverviewDe;
}

export function getServiceBySlug(
  locale: Locale,
  slug: ServiceSlug
): ServiceDetailContent {
  return locale === "tr" ? servicesTr[slug] : servicesDe[slug];
}

export function getAllServices(locale: Locale): ServiceDetailContent[] {
  const map = locale === "tr" ? servicesTr : servicesDe;
  return Object.values(map);
}
