import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { ContactCard } from "@/content/types";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface QuickCardDef {
  card: ContactCard;
  icon: LucideIcon;
  /** Detail rows rendered as accessible links */
  rows: { label: string; href: string }[];
  ctaHref: string;
  external?: boolean;
}

function CtaLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group/cta mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
    >
      {label}
      <ArrowRight className="hidden h-4 w-4 ltr:inline" aria-hidden />
      <ArrowLeft className="hidden h-4 w-4 rtl:inline" aria-hidden />
    </a>
  );
}

export function QuickContactCards({
  quickCards,
}: {
  quickCards: {
    phone: ContactCard;
    email: ContactCard;
    location: ContactCard;
    business: ContactCard;
  };
}) {
  const defs: QuickCardDef[] = [
    {
      card: quickCards.phone,
      icon: Phone,
      rows: CONTACT_INFO.phones.map((p) => ({ label: p, href: `tel:${p}` })),
      ctaHref: `tel:${CONTACT_INFO.phones[0]}`,
    },
    {
      card: quickCards.email,
      icon: Mail,
      rows: CONTACT_INFO.emails.map((e) => ({
        label: e,
        href: `mailto:${e}`,
      })),
      ctaHref: `mailto:${CONTACT_INFO.emails[0]}`,
    },
    {
      card: quickCards.location,
      icon: MapPin,
      rows: [],
      ctaHref: CONTACT_INFO.mapsUrl,
      external: true,
    },
    {
      card: quickCards.business,
      icon: Briefcase,
      rows: [],
      ctaHref: `mailto:${CONTACT_INFO.emails[0]}`,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {defs.map(({ card, icon: Icon, rows, ctaHref, external }, index) => (
            <Reveal key={card.title} delay={index * 100}>
              <Card className="flex h-full flex-col gap-3.5 p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory-light text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="font-heading text-base font-semibold text-charcoal">
                  {card.title}
                </h2>
                <p className="text-sm leading-relaxed text-neutral">
                  {card.description}
                </p>
                {rows.length ? (
                  <ul className="space-y-1">
                    {rows.map((row) => (
                      <li key={row.href}>
                        <a
                          href={row.href}
                          dir="ltr"
                          className={cn(
                            "text-sm font-medium text-charcoal transition-colors hover:text-primary motion-reduce:transition-none",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm",
                            "inline-block break-all"
                          )}
                        >
                          {row.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <CtaLink href={ctaHref} label={card.cta} external={external} />
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
