"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.restaurant, href: `/${locale}/services/restaurant-kitchen` },
    { label: locale === "tr" ? "Hakkımızda" : "Über uns", href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
    { label: dict.nav.network, href: `/${locale}/international-network` },
    { label: "Insights", href: `/${locale}/insights` },
    { label: "FAQ", href: `/${locale}/faq` },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === `/${locale}/services`) {
      return (
        pathname === href ||
        (pathname.startsWith(`${href}/`) &&
          pathname !== `/${locale}/services/restaurant-kitchen`)
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Clean Logo without elongated subtitle */}
        <Link
          href={`/${locale}`}
          className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
          aria-label="KALKAN PARTNER Home"
        >
          <span className="hidden sm:inline-flex">
            <BrandLogo variant="full" theme="dark" showDescriptor={false} />
          </span>
          <span className="inline-flex sm:hidden">
            <BrandLogo variant="compact" theme="dark" />
          </span>
        </Link>

        {/* Desktop Navigation - Real Tactile Buttons */}
        <nav
          className="hidden lg:flex items-center gap-1.5 xl:gap-2"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-lg border px-2.5 py-1.5 xl:px-3 text-[13px] font-medium transition-all ${
                  active
                    ? "border-navy bg-navy text-white shadow-xs"
                    : "border-border-subtle/90 bg-ivory/80 text-navy hover:border-gold hover:bg-surface hover:shadow-xs"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions - Refined & Single-line */}
        <div className="hidden lg:flex shrink-0 items-center gap-2.5 xl:gap-3">
          <LanguageSwitcher currentLocale={locale} variant="dark" />
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-gold/40 bg-navy px-4 py-2 text-[13px] font-semibold text-white shadow-xs transition-all hover:bg-navy-mid hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <span>{dict.nav.primaryCta}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-gold-light shrink-0" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <LanguageSwitcher currentLocale={locale} variant="dark" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-navy transition-colors hover:bg-ivory"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? dict.nav.closeMenuLabel : dict.nav.openMenuLabel
            }
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-border-subtle bg-surface lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-border-subtle bg-ivory/70 text-navy hover:border-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 pt-3 border-t border-border-subtle">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-mid"
              >
                <span>{dict.nav.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
