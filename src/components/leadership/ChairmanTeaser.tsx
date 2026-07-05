import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getChairmanSlot } from "@/content/mediaRegistry";
import type { LeadershipContent } from "@/content/types";

export function ChairmanTeaser({
  leadership,
  locale,
}: {
  leadership: LeadershipContent;
  locale: Locale;
}) {
  const { hub, chairman, placeholderHints } = leadership;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal scale>
          <MediaSlotView
            slot={getChairmanSlot(locale)}
            hints={placeholderHints}
            aspectRatio="16 / 9"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-prose font-heading text-xl font-medium leading-relaxed text-charcoal md:text-2xl">
            {hub.chairmanTeaser.text}
          </p>
          <div className="mt-5">
            <p className="font-heading text-base font-semibold text-primary">
              {chairman.name}
            </p>
            <p className="text-sm text-neutral">{chairman.role}</p>
          </div>
          <Link
            href="/leadership/chairman-message"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-ivory transition-all hover:bg-primary-light hover:shadow-soft motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {hub.chairmanTeaser.cta}
            <ArrowRight className="hidden h-4 w-4 ltr:inline" aria-hidden />
            <ArrowLeft className="hidden h-4 w-4 rtl:inline" aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
