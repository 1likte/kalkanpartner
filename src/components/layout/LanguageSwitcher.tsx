"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { ACTIVE_LOCALES, LOCALE_META, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  variant?: "light" | "dark";
}

export function LanguageSwitcher({
  currentLocale,
  variant = "dark",
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const buildLocaleHref = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    if (segments.length > 1 && ACTIVE_LOCALES.includes(segments[1] as Locale)) {
      segments[1] = targetLocale;
      return segments.join("/") || `/${targetLocale}`;
    }
    return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  };

  const containerClasses =
    variant === "light"
      ? "border-white/20 bg-white/10 text-white"
      : "border-border-subtle bg-ivory text-navy";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold ${containerClasses}`}
      aria-label="Language switcher"
    >
      <Globe className="h-3.5 w-3.5 text-gold ml-0.5 mr-0.5" aria-hidden="true" />
      {ACTIVE_LOCALES.map((loc) => {
        const isActive = loc === currentLocale;
        return (
          <Link
            key={loc}
            href={buildLocaleHref(loc)}
            hrefLang={LOCALE_META[loc].htmlLang}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              isActive
                ? "bg-navy text-white shadow-xs"
                : variant === "light"
                  ? "text-white/80 hover:text-white"
                  : "text-muted hover:text-navy"
            }`}
          >
            {LOCALE_META[loc].shortLabel}
          </Link>
        );
      })}
    </div>
  );
}
