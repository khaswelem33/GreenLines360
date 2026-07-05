import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HeartHandshake, Leaf, Lightbulb, Scale } from "lucide-react";
import { ChairmanTeaser } from "@/components/leadership/ChairmanTeaser";
import { LeadershipCardsGrid } from "@/components/leadership/LeadershipCardsGrid";
import { LeadershipHero } from "@/components/leadership/LeadershipHero";
import { PageLinksGrid } from "@/components/leadership/PageLinksGrid";
import { GovernancePillars } from "@/components/leadership/GovernancePillars";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
    title: { absolute: leadership.hub.meta.title },
    description: leadership.hub.meta.description,
  };
}

export default async function LeadershipHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { hub } = leadership;

  return (
    <>
      <LeadershipHero
        eyebrow={hub.hero.eyebrow}
        title={hub.hero.title}
        subtitle={hub.hero.subtitle}
        slotCode="IMG-LEADERSHIP-HERO-01"
        locale={locale}
        hints={leadership.placeholderHints}
      />

      <LeadershipCardsGrid
        items={hub.overviewCards}
        icons={[HeartHandshake, Scale, Lightbulb, Leaf]}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-4"
        tone="white"
      />

      <ChairmanTeaser leadership={leadership} locale={locale} />

      <GovernancePillars title={hub.pillarsTitle} pillars={hub.pillars} />

      <PageLinksGrid leadership={leadership} />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-hero-gradient py-16 text-center text-ivory md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-hairline opacity-60"
        />
        <Container className="relative">
          <Reveal>
            <p className="mx-auto max-w-3xl text-balance font-heading text-2xl font-semibold leading-relaxed md:text-3xl">
              {hub.finalCta.text}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/leadership/chairman-message"
                variant="gold"
                size="lg"
              >
                {hub.finalCta.primaryCta}
              </Button>
              <Button
                href="/leadership/organization-structure"
                size="lg"
                className="border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10"
              >
                {hub.finalCta.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
