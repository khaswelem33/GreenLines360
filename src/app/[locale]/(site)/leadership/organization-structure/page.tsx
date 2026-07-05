import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LeadershipHero } from "@/components/leadership/LeadershipHero";
import { OrganizationStructureView } from "@/components/leadership/OrganizationStructureView";
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
    title: { absolute: leadership.organization.meta.title },
    description: leadership.organization.meta.description,
  };
}

export default async function OrganizationStructurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { organization, hub } = leadership;

  return (
    <>
      <LeadershipHero
        eyebrow={hub.hero.eyebrow}
        title={organization.title}
        subtitle={organization.intro}
        slotCode="IMG-LEADERSHIP-ORG-CHART-01"
        locale={locale}
        hints={leadership.placeholderHints}
      />
      <OrganizationStructureView organization={organization} />
    </>
  );
}
