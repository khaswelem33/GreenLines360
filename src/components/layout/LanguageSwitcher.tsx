"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeMeta, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  currentLocale,
  label,
}: {
  currentLocale: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-neutral-border bg-white/60 px-3.5 py-2 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:bg-gold/10"
      >
        <Globe className="h-4 w-4 text-primary" aria-hidden />
        <span>{localeMeta[currentLocale].nativeName}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-neutral transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute end-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-neutral-border bg-white py-1.5 shadow-card"
        >
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            return (
              <li key={locale} role="option" aria-selected={isActive}>
                <Link
                  href={pathname}
                  locale={locale}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-ivory",
                    isActive
                      ? "font-semibold text-primary"
                      : "text-charcoal"
                  )}
                >
                  <span>{localeMeta[locale].nativeName}</span>
                  <span className="text-xs uppercase text-neutral-light">
                    {locale}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
