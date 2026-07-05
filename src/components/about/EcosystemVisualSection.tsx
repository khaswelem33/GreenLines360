import { Container } from "@/components/ui/Container";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getMediaAspect, getMediaSlot } from "@/content/mediaRegistry";
import type { AboutPageContent } from "@/content/types";
import type { Locale } from "@/i18n/routing";

export function EcosystemVisualSection({
  about,
  locale,
}: {
  about: AboutPageContent;
  locale: Locale;
}) {
  const { ecosystem, placeholderHints } = about;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title={ecosystem.title}
            intro={ecosystem.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystem.blocks.map((block, index) => {
            const slotCode = block.slotCode ?? block.media?.code;
            if (!slotCode) return null;

            return (
              <Reveal key={slotCode} delay={index * 110} scale>
                <figure className="flex h-full flex-col gap-3">
                  <MediaSlotView
                    slot={getMediaSlot(slotCode, locale)}
                    hints={placeholderHints}
                    aspectRatio={getMediaAspect(slotCode)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <figcaption className="text-center font-heading text-sm font-semibold text-charcoal">
                    {block.title}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
