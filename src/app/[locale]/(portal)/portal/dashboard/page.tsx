import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { portal } = getContent(locale);
  return {
    title: portal.meta.title,
    description: portal.meta.description,
    robots: { index: false },
  };
}

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { portal } = getContent(locale);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-heading text-2xl font-semibold text-charcoal md:text-3xl">
        {portal.dashboard.title}
      </h1>
      <p className="mt-1.5 text-sm text-neutral md:text-base">
        {portal.dashboard.subtitle}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portal.dashboard.cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-neutral-border bg-white p-5 shadow-soft"
          >
            <p className="text-sm font-medium text-neutral">{card.label}</p>
            <p
              aria-hidden
              className="mt-3 font-heading text-3xl font-semibold text-charcoal/30"
            >
              —
            </p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-light">
              {card.hint}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-2.5 rounded-2xl border border-gold/40 bg-gold/10 p-5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
        <p className="text-sm leading-relaxed text-charcoal/80">
          {portal.dashboard.notice}
        </p>
      </div>
    </div>
  );
}
