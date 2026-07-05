import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { AnchorSectionsPage } from "@/components/sections/AnchorSectionsPage";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { businessSectorsPage } = getContent(locale);
  return {
    title: businessSectorsPage.meta.title,
    description: businessSectorsPage.meta.description,
  };
}

export default async function BusinessSectorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return <AnchorSectionsPage content={getContent(locale).businessSectorsPage} />;
}
