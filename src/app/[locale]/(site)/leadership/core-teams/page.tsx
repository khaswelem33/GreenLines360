import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cog, Cpu, HardHat, Truck, Users, Wallet } from "lucide-react";
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
    title: { absolute: leadership.teams.meta.title },
    description: leadership.teams.meta.description,
  };
}

export default async function CoreTeamsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { teams, hub } = leadership;

  return (
    <>
      <LeadershipHero
        eyebrow={hub.hero.eyebrow}
        title={teams.title}
        subtitle={teams.intro}
        slotCode="IMG-LEADERSHIP-TEAMS-01"
        locale={locale}
        hints={leadership.placeholderHints}
      />
      <LeadershipCardsGrid
        items={teams.cards}
        icons={[Users, Cpu, Wallet, Truck, HardHat, Cog]}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
        tone="white"
      />
    </>
  );
}
