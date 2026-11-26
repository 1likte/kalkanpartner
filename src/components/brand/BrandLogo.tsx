import Image from "next/image";

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
  const strokePrimary = isLight ? "#E4D1AA" : "#091933";

  const emblemHeight = variant === "compact" ? 38 : 46;
  const emblemWidth = Math.round(emblemHeight * 0.89);

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <Image
        src="/brand/kp-logo.png"
        alt="KALKAN PARTNER Emblem"
        width={emblemWidth}
        height={emblemHeight}
        priority
        className="shrink-0 object-contain drop-shadow-xs"
      />

      {variant !== "mark" && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif font-semibold tracking-[0.15em] uppercase whitespace-nowrap ${
              variant === "compact" ? "text-[15px]" : "text-[17px] sm:text-[18px]"
            } ${primaryTextColor}`}
          >
            KALKAN{" "}
            <span
              className="font-normal"
              style={{ color: strokePrimary }}
            >
              PARTNER
            </span>
          </span>
          {variant === "full" && showDescriptor && (
            <span
              className={`mt-1 text-[9.5px] font-medium tracking-[0.2em] uppercase whitespace-nowrap ${subTextColor}`}
            >
              International Business &amp; Service Solutions
            </span>
          )}
        </span>
      )}
    </span>
  );
}
