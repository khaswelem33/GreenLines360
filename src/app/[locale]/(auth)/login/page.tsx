import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LoginForm } from "@/components/auth/LoginForm";
import { getContent } from "@/content";
import { Link } from "@/i18n/navigation";
import { isLocale } from "@/i18n/routing";
import { BRAND_ASSETS, STANDARD_CODES } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { auth } = getContent(locale);
  return {
    title: auth.meta.title,
    description: auth.meta.description,
    robots: { index: false },
  };
}

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { auth, shared } = getContent(locale);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-hero-gradient text-ivory lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 end-0 opacity-[0.08]"
        >
          <Image
            src={BRAND_ASSETS.emblem}
            alt=""
            width={480}
            height={440}
            className="h-auto w-[440px]"
          />
        </div>

        <Link href="/" aria-label={shared.cta.backHome}>
          <Image
            src={BRAND_ASSETS.logoStacked}
            alt={shared.brand.siteName}
            width={150}
            height={154}
            className="h-auto w-32"
            priority
          />
        </Link>

        <div className="relative max-w-md">
          <h1 className="text-balance font-heading text-3xl font-semibold leading-tight md:text-4xl">
            {auth.brandPanel.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ivory/85">
            {auth.brandPanel.sub}
          </p>
          <p className="mt-6 text-sm font-medium tracking-wide text-gold-light">
            {shared.brand.tagline}
          </p>
        </div>

        <ul className="relative flex flex-wrap gap-x-5 gap-y-2">
          {STANDARD_CODES.map((code) => (
            <li
              key={code}
              className="text-xs font-semibold tracking-wide text-ivory/60"
            >
              {code}
            </li>
          ))}
        </ul>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-ivory px-5 py-12 md:px-10">
        <div className="w-full max-w-md">
          {/* Mobile brand */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Image
              src={BRAND_ASSETS.logoHorizontal}
              alt={shared.brand.siteName}
              width={196}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </div>

          <div className="rounded-2xl border border-neutral-border bg-white p-8 shadow-card md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-charcoal">
              {auth.form.title}
            </h2>
            <p className="mt-1.5 text-sm text-neutral">{auth.form.subtitle}</p>
            <div className="mt-7">
              <LoginForm form={auth.form} />
            </div>
          </div>

          <Link
            href="/"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            <ArrowLeft className="hidden h-4 w-4 ltr:inline" aria-hidden />
            <ArrowRight className="hidden h-4 w-4 rtl:inline" aria-hidden />
            {auth.backToSite}
          </Link>
        </div>
      </div>
    </div>
  );
}
