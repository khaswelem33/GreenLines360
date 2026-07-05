import type { Locale } from "@/i18n/routing";
import type { SiteContent } from "./types";
import ar from "./ar";
import en from "./en";
import it from "./it";
import de from "./de";
import fr from "./fr";
import es from "./es";

const contentByLocale: Record<Locale, SiteContent> = {
  ar,
  en,
  it,
  de,
  fr,
  es,
};

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

export type { SiteContent } from "./types";
