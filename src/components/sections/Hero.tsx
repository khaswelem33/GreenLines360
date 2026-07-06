import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CurveDivider } from "@/components/ui/CurveDivider";
import { BRAND_ASSETS } from "@/lib/constants";
import type { HomeContent } from "@/content/types";

/**
 * Phase 1 hero: premium brand gradient with emblem watermark.
 * The media slot (video / image slider) is added in a later phase
 * without changing this layout contract.
 */
export function Hero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-ivory">
      {/* Emblem watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 end-0 opacity-[0.07]"
      >
        <Image
          src={BRAND_ASSETS.emblem}
          alt=""
          width={560}
          height={512}
          className="h-auto w-[420px] md:w-[560px]"
        />
      </div>

      {/* Subtle gold arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-hairline opacity-60"
      />

      <Container className="relative py-24 md:py-32 lg:py-36">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-gold-light">
            {hero.eyebrow}
          </p>
          <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/business-sectors" variant="gold" size="lg">
              {hero.primaryCta}
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="border border-ivory/40 bg-transparent text-ivory hover:border-gold hover:bg-ivory/10"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>

      <CurveDivider className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
