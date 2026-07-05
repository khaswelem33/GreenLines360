import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  ClipboardCheck,
  Compass,
  FileCheck,
  Layers,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import { LeadershipCardsGrid } from "@/components/leadership/LeadershipCardsGrid";
import { LeadershipHero } from "@/components/leadership/LeadershipHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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
    title: { absolute: leadership.governance.meta.title },
    description: leadership.governance.meta.description,
  };
}

export default async function GovernanceFrameworkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { governance, hub } = leadership;

  return (
    <>
      <LeadershipHero
        eyebrow={hub.hero.eyebrow}
        title={governance.title}
        subtitle={governance.intro}
        slotCode="IMG-LEADERSHIP-GOVERNANCE-01"
        locale={locale}
        hints={leadership.placeholderHints}
      />

      <LeadershipCardsGrid
        items={governance.sections}
        icons={[
          Compass,
          Layers,
          ClipboardCheck,
          ShieldAlert,
          FileCheck,
          TrendingUp,
        ]}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
        tone="white"
      />

      <section className="bg-ivory py-14 text-center md:py-16">
        <Container>
          <Button href="/leadership/organization-structure" size="lg">
            {governance.cta}
          </Button>
        </Container>
      </section>
    </>
  );
}
