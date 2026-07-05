import { ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { PortalContent, SharedContent } from "@/content/types";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export function Topbar({
  portal,
  shared,
  locale,
}: {
  portal: PortalContent;
  shared: SharedContent;
  locale: Locale;
}) {
  return (
    <header className="flex min-h-16 items-center justify-between gap-4 border-b border-neutral-border bg-white px-5">
      <p className="truncate text-sm font-medium text-charcoal">
        {portal.topbar.welcome}
      </p>
      <div className="flex items-center gap-2.5">
        <LanguageSwitcher
          currentLocale={locale}
          label={shared.languageSwitcherLabel}
        />
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-neutral-border px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:bg-gold/10"
        >
          <ExternalLink className="h-4 w-4 text-primary" aria-hidden />
          <span className="hidden sm:inline">{portal.topbar.viewSite}</span>
        </Link>
      </div>
    </header>
  );
}
