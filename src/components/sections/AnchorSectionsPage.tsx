import { Container } from "@/components/ui/Container";
import { CurveDivider } from "@/components/ui/CurveDivider";
import type { AnchorPageContent } from "@/content/types";

/**
 * Page composed of anchored sections (Business Sectors,
 * Quality & Sustainability). Each section carries the anchor id used
 * by the mega menu; detailed sub-content lands in later phases.
 */
export function AnchorSectionsPage({
  content,
}: {
  content: AnchorPageContent;
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
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
            {content.intro}
          </p>
        </Container>
        <CurveDivider className="absolute inset-x-0 bottom-0" />
      </section>

      <div className="bg-ivory py-16 md:py-20">
        <Container className="flex flex-col gap-6">
          {content.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-28 rounded-2xl border border-neutral-border bg-white p-7 shadow-soft md:p-9"
            >
              <span
                aria-hidden
                className="block h-0.5 w-16 bg-gold-hairline"
              />
              <h2
                id={`${section.id}-title`}
                className="mt-4 font-heading text-2xl font-semibold text-charcoal"
              >
                {section.title}
              </h2>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-neutral">
                {section.description}
              </p>
            </section>
          ))}

          <div className="rounded-2xl border border-gold/40 bg-white p-6 shadow-soft">
            <p className="text-sm leading-relaxed text-neutral">
              {content.note}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
