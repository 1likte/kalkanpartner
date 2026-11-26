"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
  Send,
  Phone,
  Mail,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/types";
import type { SiteSettings } from "@/lib/cms";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { SocialIcons } from "@/components/brand/SocialIcons";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
  site: SiteSettings;
}

export function Header({ locale, dict, site }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const aboutLabel =
    locale === "tr" ? "Hakkımızda" : locale === "en" ? "About" : "Über uns";
  const socialLabel =
    locale === "tr"
      ? "Sosyal Medya"
      : locale === "en"
        ? "Social Media"
        : "Social Media";

  const navItems = [
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.restaurant, href: `/${locale}/services/restaurant-kitchen` },
    { label: aboutLabel, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
    { label: dict.nav.network, href: `/${locale}/international-network` },
    { label: "Insights", href: `/${locale}/insights` },
    { label: "FAQ", href: `/${locale}/faq` },
  ];

  // Lock background scroll and allow Escape key to close the side drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

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

  const socialLinks = {
    instagramUrl: site.instagramUrl,
    linkedinUrl: site.linkedinUrl,
    facebookUrl: site.facebookUrl,
    youtubeUrl: site.youtubeUrl,
    tiktokUrl: site.tiktokUrl,
    whatsappUrl: site.whatsappUrl,
    telegramUrl: site.telegramUrl,
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border-subtle/80 bg-surface/95 backdrop-blur-md">
        {/* Desktop Top Utility Bar: Contact + Admin-Managed Social Icons */}
        <div className="hidden lg:block bg-navy-deep text-white/90 border-b border-gold/20">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs">
            <div className="flex items-center gap-5">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-gold-light transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>{site.phone}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-gold-light transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>{site.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-light/85">
                {socialLabel}
              </span>
              <SocialIcons links={socialLinks} variant="header-bar" />
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Clean Logo */}
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
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-navy transition-colors hover:bg-ivory"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-side-drawer"
              aria-label={dict.nav.openMenuLabel}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side-Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-navy-deep/60 backdrop-blur-xs"
        />

        {/* Slide-in Side Panel (Right) */}
        <aside
          id="mobile-side-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 flex h-full w-80 max-w-[85vw] flex-col bg-surface shadow-2xl border-l border-border-subtle transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-border-subtle px-5">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="KALKAN PARTNER Home"
            >
              <BrandLogo variant="compact" theme="dark" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-ivory text-navy transition-colors hover:border-gold"
              aria-label={dict.nav.closeMenuLabel}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Drawer Social Media Strip - Directly Above Navigation Buttons */}
          <div className="shrink-0 border-b border-border-subtle bg-ivory/80 px-5 py-3.5 space-y-2">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
              {socialLabel}
            </p>
            <SocialIcons links={socialLinks} variant="drawer" />
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-5 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "border-navy bg-navy text-white shadow-xs"
                      : "border-border-subtle bg-ivory/75 text-navy hover:border-gold hover:bg-surface"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    className={`h-4 w-4 ${active ? "text-gold-light" : "text-muted"}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer: CTA + WhatsApp & Telegram */}
          <div className="shrink-0 border-t border-border-subtle bg-ivory/70 p-5 space-y-3">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-mid"
            >
              <span>{dict.nav.primaryCta}</span>
              <ArrowUpRight className="h-4 w-4 text-gold-light" aria-hidden="true" />
            </Link>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-navy-deep transition-all hover:brightness-105"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href={site.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#229ED9] px-3 py-2 text-xs font-semibold text-white transition-all hover:brightness-110"
              >
                <Send className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
