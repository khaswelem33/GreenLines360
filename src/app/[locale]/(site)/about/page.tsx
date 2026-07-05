import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHero } from "@/components/about/AboutHero";
import { CoreStrengthsSection } from "@/components/about/CoreStrengthsSection";
import { EcosystemVisualSection } from "@/components/about/EcosystemVisualSection";
import { LeadershipMessageSection } from "@/components/about/LeadershipMessageSection";
import { PositioningSection } from "@/components/about/PositioningSection";
import { ValueJourneySection } from "@/components/about/ValueJourneySection";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { StandardsStrip } from "@/components/sections/StandardsStrip";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { about } = getContent(locale);
  return {
    title: { absolute: about.meta.title },
    description: about.meta.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { about } = getContent(locale);

  return (
    <>
      <AboutHero about={about} locale={locale} />
      <WhoWeAreSection about={about} locale={locale} />
      <PositioningSection about={about} />
      <VisionMissionSection about={about} />
      <ValueJourneySection about={about} />
      <EcosystemVisualSection about={about} locale={locale} />
      <CoreStrengthsSection about={about} />
      <QuoteBand text={about.qualityQuote.text} />
      <StandardsStrip standards={about.standards} />
      <LeadershipMessageSection about={about} />
      <AboutCtaSection about={about} />
    </>
  );
}
