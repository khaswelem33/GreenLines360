import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND_ASSETS } from "@/lib/constants";
import type { AboutPageContent } from "@/content/types";

export function VisionMissionSection({ about }: { about: AboutPageContent }) {
  const { visionMission } = about;
  const cards = [
    { icon: Eye, ...visionMission.vision },
    { icon: Target, ...visionMission.mission },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -end-24 top-1/2 -translate-y-1/2 opacity-[0.04]"
      >
        <Image
          src={BRAND_ASSETS.emblem}
          alt=""
          width={480}
          height={440}
          className="h-auto w-[420px]"
        />
      </div>
      <Container className="relative">
        <Reveal>
          <SectionHeading title={visionMission.title} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 140}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-border bg-ivory-light p-8 shadow-soft md:p-10">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gold-hairline"
                  />
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-ivory shadow-soft">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/80">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
