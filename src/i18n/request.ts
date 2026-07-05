import { getRequestConfig } from "next-intl/server";
import { routing, isLocale } from "./routing";

// All visible copy lives in the typed content layer (src/content).
// next-intl is used for locale routing, negotiation, and navigation.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && isLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: {},
  };
});
