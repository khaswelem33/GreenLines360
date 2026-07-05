import Image from "next/image";
import {
  FileText,
  LayoutDashboard,
  Package,
  ScanSearch,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { PortalContent, PortalNavKey } from "@/content/types";
import { BRAND_ASSETS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const portalIcons: Record<PortalNavKey, LucideIcon> = {
  dashboard: LayoutDashboard,
  documents: FileText,
  orders: Package,
  traceability: ScanSearch,
  settings: Settings,
};

export function Sidebar({ portal }: { portal: PortalContent }) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-e border-neutral-border bg-white lg:min-h-screen lg:w-auto lg:min-w-60 lg:max-w-72">
      <div className="flex items-center gap-3 border-b border-neutral-border px-5 py-5">
        <Image
          src={BRAND_ASSETS.emblem}
          alt=""
          width={36}
          height={33}
          className="h-9 w-auto"
        />
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
          {portal.sidebar.portalLabel}
        </span>
      </div>

      <nav
        aria-label={portal.sidebar.portalLabel}
        className="flex flex-row gap-1 overflow-x-auto p-3 lg:flex-col lg:overflow-visible"
      >
        {portal.sidebar.items.map((item) => {
          const Icon = portalIcons[item.key];
          const isDashboard = item.key === "dashboard";

          if (item.soon) {
            return (
              <span
                key={item.key}
                aria-disabled="true"
                className="flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-neutral-light"
              >
                <Icon className="h-5 w-5" aria-hidden />
                <span className="whitespace-nowrap">{item.label}</span>
                <span className="ms-auto rounded-full bg-ivory px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                  {portal.comingSoonBadge}
                </span>
              </span>
            );
          }

          return (
            <Link
              key={item.key}
              href="/portal/dashboard"
              aria-current={isDashboard ? "page" : undefined}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                isDashboard
                  ? "bg-primary text-ivory"
                  : "text-charcoal hover:bg-ivory"
              )}
            >
              <Icon className="h-5 w-5" aria-hidden />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
