import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { AboutPageContent } from "@/content/types";

export function AboutCtaSection({ about }: { about: AboutPageContent }) {
  const { finalCta } = about;

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 text-center text-ivory md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-hairline opacity-60"
      />
      <Container className="relative">
        <Reveal>
          <p className="mx-auto max-w-3xl text-balance font-heading text-2xl font-semibold leading-relaxed md:text-3xl">
            {finalCta.text}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/business-sectors" variant="gold" size="lg">
              {finalCta.primaryCta}
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10"
            >
              {finalCta.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
