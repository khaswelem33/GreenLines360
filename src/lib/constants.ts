/**
 * Non-translatable brand constants shared across all locales.
 * Standard codes are identical in every language; only their
 * descriptive labels are localized in the content layer.
 */
export const STANDARD_CODES = [
  "ISO 22000",
  "FSSC 22000",
  "BRCGS",
  "ISO 9001",
  "ISO 14001",
] as const;

export const BRAND_ASSETS = {
  logoHorizontal: "/brand/H-Logo.svg",
  logoStacked: "/brand/GLI-Full-Logo-Up.svg",
  emblem: "/brand/GLI-icon.svg",
} as const;
