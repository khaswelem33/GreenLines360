import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/sections/PlaceholderPage";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { businessScope } = getContent(locale);
  return {
    title: businessScope.meta.title,
    description: businessScope.meta.description,
  };
}

export default async function BusinessScopePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return <PlaceholderPage content={getContent(locale).businessScope} />;
}
