import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import type { AboutPageContent } from "@/content/types";

const CHAIRMAN_IMAGE = "/images/leadership/khalid-alotaiby-ceo.png";

export function LeadershipMessageSection({
  about,
}: {
  about: AboutPageContent;
}) {
  const { leadership } = about;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid items-start gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-14">
        {/* Small premium portrait card — the only real photo on this page */}
        <Reveal scale>
          <figure className="mx-auto w-full max-w-[360px]">
            <div className="relative overflow-hidden rounded-3xl border border-gold/40 shadow-card ring-1 ring-gold/20">
              <span
                aria-hidden
                className="absolute inset-x-6 top-0 z-10 h-px bg-gold-hairline"
              />
              <Image
                src={CHAIRMAN_IMAGE}
                alt={leadership.imageAlt}
                width={720}
                height={900}
                className="aspect-[4/5] w-full object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 360px"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <p className="font-heading text-base font-semibold text-primary">
                {leadership.name}
              </p>
              <p className="mt-0.5 text-sm text-neutral">{leadership.role}</p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={140}>
          <SectionHeading title={leadership.title} align="start" />
          <div className="mt-6 space-y-4">
            {leadership.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-prose text-base leading-relaxed text-neutral md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Link
            href="/leadership"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
          >
            {leadership.cta}
            <ArrowRight
              className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none ltr:inline"
              aria-hidden
            />
            <ArrowLeft
              className="hidden h-4 w-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none rtl:inline"
              aria-hidden
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
