"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import type { MainNavItem, NavItem } from "@/content/types";
import { cn } from "@/lib/utils";

const CLOSE_DELAY_MS = 150;

/** Compact premium dropdown for nav items with sub-links (e.g. Leadership & Governance). */
export function NavDropdown({
  item,
  items,
}: {
  item: MainNavItem;
  items: NavItem[];
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
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
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
          "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
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
        <div id={panelId} className="absolute start-0 top-full z-40 pt-3">
          <div className="w-64 overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-lifted">
            <span aria-hidden className="block h-0.5 w-full bg-gold-hairline" />
            <ul className="py-2">
              {items.map((subItem) => {
                const subActive =
                  subItem.href === item.href
                    ? pathname === subItem.href
                    : pathname.startsWith(subItem.href);
                return (
                  <li key={subItem.key}>
                    <Link
                      href={subItem.href}
                      onClick={() => setOpen(false)}
                      aria-current={subActive ? "page" : undefined}
                      className={cn(
                        "block px-5 py-2.5 text-sm transition-colors motion-reduce:transition-none hover:bg-ivory hover:text-primary",
                        subActive
                          ? "font-semibold text-primary"
                          : "text-charcoal",
                        "focus-visible:outline-none focus-visible:bg-ivory focus-visible:text-primary"
                      )}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
