import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ChairmanExcerpt } from "@/components/sections/ChairmanExcerpt";
import { CtaBand } from "@/components/sections/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { StandardsStrip } from "@/components/sections/StandardsStrip";
import { StrengthsGrid } from "@/components/sections/StrengthsGrid";
import { TeaserSplit } from "@/components/sections/TeaserSplit";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { home } = getContent(locale);
  return { title: home.meta.title, description: home.meta.description };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { home } = getContent(locale);

  return (
    <>
      <Hero hero={home.hero} />
      <StandardsStrip standards={home.standards} />
      <TeaserSplit
        eyebrow={home.about.eyebrow}
        title={home.about.title}
        body={home.about.body}
        cta={home.about.cta}
        href="/about"
        tone="white"
      />
      <PillarsGrid pillars={home.pillars} />
      <QuoteBand text={home.qualityQuote.text} />
      <StrengthsGrid strengths={home.strengths} />
      <ChairmanExcerpt chairman={home.chairman} />
      <TeaserSplit
        eyebrow={home.sustainability.eyebrow}
        title={home.sustainability.title}
        body={home.sustainability.body}
        cta={home.sustainability.cta}
        href="/sustainability"
        tone="white"
      />
      <CtaBand ctaBand={home.ctaBand} />
    </>
  );
}
