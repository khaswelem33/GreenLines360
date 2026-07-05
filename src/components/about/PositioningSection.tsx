import { Globe2, Network, ShieldCheck, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutPageContent } from "@/content/types";

const cardIcons: LucideIcon[] = [Network, Globe2, ShieldCheck];

export function PositioningSection({ about }: { about: AboutPageContent }) {
  const { positioning } = about;

  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={positioning.title} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {positioning.cards.map((card, index) => {
            const Icon = cardIcons[index % cardIcons.length];
            return (
              <Reveal key={card.title} delay={index * 120}>
                <Card className="flex h-full flex-col gap-4 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-charcoal">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral">
                    {card.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
