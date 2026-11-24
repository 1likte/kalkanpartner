import React from "react";

interface BrandLogoProps {
  variant?: "full" | "compact" | "mark";
  theme?: "dark" | "light";
  showDescriptor?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "full",
  theme = "dark",
  showDescriptor = true,
  className = "",
}: BrandLogoProps) {
  const isLight = theme === "light";
  const primaryTextColor = isLight ? "text-white" : "text-navy";
  const subTextColor = isLight ? "text-gold-light" : "text-muted";
  const strokePrimary = isLight ? "#FFFFFF" : "#0B1D3A";
  const shieldFill = isLight ? "rgba(255,255,255,0.06)" : "#0B1D3A";
  const emblemKStroke = "#FFFFFF";

  const emblemSize = variant === "compact" ? 34 : 40;

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={emblemSize}
        height={emblemSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="64"
          height="64"
          rx="12"
          fill={shieldFill}
          stroke={isLight ? "rgba(197,165,103,0.45)" : "transparent"}
          strokeWidth={isLight ? "1.5" : "0"}
        />
        <path
          d="M32 10L50 17.5V31.5C50 43.2 42.3 51.3 32 55C21.7 51.3 14 43.2 14 31.5V17.5L32 10Z"
          stroke="#C5A567"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 21V43"
          stroke={emblemKStroke}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M39.5 21.5L27 32L40 43"
          stroke="#C5A567"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {variant !== "mark" && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif font-semibold tracking-[0.16em] uppercase ${
              variant === "compact" ? "text-[15px]" : "text-[18px] sm:text-[19px]"
            } ${primaryTextColor}`}
          >
            KALKAN{" "}
            <span
              className="font-normal"
              style={{ color: isLight ? "#DFCA9F" : strokePrimary }}
            >
              PARTNER
            </span>
          </span>
          {variant === "full" && showDescriptor && (
            <span
              className={`mt-1 text-[9.5px] font-medium tracking-[0.2em] uppercase ${subTextColor}`}
            >
              International Business &amp; Service Solutions
            </span>
          )}
        </span>
      )}
    </span>
  );
}
