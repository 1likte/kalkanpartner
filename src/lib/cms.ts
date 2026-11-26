import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";
import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "@/content/services/types";
import type { CorporatePagesContent } from "@/content/pages/types";
import type { LocaleLegalDictionary } from "@/content/legal/types";

export interface SiteSettings {
  brandName: string;
  descriptor: string;
  domain: string;
  owner: string;
  companyLegalName: string;
  streetAddress: string;
  postalCodeCity: string;
  country: string;
  email: string;
  phone: string;
  phoneHref: string;
  whatsappUrl: string;
  telegramUrl: string;
  mstvResponsible: string;
  commercialRegister: string;
  vatId: string;
  supervisoryAuthority: string;
}

export interface CmsOverrides {
  site?: Partial<SiteSettings>;
  dictionary?: Partial<Record<Locale, Partial<Dictionary>>>;
  servicesOverview?: Partial<Record<Locale, Partial<ServicesOverviewContent>>>;
  services?: Partial<
    Record<Locale, Partial<Record<ServiceSlug, Partial<ServiceDetailContent>>>>
  >;
  pages?: Partial<Record<Locale, Partial<CorporatePagesContent>>>;
  legal?: Partial<Record<Locale, Partial<LocaleLegalDictionary>>>;
}

export const CMS_OVERRIDES_REL_PATH = "src/content/cms-overrides.json";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) {
    return base;
  }
  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      const ov = override[key];
      if (ov !== undefined) {
        result[key] =
          key in base ? deepMerge(result[key], ov) : ov;
      }
    }
    return result as T;
  }
  return (typeof override === typeof base ? override : base) as T;
}

export function readCmsOverridesFromDisk(): CmsOverrides {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "cms-overrides.json"
    );
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw) as CmsOverrides;
    return isPlainObject(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function getDefaultSiteSettings(): SiteSettings {
  return {
    brandName: siteConfig.brandName,
    descriptor: siteConfig.descriptor,
    domain: siteConfig.domain,
    owner: siteConfig.legal.owner,
    companyLegalName: siteConfig.legal.companyLegalName,
    streetAddress: siteConfig.legal.streetAddress,
    postalCodeCity: siteConfig.legal.postalCodeCity,
    country: siteConfig.legal.country,
    email: siteConfig.legal.email,
    phone: siteConfig.legal.phone,
    phoneHref: siteConfig.legal.phoneHref,
    whatsappUrl: siteConfig.legal.whatsappUrl,
    telegramUrl: siteConfig.legal.telegramUrl,
    mstvResponsible: siteConfig.legal.mstvResponsible,
    commercialRegister: siteConfig.legal.commercialRegister,
    vatId: siteConfig.legal.vatId,
    supervisoryAuthority: siteConfig.legal.supervisoryAuthority,
  };
}

export function getSiteSettings(): SiteSettings {
  const overrides = readCmsOverridesFromDisk();
  return deepMerge(getDefaultSiteSettings(), overrides.site);
}
