import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Globe2, Handshake, Leaf, ShieldCheck, Sprout } from "lucide-react";
import { LeadershipCardsGrid } from "@/components/leadership/LeadershipCardsGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { getChairmanSlot } from "@/content/mediaRegistry";
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
    title: { absolute: leadership.chairman.meta.title },
    description: leadership.chairman.meta.description,
  };
}

export default async function ChairmanMessagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const { leadership } = getContent(locale);
  const { chairman, placeholderHints } = leadership;

  return (
    <>
      {/* Hero with the Chairman visual (direction-specific image) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory-light via-ivory to-ivory">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gold-hairline"
        />
        <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {chairman.intro}
            </p>
            <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.15] text-charcoal md:text-5xl">
              {chairman.title}
            </h1>
            <div className="mt-7">
              <p className="font-heading text-lg font-semibold text-primary">
                {chairman.name}
              </p>
              <p className="mt-0.5 text-sm text-neutral">{chairman.role}</p>
            </div>
          </Reveal>
          <Reveal delay={150} scale>
            <MediaSlotView
              slot={getChairmanSlot(locale)}
              hints={placeholderHints}
              aspectRatio="16 / 9"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </Reveal>
        </Container>
        <CurveDivider fillClassName="fill-white" />
      </section>

      {/* Main message */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-5">
              {chairman.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className={
                    index === chairman.paragraphs.length - 1
                      ? "font-heading text-lg font-semibold text-primary md:text-xl"
                      : "text-base leading-relaxed text-neutral md:text-lg"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <QuoteBand text={chairman.quote} />

      <LeadershipCardsGrid
        title={chairman.valuesTitle}
        items={chairman.values}
        icons={[Leaf, ShieldCheck, Handshake, Globe2, Sprout]}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-5"
      />

      <section className="bg-white pb-16 pt-2 text-center md:pb-20">
        <Container>
          <Button href="/leadership/governance-framework" size="lg">
            {chairman.cta}
          </Button>
        </Container>
      </section>
    </>
  );
}
