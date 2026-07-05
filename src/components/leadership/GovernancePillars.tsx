import {
  ClipboardCheck,
  Eye,
  ShieldAlert,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LeadershipCard } from "@/content/types";

const pillarIcons: LucideIcon[] = [
  Eye,
  UserCheck,
  ClipboardCheck,
  ShieldAlert,
  TrendingUp,
];

export function GovernancePillars({
  title,
  pillars,
}: {
  title: string;
  pillars: LeadershipCard[];
}) {
  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={title} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <Reveal key={pillar.title} delay={index * 100}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-neutral-border bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-ivory shadow-soft">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral">
                    {pillar.body}
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
