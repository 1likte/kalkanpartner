import React from "react";

export interface SocialLinks {
  instagramUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  whatsappUrl?: string;
  telegramUrl?: string;
}

interface SocialIconsProps {
  links: SocialLinks;
  variant?: "header-bar" | "drawer" | "footer";
  className?: string;
}

interface SocialItem {
  key: keyof SocialLinks;
  label: string;
  icon: React.ReactNode;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    key: "instagramUrl",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: "linkedinUrl",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    key: "facebookUrl",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    key: "youtubeUrl",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: "tiktokUrl",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    key: "whatsappUrl",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    key: "telegramUrl",
    label: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
  },
];

export function SocialIcons({
  links,
  variant = "header-bar",
  className = "",
}: SocialIconsProps) {
  const activeItems = SOCIAL_ITEMS.filter((item) => {
    const url = links[item.key];
    return typeof url === "string" && url.trim().length > 0;
  });

  if (activeItems.length === 0) return null;

  const itemClasses =
    variant === "header-bar"
      ? "inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/90 transition-colors hover:border-gold hover:text-gold-light"
      : variant === "drawer"
        ? "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-navy transition-colors hover:border-gold hover:bg-navy hover:text-gold-light"
        : "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/90 transition-colors hover:border-gold hover:text-gold-light";

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {activeItems.map((item) => {
        const href = (links[item.key] || "").trim();
        return (
          <a
            key={item.key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={itemClasses}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}
