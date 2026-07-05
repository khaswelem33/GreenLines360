"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import type { MainNavItem, MegaMenuSectorsContent } from "@/content/types";
import { cn } from "@/lib/utils";
import { sectorIcons } from "./sectorIcons";

const CLOSE_DELAY_MS = 150;

/**
 * Desktop mega menu for Business Sectors.
 * Opens on hover and keyboard focus, toggles on click, closes on
 * Escape / outside click / focus leaving the menu.
 */
export function BusinessSectorsMegaMenu({
  item,
  menu,
}: {
  item: MainNavItem;
  menu: MegaMenuSectorsContent;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByFocus = useRef(false);
  const panelId = useId();

  const isActive = pathname.startsWith(item.href);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    if (open) {
      document.addEventListener("mousedown", onPointerDown);
      document.addEventListener("touchstart", onPointerDown);
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => cancelClose, [cancelClose]);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        // Close when keyboard focus moves outside the whole menu
        if (
          rootRef.current &&
          !rootRef.current.contains(event.relatedTarget as Node)
        ) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        aria-current={isActive ? "page" : undefined}
        onFocus={() => {
          if (!open) {
            setOpen(true);
            openedByFocus.current = true;
          }
        }}
        onClick={() => {
          if (openedByFocus.current) {
            openedByFocus.current = false;
            setOpen(true);
          } else {
            setOpen((v) => !v);
          }
        }}
        className={cn(
          "relative inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors motion-reduce:transition-none",
          isActive || open ? "text-primary" : "text-charcoal hover:text-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm",
          "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-gold after:transition-transform motion-reduce:after:transition-none",
          isActive && "after:scale-x-100"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-neutral transition-transform motion-reduce:transition-none",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full z-40 pt-3"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-lifted">
            <span aria-hidden className="block h-0.5 w-full bg-gold-hairline" />
            <div className="grid gap-6 p-6 md:p-7 lg:grid-cols-[minmax(230px,280px)_1fr]">
              {/* Featured panel */}
              <div className="flex flex-col justify-between rounded-xl bg-hero-gradient p-6 text-ivory">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                    {menu.eyebrow}
                  </p>
                  <p className="mt-3 font-heading text-xl font-semibold leading-snug">
                    {menu.title}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-ivory/80">
                    {menu.description}
                  </p>
                </div>
                <Link
                  href={menu.ctaHref}
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex min-h-10 items-center justify-center rounded-full bg-gold px-5 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-gold-light motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                >
                  {menu.ctaLabel}
                </Link>
              </div>

              {/* Six sector cards — high-level only */}
              <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {menu.sectors.map((sector) => {
                  const Icon = sectorIcons[sector.icon];
                  return (
                    <li key={sector.key}>
                      <Link
                        href={sector.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex h-full gap-3 rounded-xl border border-transparent p-4 transition-colors motion-reduce:transition-none",
                          "hover:border-gold/40 hover:bg-ivory",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                        )}
                      >
                        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-primary">
                            {sector.title}
                            <ArrowRight
                              className="hidden h-3.5 w-3.5 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none ltr:inline"
                              aria-hidden
                            />
                            <ArrowLeft
                              className="hidden h-3.5 w-3.5 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none rtl:inline"
                              aria-hidden
                            />
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-neutral">
                            {sector.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
