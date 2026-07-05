import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LeadershipCard } from "@/content/types";
import { cn } from "@/lib/utils";

interface LeadershipCardsGridProps {
  title?: string;
  intro?: string;
  items: LeadershipCard[];
  icons: LucideIcon[];
  columnsClassName?: string;
  tone?: "ivory" | "white";
}

/** Shared premium cards grid used by hub, values, advisory, experts, and teams. */
export function LeadershipCardsGrid({
  title,
  intro,
  items,
  icons,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
  tone = "ivory",
}: LeadershipCardsGridProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        tone === "ivory" ? "bg-ivory" : "bg-white"
      )}
    >
      <Container>
        {title ? (
          <Reveal>
            <SectionHeading title={title} intro={intro} />
          </Reveal>
        ) : null}
        <div className={cn("grid gap-5", title && "mt-12", columnsClassName)}>
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={index * 100}>
                <Card className="flex h-full flex-col gap-3.5 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base font-semibold leading-snug text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral">
                    {item.body}
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
