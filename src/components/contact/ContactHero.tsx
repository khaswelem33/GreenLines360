import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { getMediaAspect, getMediaSlot } from "@/content/mediaRegistry";
import type { ContactPageContent } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactHero({
  contact,
  locale,
}: {
  contact: ContactPageContent;
  locale: Locale;
}) {
  const { hero, placeholderHints } = contact;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-light via-ivory to-ivory">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold-hairline" />
      <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.15] text-charcoal md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button externalHref={`tel:${CONTACT_INFO.phones[0]}`} size="lg">
              {hero.callCta}
            </Button>
            <Button
              externalHref={CONTACT_INFO.mapsUrl}
              variant="secondary"
              size="lg"
            >
              {hero.mapsCta}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={150} scale>
          <MediaSlotView
            slot={getMediaSlot("IMG-CONTACT-HERO-01", locale)}
            hints={placeholderHints}
            aspectRatio={getMediaAspect("IMG-CONTACT-HERO-01")}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </Reveal>
      </Container>
      <CurveDivider fillClassName="fill-white" />
    </section>
  );
}
