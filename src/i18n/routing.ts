import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "en", "it", "de", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export interface LocaleMeta {
  code: Locale;
  nativeName: string;
  dir: "rtl" | "ltr";
  hreflang: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ar: { code: "ar", nativeName: "العربية", dir: "rtl", hreflang: "ar" },
  en: { code: "en", nativeName: "English", dir: "ltr", hreflang: "en" },
  it: { code: "it", nativeName: "Italiano", dir: "ltr", hreflang: "it" },
  de: { code: "de", nativeName: "Deutsch", dir: "ltr", hreflang: "de" },
  fr: { code: "fr", nativeName: "Français", dir: "ltr", hreflang: "fr" },
  es: { code: "es", nativeName: "Español", dir: "ltr", hreflang: "es" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
