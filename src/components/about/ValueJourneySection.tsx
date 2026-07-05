import {
  Factory,
  Globe2,
  Layers,
  ShieldCheck,
  Snowflake,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutPageContent } from "@/content/types";

const stepIcons: LucideIcon[] = [
  Sprout,
  Layers,
  Factory,
  Snowflake,
  ShieldCheck,
  Globe2,
];

export function ValueJourneySection({ about }: { about: AboutPageContent }) {
  const { journey } = about;

  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={journey.title} />
        </Reveal>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {journey.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <Reveal key={step.title} delay={index * 100}>
                <li className="group relative h-full overflow-hidden rounded-2xl border border-neutral-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-heading text-sm font-semibold tracking-widest text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
