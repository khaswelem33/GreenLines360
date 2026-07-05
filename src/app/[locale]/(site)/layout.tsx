import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { shared } = getContent(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header shared={shared} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer shared={shared} />
    </div>
  );
}
