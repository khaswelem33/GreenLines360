"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeMeta, type Locale } from "@/i18n/routing";
import type { NavigationContent } from "@/content/types";
import { cn } from "@/lib/utils";
import { LoginButton } from "./LoginButton";
import { NavLink } from "./NavLink";
import { sectorIcons } from "./sectorIcons";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

/**
 * Mobile navigation drawer with accordion behavior for Business Sectors.
 * Focus-trapped, Escape to close, body scroll locked while open.
 */
export function MobileMenu({
  navigation,
  currentLocale,
  languageLabel,
}: {
  navigation: NavigationContent;
  currentLocale: Locale;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerId = useId();
  const accordionId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setOpenKey(null);
  }, []);

  // Escape, focus trap, body scroll lock
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const drawer = drawerRef.current;
    drawer?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !drawer) return;
      const focusables = Array.from(
        drawer.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
      triggerRef.current?.focus();
    };
  }, [open, close]);

  const megaMenu = navigation.megaMenus.businessSectors;

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label={open ? navigation.closeLabel : navigation.menuLabel}
        onClick={() => (open ? close() : setOpen(true))}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-border text-charcoal transition-colors hover:border-gold hover:bg-gold/10 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <button
            type="button"
            tabIndex={-1}
            aria-label={navigation.closeLabel}
            onClick={close}
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <div
            ref={drawerRef}
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label={navigation.menuLabel}
            className="absolute inset-y-0 end-0 flex w-[22rem] max-w-[90vw] flex-col overflow-y-auto bg-ivory-light shadow-lifted"
          >
            <div className="flex items-center justify-between border-b border-neutral-border px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                {navigation.menuLabel}
              </p>
              <button
                type="button"
                aria-label={navigation.closeLabel}
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-border text-charcoal hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="flex flex-col px-5 py-4">
              {navigation.main.map((item) => {
                if (item.dropdown?.length) {
                  const isExpanded = openKey === item.key;
                  return (
                    <div
                      key={item.key}
                      className="border-b border-neutral-border/60"
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`${accordionId}-${item.key}`}
                        onClick={() =>
                          setOpenKey(isExpanded ? null : item.key)
                        }
                        className={cn(
                          "flex w-full items-center justify-between py-3 text-base font-medium transition-colors motion-reduce:transition-none",
                          pathname.startsWith(item.href)
                            ? "text-primary"
                            : "text-charcoal hover:text-primary",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-neutral transition-transform motion-reduce:transition-none",
                            isExpanded && "rotate-180"
                          )}
                          aria-hidden
                        />
                      </button>
                      {isExpanded ? (
                        <ul
                          id={`${accordionId}-${item.key}`}
                          className="pb-3 ps-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.key}>
                              <Link
                                href={subItem.href}
                                onClick={close}
                                className="block rounded-lg px-2 py-2.5 text-sm text-charcoal transition-colors hover:bg-white hover:text-primary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                }

                if (item.hasMegaMenu) {
                  const isExpanded = openKey === item.key;
                  return (
                    <div
                      key={item.key}
                      className="border-b border-neutral-border/60"
                    >
                      {/* Accordion trigger */}
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={accordionId}
                        onClick={() =>
                          setOpenKey(isExpanded ? null : item.key)
                        }
                        className={cn(
                          "flex w-full items-center justify-between py-3 text-base font-medium transition-colors motion-reduce:transition-none",
                          pathname.startsWith(item.href)
                            ? "text-primary"
                            : "text-charcoal hover:text-primary",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-neutral transition-transform motion-reduce:transition-none",
                            isExpanded && "rotate-180"
                          )}
                          aria-hidden
                        />
                      </button>

                      {/* Accordion panel — compact sector list */}
                      {isExpanded ? (
                        <ul id={accordionId} className="pb-3 ps-2">
                          {megaMenu.sectors.map((sector) => {
                            const Icon = sectorIcons[sector.icon];
                            return (
                              <li key={sector.key}>
                                <Link
                                  href={sector.href}
                                  onClick={close}
                                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-charcoal transition-colors hover:bg-white hover:text-primary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                                >
                                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white text-primary">
                                    <Icon className="h-4 w-4" aria-hidden />
                                  </span>
                                  {sector.title}
                                </Link>
                              </li>
                            );
                          })}
                          <li>
                            <Link
                              href={megaMenu.ctaHref}
                              onClick={close}
                              className="mt-1 flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-semibold text-primary hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                              {megaMenu.ctaLabel}
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.key}
                    href={item.href}
                    label={item.label}
                    onClick={close}
                    className="border-b border-neutral-border/60 py-3 text-base after:hidden"
                  />
                );
              })}

              <LoginButton
                label={navigation.login}
                onClick={close}
                className="mt-5 w-full"
              />

              {/* Language switcher — all six languages */}
              <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-neutral">
                {languageLabel}
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-1">
                {locales.map((locale) => {
                  const isActive = locale === currentLocale;
                  return (
                    <li key={locale}>
                      <Link
                        href={pathname}
                        locale={locale}
                        onClick={close}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors motion-reduce:transition-none",
                          isActive
                            ? "bg-white font-semibold text-primary"
                            : "text-charcoal hover:bg-white",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
