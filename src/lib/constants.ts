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

/** Official contact channels (not translated). */
export const CONTACT_INFO = {
  phones: ["+201008866858", "+201555292066", "+20554669823"],
  emails: ["info@greenlines360.com", "khalidswelem2@gmail.com"],
  coordinates: "30.321802,31.744612",
  mapsUrl: "https://www.google.com/maps?q=30.321802,31.744612",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=30.321802,31.744612&z=15&output=embed",
} as const;

export const BRAND_ASSETS = {
  logoHorizontal: "/brand/H-Logo.svg",
  logoStacked: "/brand/GLI-Full-Logo-Up.svg",
  emblem: "/brand/GLI-icon.svg",
} as const;
