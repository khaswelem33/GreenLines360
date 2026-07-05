import { Container } from "@/components/ui/Container";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getMediaAspect, getMediaSlot } from "@/content/mediaRegistry";
import type { AboutPageContent } from "@/content/types";
import type { Locale } from "@/i18n/routing";

export function WhoWeAreSection({
  about,
  locale,
}: {
  about: AboutPageContent;
  locale: Locale;
}) {
  const { whoWeAre, placeholderHints } = about;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionHeading title={whoWeAre.title} align="start" />
          <div className="mt-6 space-y-4">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-prose text-base leading-relaxed text-neutral md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border-s-4 border-gold bg-ivory-light p-5">
            <p className="font-heading text-base font-semibold leading-relaxed text-primary md:text-lg">
              {whoWeAre.highlight}
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} scale>
          <MediaSlotView
            slot={getMediaSlot("IMG-ABOUT-ECOSYSTEM-01", locale)}
            hints={placeholderHints}
            aspectRatio={getMediaAspect("IMG-ABOUT-ECOSYSTEM-01")}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
