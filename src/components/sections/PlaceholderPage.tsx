import { Container } from "@/components/ui/Container";
import { CurveDivider } from "@/components/ui/CurveDivider";
import type { PagePlaceholderContent } from "@/content/types";

/**
 * Structured placeholder for inner pages until their full content
 * phases land. Content-driven; no hard-coded visible text.
 */
export function PlaceholderPage({
  content,
}: {
  content: PagePlaceholderContent;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-ivory">
        <Container className="relative py-20 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            {content.eyebrow}
          </p>
          <h1 className="text-balance font-heading text-4xl font-semibold leading-tight md:text-5xl">
            {content.title}
          </h1>
        </Container>
        <CurveDivider className="absolute inset-x-0 bottom-0" />
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <Container>
          <p className="max-w-prose text-base leading-relaxed text-charcoal md:text-lg">
            {content.intro}
          </p>
          <div className="mt-10 max-w-prose rounded-2xl border border-gold/40 bg-white p-6 shadow-soft">
            <p className="text-sm leading-relaxed text-neutral">
              {content.note}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
