import { Building2, Landmark, UserRound, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { OrganizationStructureContent } from "@/content/types";

/**
 * Simplified, web-friendly presentation of the governance and
 * organization structure (not a reproduction of the dense PDF chart).
 */
export function OrganizationStructureView({
  organization,
}: {
  organization: OrganizationStructureContent;
}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-8">
        {/* Top governance chain */}
        <Reveal>
          <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-0">
            <div className="w-full rounded-2xl bg-hero-gradient p-6 text-center text-ivory shadow-card">
              <UserRound className="mx-auto h-6 w-6 text-gold-light" aria-hidden />
              <p className="mt-2 font-heading text-lg font-semibold">
                {organization.chairmanLabel}
              </p>
            </div>
            <span aria-hidden className="h-8 w-px bg-gold" />
            <div className="w-full rounded-2xl border border-primary/20 bg-ivory-light p-6 text-center shadow-soft">
              <UserRound className="mx-auto h-6 w-6 text-primary" aria-hidden />
              <p className="mt-2 font-heading text-lg font-semibold text-charcoal">
                {organization.ceoLabel}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Advisory council + strategy office */}
        <Reveal delay={100}>
          <div className="grid gap-5 md:grid-cols-2">
            {[organization.advisoryCouncilLabel, organization.strategyLabel].map(
              (label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-white p-5 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                    <Landmark className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="font-heading text-base font-semibold text-charcoal">
                    {label}
                  </p>
                </div>
              )
            )}
          </div>
        </Reveal>

        {/* Board committees */}
        <Reveal delay={150}>
          <div className="rounded-2xl border border-neutral-border bg-ivory-light p-7 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-gold" aria-hidden />
              <h2 className="font-heading text-lg font-semibold text-charcoal">
                {organization.committeesTitle}
              </h2>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {organization.committees.map((committee) => (
                <li
                  key={committee}
                  className="rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-medium text-primary"
                >
                  {committee}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Departments */}
        <Reveal delay={200}>
          <div>
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-gold" aria-hidden />
              <h2 className="font-heading text-lg font-semibold text-charcoal">
                {organization.departmentsTitle}
              </h2>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {organization.departments.map((department) => (
                <li
                  key={department}
                  className="rounded-xl border border-neutral-border bg-white px-5 py-4 text-sm font-medium text-charcoal shadow-soft"
                >
                  {department}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Governance note */}
        <Reveal delay={250}>
          <p className="rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm leading-relaxed text-charcoal/80">
            {organization.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
