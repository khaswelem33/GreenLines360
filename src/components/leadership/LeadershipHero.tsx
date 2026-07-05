import { Container } from "@/components/ui/Container";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/routing";
import { getMediaAspect, getMediaSlot } from "@/content/mediaRegistry";

interface LeadershipHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  slotCode: string;
  locale: Locale;
  hints: { recommended: string; replaceWith: string };
}

export function LeadershipHero({
  eyebrow,
  title,
  subtitle,
  slotCode,
  locale,
  hints,
}: LeadershipHeroProps) {
  const slot = getMediaSlot(slotCode, locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-light via-ivory to-ivory">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold-hairline" />
      <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
          <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.15] text-charcoal md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
        <Reveal delay={150} scale>
          <MediaSlotView
            slot={slot}
            hints={hints}
            aspectRatio={getMediaAspect(slotCode)}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </Reveal>
      </Container>
      <CurveDivider fillClassName="fill-white" />
    </section>
  );
}
