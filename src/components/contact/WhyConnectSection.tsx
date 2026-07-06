import {
  BadgeCheck,
  Handshake,
  MessageCircle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getMediaAspect, getMediaSlot } from "@/content/mediaRegistry";
import type { ContactPageContent } from "@/content/types";
import type { Locale } from "@/i18n/routing";

const whyIcons: LucideIcon[] = [
  MessageCircle,
  Handshake,
  BadgeCheck,
  TrendingUp,
];

export function WhyConnectSection({
  contact,
  locale,
}: {
  contact: ContactPageContent;
  locale: Locale;
}) {
  const { why, placeholderHints } = contact;

  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={why.title} />
        </Reveal>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {why.cards.map((card, index) => {
              const Icon = whyIcons[index % whyIcons.length];
              return (
                <Reveal key={card.title} delay={index * 100}>
                  <Card className="flex h-full flex-col gap-3.5 p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-heading text-base font-semibold text-charcoal">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral">
                      {card.body}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={200} scale>
            <MediaSlotView
              slot={getMediaSlot("IMG-CONTACT-SUPPORT-01", locale)}
              hints={placeholderHints}
              aspectRatio={getMediaAspect("IMG-CONTACT-SUPPORT-01")}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
