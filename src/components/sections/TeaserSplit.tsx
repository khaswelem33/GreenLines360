import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface TeaserSplitProps {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  tone?: "light" | "white";
}

/**
 * Reusable teaser section (Who We Are, Sustainability, …).
 * Arrow icon flips automatically for RTL via the rtl: variant.
 */
export function TeaserSplit({
  eyebrow,
  title,
  body,
  cta,
  href,
  tone = "white",
}: TeaserSplitProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        tone === "white" ? "bg-white" : "bg-ivory"
      )}
    >
      <Container className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} align="start" />
        <div>
          <p className="max-w-prose text-base leading-relaxed text-neutral md:text-lg">
            {body}
          </p>
          <Link
            href={href}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
          >
            {cta}
            <ArrowRight
              className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 ltr:inline"
              aria-hidden
            />
            <ArrowLeft
              className="hidden h-4 w-4 transition-transform group-hover:-translate-x-0.5 rtl:inline"
              aria-hidden
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
