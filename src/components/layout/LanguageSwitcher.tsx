"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  ACTIVE_LOCALES,
  LOCALE_META,
  translateLocalePath,
  type Locale,
} from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  variant?: "light" | "dark";
}

export function LanguageSwitcher({
  currentLocale,
  variant = "dark",
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const containerClasses =
    variant === "light"
      ? "border-white/20 bg-white/10 text-white"
      : "border-border-subtle bg-ivory text-navy";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border px-1.5 py-1 text-xs font-semibold ${containerClasses}`}
      aria-label="Language switcher"
    >
      <Globe className="h-3.5 w-3.5 text-gold ml-1 mr-0.5 shrink-0" aria-hidden="true" />
      {ACTIVE_LOCALES.map((loc) => {
        const isActive = loc === currentLocale;
        return (
          <Link
            key={loc}
            href={translateLocalePath(pathname, loc)}
            hrefLang={LOCALE_META[loc].htmlLang}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-2 py-0.5 transition-colors ${
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
