import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HomeContent } from "@/content/types";

export function CtaBand({ ctaBand }: { ctaBand: HomeContent["ctaBand"] }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 text-center text-ivory md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-hairline opacity-60"
      />
      <Container className="relative">
        <h2 className="mx-auto max-w-3xl text-balance font-heading text-3xl font-semibold leading-tight md:text-4xl">
          {ctaBand.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
          {ctaBand.body}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="gold" size="lg">
            {ctaBand.primaryCta}
          </Button>
          <Button
            href="/business-sectors"
            size="lg"
            className="border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10"
          >
            {ctaBand.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
