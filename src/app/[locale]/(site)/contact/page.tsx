import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { MapSection } from "@/components/contact/MapSection";
import { QuickContactCards } from "@/components/contact/QuickContactCards";
import { WhyConnectSection } from "@/components/contact/WhyConnectSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/routing";
import { CONTACT_INFO } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { contact } = getContent(locale);
  return {
    title: { absolute: contact.meta.title },
    description: contact.meta.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { contact } = getContent(locale);

  return (
    <>
      <ContactHero contact={contact} locale={locale} />
      <QuickContactCards quickCards={contact.quickCards} />
      <MapSection contact={contact} locale={locale} />
      <ContactFormSection form={contact.form} />
      <WhyConnectSection contact={contact} locale={locale} />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-hero-gradient py-16 text-center text-ivory md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-hairline opacity-60"
        />
        <Container className="relative">
          <Reveal>
            <p className="mx-auto max-w-3xl text-balance font-heading text-2xl font-semibold leading-relaxed md:text-3xl">
              {contact.finalCta.text}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                externalHref={`tel:${CONTACT_INFO.phones[0]}`}
                variant="gold"
                size="lg"
              >
                {contact.finalCta.callCta}
              </Button>
              <Button
                externalHref={`mailto:${CONTACT_INFO.emails[0]}`}
                size="lg"
                className="border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10"
              >
                {contact.finalCta.emailCta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
