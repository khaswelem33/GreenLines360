import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Root
    "/",
    // Locale-prefixed paths
    "/(ar|en|it|de|fr|es)/:path*",
    // All paths except internals and files with an extension
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
