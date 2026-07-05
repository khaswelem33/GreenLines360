import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  Compass,
  Factory,
  Scale,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";
import { LeadershipCardsGrid } from "@/components/leadership/LeadershipCardsGrid";
import { LeadershipHero } from "@/components/leadership/LeadershipHero";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { leadership } = getContent(locale);
  return {
    title: { absolute: leadership.advisory.meta.title },
    description: leadership.advisory.meta.description,
  };
}

export default async function AdvisoryCouncilPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { advisory, hub } = leadership;

  return (
    <>
      <LeadershipHero
        eyebrow={hub.hero.eyebrow}
        title={advisory.title}
        subtitle={advisory.intro}
        slotCode="IMG-LEADERSHIP-ADVISORY-01"
        locale={locale}
        hints={leadership.placeholderHints}
      />
      <LeadershipCardsGrid
        items={advisory.cards}
        icons={[Sprout, Factory, Compass, Scale, TrendingUp, ShieldCheck]}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
        tone="white"
      />
    </>
  );
}
