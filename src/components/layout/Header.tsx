"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { SharedContent } from "@/content/types";
import { BRAND_ASSETS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BusinessSectorsMegaMenu } from "./BusinessSectorsMegaMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavDropdown } from "./NavDropdown";
import { LoginButton } from "./LoginButton";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header({
  shared,
  locale,
}: {
  shared: SharedContent;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const { navigation } = shared;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-neutral-border bg-ivory/85 backdrop-blur-md transition-shadow motion-reduce:transition-none",
        scrolled && "shadow-soft"
      )}
    >
      <div className="container relative flex min-h-20 items-center justify-between gap-4 md:min-h-[5.5rem]">
        {/* Brand — original logo asset, used as-is; start-aligned so it
            sits right in Arabic (RTL) and left in LTR locales */}
        <Link
          href="/"
          aria-label={shared.brand.siteName}
          className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
        >
          <Image
            src={BRAND_ASSETS.logoHorizontal}
            alt={shared.brand.siteName}
            width={252}
            height={72}
            priority
            className="h-16 w-auto md:h-[4.5rem]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label={shared.brand.siteName}
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {navigation.main.map((item) => {
            if (item.hasMegaMenu) {
              return (
                <BusinessSectorsMegaMenu
                  key={item.key}
                  item={item}
                  menu={navigation.megaMenus.businessSectors}
                />
              );
            }
            if (item.dropdown?.length) {
              return (
                <NavDropdown key={item.key} item={item} items={item.dropdown} />
              );
            }
            return (
              <NavLink key={item.key} href={item.href} label={item.label} />
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher
            currentLocale={locale}
            label={shared.languageSwitcherLabel}
          />
          <LoginButton
            label={navigation.login}
            className="hidden sm:inline-flex"
          />
          <MobileMenu
            navigation={navigation}
            currentLocale={locale}
            languageLabel={shared.languageSwitcherLabel}
          />
        </div>
      </div>
    </header>
  );
}
