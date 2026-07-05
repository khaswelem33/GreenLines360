import {
  ArrowLeft,
  ArrowRight,
  Cog,
  Network,
  Quote,
  Scale,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import type { LeadershipContent } from "@/content/types";

const pageIcons: LucideIcon[] = [Quote, Scale, Users, Network, Cog, Workflow];

/** Elegant cards linking to the six Leadership & Governance subpages. */
export function PageLinksGrid({
  leadership,
}: {
  leadership: LeadershipContent;
}) {
  const pages = [
    { href: "/leadership/chairman-message", ...pick(leadership.chairman) },
    { href: "/leadership/governance-framework", ...pick(leadership.governance) },
    { href: "/leadership/advisory-council", ...pick(leadership.advisory) },
    { href: "/leadership/expert-network", ...pick(leadership.experts) },
    { href: "/leadership/core-teams", ...pick(leadership.teams) },
    {
      href: "/leadership/organization-structure",
      ...pick(leadership.organization),
    },
  ];

  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={leadership.hub.pagesGridTitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => {
            const Icon = pageIcons[index % pageIcons.length];
            return (
              <Reveal key={page.href} delay={index * 90}>
                <Link
                  href={page.href}
                  className="group relative flex h-full flex-col gap-3.5 overflow-hidden rounded-2xl border border-neutral-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 origin-center scale-x-0 bg-gold-hairline transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-charcoal group-hover:text-primary">
                    {page.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral">
                    {page.blurb}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
                    <ArrowRight
                      className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none ltr:inline"
                      aria-hidden
                    />
                    <ArrowLeft
                      className="hidden h-4 w-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none rtl:inline"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function pick(page: { navLabel: string; intro: string }) {
  return { label: page.navLabel, blurb: page.intro };
}
