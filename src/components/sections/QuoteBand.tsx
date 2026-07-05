import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BRAND_ASSETS } from "@/lib/constants";

export function QuoteBand({ text }: { text: string }) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 text-center md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -start-16 top-1/2 -translate-y-1/2 opacity-[0.06]"
      >
        <Image
          src={BRAND_ASSETS.emblem}
          alt=""
          width={380}
          height={348}
          className="h-auto w-72 md:w-96"
        />
      </div>
      <Container className="relative">
        <div aria-hidden className="mx-auto mb-8 h-px w-24 bg-gold-hairline" />
        <blockquote className="mx-auto max-w-3xl text-balance font-heading text-2xl font-medium leading-relaxed text-ivory md:text-3xl">
          {text}
        </blockquote>
        <div aria-hidden className="mx-auto mt-8 h-px w-24 bg-gold-hairline" />
      </Container>
    </section>
  );
}
