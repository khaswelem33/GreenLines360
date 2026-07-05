import {
  Factory,
  Lightbulb,
  ShieldCheck,
  Snowflake,
  Sprout,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HomeContent, PillarKey } from "@/content/types";

const pillarIcons: Record<PillarKey, LucideIcon> = {
  agriculture: Sprout,
  manufacturing: Factory,
  coldChain: Snowflake,
  quality: ShieldCheck,
  advisory: Lightbulb,
  logistics: Truck,
};

export function PillarsGrid({
  pillars,
}: {
  pillars: HomeContent["pillars"];
}) {
  return (
    <section className="bg-ivory-light py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow={pillars.eyebrow}
          title={pillars.title}
          intro={pillars.intro}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.items.map((pillar) => {
            const Icon = pillarIcons[pillar.key];
            return (
              <Card key={pillar.key} className="flex flex-col gap-4 p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-heading text-sm font-semibold tracking-widest text-gold">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral">
                  {pillar.blurb}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
