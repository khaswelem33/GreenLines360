import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Standard } from "@/content/types";

export function StandardsStrip({
  standards,
}: {
  standards: { caption: string; items: Standard[] };
}) {
  return (
    <section className="bg-ivory py-10 md:py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-neutral">
          {standards.caption}
        </p>
        <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-3 md:gap-4">
          {standards.items.map((standard) => (
            <li
              key={standard.code}
              className="flex min-w-40 flex-col items-center gap-1 rounded-2xl border border-gold/30 bg-white px-5 py-4 text-center shadow-soft"
            >
              <span className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-primary">
                <BadgeCheck className="h-4 w-4 text-gold" aria-hidden />
                {standard.code}
              </span>
              <span className="text-xs text-neutral">{standard.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
