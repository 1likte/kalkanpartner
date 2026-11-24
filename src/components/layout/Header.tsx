"use client";

import { useState } from "react";
import Link from "next/link";
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

  const navItems = [
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.restaurant, href: `/${locale}/services/restaurant-kitchen` },
    { label: locale === "tr" ? "Hakkımızda" : "Über uns", href: `/${locale}/about` },
    { label: dict.nav.howWeWork, href: `/${locale}/how-we-work` },
    { label: dict.nav.network, href: `/${locale}/international-network` },
    { label: "Insights", href: `/${locale}/insights` },
    { label: "FAQ", href: `/${locale}/faq` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
          aria-label="KALKAN PARTNER Home"
        >
          <span className="hidden sm:inline-flex">
            <BrandLogo variant="full" theme="dark" showDescriptor />
          </span>
          <span className="inline-flex sm:hidden">
            <BrandLogo variant="compact" theme="dark" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/85 transition-colors hover:text-navy relative after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher currentLocale={locale} variant="dark" />
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <span>{dict.nav.primaryCta}</span>
            <ArrowUpRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <LanguageSwitcher currentLocale={locale} variant="dark" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle bg-surface text-navy transition-colors hover:bg-ivory"
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
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-ivory hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border-subtle">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid"
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
