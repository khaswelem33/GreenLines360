import {
  Globe2,
  Network,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HomeContent } from "@/content/types";

const strengthIcons: LucideIcon[] = [Network, ShieldCheck, ScanSearch, Globe2];

export function StrengthsGrid({
  strengths,
}: {
  strengths: HomeContent["strengths"];
}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow={strengths.eyebrow} title={strengths.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.items.map((item, index) => {
            const Icon = strengthIcons[index % strengthIcons.length];
            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-border bg-ivory-light p-6 text-center"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-ivory shadow-soft">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-heading text-base font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
