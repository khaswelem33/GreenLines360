import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  FileCheck,
  FlaskConical,
  Settings,
  ShieldCheck,
  Truck,
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
    title: { absolute: leadership.experts.meta.title },
    description: leadership.experts.meta.description,
  };
}

export default async function ExpertNetworkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { experts, hub } = leadership;

  return (
    <>
      <LeadershipHero
        eyebrow={hub.hero.eyebrow}
        title={experts.title}
        subtitle={experts.intro}
        slotCode="IMG-LEADERSHIP-EXPERTS-01"
        locale={locale}
        hints={leadership.placeholderHints}
      />
      <LeadershipCardsGrid
        items={experts.cards}
        icons={[
          ShieldCheck,
          BadgeCheck,
          FlaskConical,
          FileCheck,
          Settings,
          Truck,
        ]}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
        tone="white"
      />
    </>
  );
}
