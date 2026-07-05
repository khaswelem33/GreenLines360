import { setRequestLocale } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { Sidebar } from "@/components/portal/Sidebar";
import { Topbar } from "@/components/portal/Topbar";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";
import { isAuthenticated } from "@/lib/auth";

export default async function PortalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  // Auth guard stub — becomes a real session check in the portal phase.
  if (!isAuthenticated()) {
    redirect(`/${locale}/login`);
  }

  const { portal, shared } = getContent(locale);

  return (
    <div className="flex min-h-screen flex-col bg-ivory lg:flex-row">
      <Sidebar portal={portal} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar portal={portal} shared={shared} locale={locale} />
        <main className="flex-1 p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
