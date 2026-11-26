import type { MetadataRoute } from "next";
import { ACTIVE_LOCALES, LEGAL_SLUGS, type LegalDocKey } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { SERVICE_SLUGS } from "@/content/services/types";
import { getAllInsightSlugs } from "@/content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const insightSlugs = getAllInsightSlugs();

  const staticPaths = [
    "",
    "/services",
    "/about",
    "/how-we-work",
    "/international-network",
    "/insights",
    "/faq",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    for (const locale of ACTIVE_LOCALES) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        changeFrequency: path === "" || path === "/insights" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : path === "/services" ? 0.9 : 0.8,
        alternates: {
          languages: {
            "de-DE": `${baseUrl}/de${path}`,
            "tr-TR": `${baseUrl}/tr${path}`,
            "en-US": `${baseUrl}/en${path}`,
          },
        },
      });
    }
  }

  for (const slug of SERVICE_SLUGS) {
    for (const locale of ACTIVE_LOCALES) {
      entries.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        changeFrequency: "monthly",
        priority: slug === "restaurant-kitchen" ? 0.95 : 0.85,
        alternates: {
          languages: {
            "de-DE": `${baseUrl}/de/services/${slug}`,
            "tr-TR": `${baseUrl}/tr/services/${slug}`,
            "en-US": `${baseUrl}/en/services/${slug}`,
          },
        },
      });
    }
  }

  for (const slug of insightSlugs) {
    for (const locale of ACTIVE_LOCALES) {
      entries.push({
        url: `${baseUrl}/${locale}/insights/${slug}`,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: {
            "de-DE": `${baseUrl}/de/insights/${slug}`,
            "tr-TR": `${baseUrl}/tr/insights/${slug}`,
            "en-US": `${baseUrl}/en/insights/${slug}`,
          },
        },
      });
    }
  }

  for (const docKey of ["imprint", "privacy", "terms"] as LegalDocKey[]) {
    for (const locale of ACTIVE_LOCALES) {
      entries.push({
        url: `${baseUrl}/${locale}/${LEGAL_SLUGS[locale][docKey]}`,
        changeFrequency: "yearly",
        priority: 0.4,
        alternates: {
          languages: {
            "de-DE": `${baseUrl}/de/${LEGAL_SLUGS.de[docKey]}`,
            "tr-TR": `${baseUrl}/tr/${LEGAL_SLUGS.tr[docKey]}`,
            "en-US": `${baseUrl}/en/${LEGAL_SLUGS.en[docKey]}`,
          },
        },
      });
    }
  }

  return entries;
}
