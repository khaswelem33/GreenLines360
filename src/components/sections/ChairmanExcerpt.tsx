import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import type { HomeContent } from "@/content/types";

export function ChairmanExcerpt({
  chairman,
}: {
  chairman: HomeContent["chairman"];
}) {
  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gold/30 bg-white p-8 shadow-card md:p-12">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gold-hairline"
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            {chairman.eyebrow}
          </p>
          <Quote className="mt-6 h-8 w-8 text-gold/60" aria-hidden />
          <blockquote className="mt-4 text-balance font-heading text-xl font-medium leading-relaxed text-charcoal md:text-2xl">
            {chairman.quote}
          </blockquote>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-heading text-base font-semibold text-primary">
                {chairman.name}
              </p>
              <p className="text-sm text-neutral">{chairman.role}</p>
            </div>
            <Link
              href="/leadership"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              {chairman.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
