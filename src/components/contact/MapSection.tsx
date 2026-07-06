import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaSlotView } from "@/components/ui/MediaSlotView";
import { Reveal } from "@/components/ui/Reveal";
import { getMediaAspect, getMediaSlot } from "@/content/mediaRegistry";
import type { ContactPageContent } from "@/content/types";
import type { Locale } from "@/i18n/routing";
import { CONTACT_INFO } from "@/lib/constants";

export function MapSection({
  contact,
  locale,
}: {
  contact: ContactPageContent;
  locale: Locale;
}) {
  const { details, placeholderHints } = contact;

  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* Column A — embedded map */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-soft ring-1 ring-gold/25">
            <span aria-hidden className="block h-0.5 w-full bg-gold-hairline" />
            <iframe
              src={CONTACT_INFO.mapsEmbedUrl}
              title={details.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full border-0"
            />
            <div className="flex justify-center p-5">
              <Button externalHref={CONTACT_INFO.mapsUrl} variant="gold">
                {details.mapsCta}
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Column B — details card + location visual */}
        <div className="flex flex-col gap-6">
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-neutral-border bg-white p-8 shadow-soft">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gold-hairline"
              />
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                {details.heading}
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
                    <Phone className="h-4 w-4" aria-hidden />
                    {details.phoneLabel}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone}`}
                          dir="ltr"
                          className="text-base font-medium text-charcoal transition-colors hover:text-primary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
                    <Mail className="h-4 w-4" aria-hidden />
                    {details.emailLabel}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {CONTACT_INFO.emails.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          dir="ltr"
                          className="break-all text-base font-medium text-charcoal transition-colors hover:text-primary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
                    <MapPin className="h-4 w-4" aria-hidden />
                    {details.locationLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral">
                    {details.locationNote}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220} scale>
            <MediaSlotView
              slot={getMediaSlot("IMG-CONTACT-LOCATION-01", locale)}
              hints={placeholderHints}
              aspectRatio={getMediaAspect("IMG-CONTACT-LOCATION-01")}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
