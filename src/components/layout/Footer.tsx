import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { SharedContent } from "@/content/types";
import { BRAND_ASSETS, STANDARD_CODES } from "@/lib/constants";

export function Footer({ shared }: { shared: SharedContent }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Gold hairline top edge */}
      <div aria-hidden className="h-px w-full bg-gold-hairline" />

      <div className="container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand block */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src={BRAND_ASSETS.emblem}
              alt=""
              width={52}
              height={48}
              className="h-12 w-auto"
            />
            <div>
              <p className="font-heading text-lg font-semibold text-ivory">
                {shared.brand.nameLatin}
              </p>
              <p className="text-sm text-ivory/70">{shared.brand.nameArabic}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70">
            {shared.footer.blurb}
          </p>
          <p className="mt-4 text-sm font-medium tracking-wide text-gold-light">
            {shared.brand.tagline}
          </p>
        </div>

        {/* Link columns */}
        {shared.footer.columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
              {column.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Standards strip */}
      <div className="border-t border-ivory/10">
        <div className="container flex flex-col items-center gap-3 py-6 text-center md:flex-row md:justify-between md:text-start">
          <p className="text-xs uppercase tracking-widest text-ivory/50">
            {shared.footer.standardsCaption}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {STANDARD_CODES.map((code) => (
              <li
                key={code}
                className="text-xs font-semibold tracking-wide text-gold-light/90"
              >
                {code}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-ivory/10">
        <div className="container py-5">
          <p className="text-center text-xs text-ivory/50">
            © {year} {shared.brand.nameLatin} — {shared.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
