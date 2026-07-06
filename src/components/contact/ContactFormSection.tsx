"use client";

import { useState } from "react";
import { CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Reveal } from "@/components/ui/Reveal";
import type { ContactPageContent } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Premium contact form UI — validation-ready structure, no backend yet.
 * On valid submit it shows the localized success placeholder; hooking a
 * real endpoint later only requires replacing the onSubmit handler.
 */
export function ContactFormSection({
  form,
}: {
  form: ContactPageContent["form"];
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section id="contact-form" className="scroll-mt-28 bg-white py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-border bg-ivory-light p-8 shadow-card md:p-10">
            <h2 className="font-heading text-2xl font-semibold text-charcoal">
              {form.title}
            </h2>
            <p className="mt-1.5 text-sm text-neutral">{form.helper}</p>

            <form
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                setStatus(
                  event.currentTarget.checkValidity() ? "success" : "error"
                );
              }}
              className="mt-8 grid gap-5 sm:grid-cols-2"
            >
              <Input
                id="contact-name"
                name="fullName"
                label={form.fullName}
                autoComplete="name"
                required
              />
              <Input
                id="contact-company"
                name="companyName"
                label={form.companyName}
                autoComplete="organization"
              />
              <Input
                id="contact-email"
                name="email"
                type="email"
                label={form.email}
                autoComplete="email"
                required
              />
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                label={form.phone}
                autoComplete="tel"
              />
              <div className="sm:col-span-2">
                <Input
                  id="contact-subject"
                  name="subject"
                  label={form.subject}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  {form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  className="block w-full rounded-xl border border-neutral-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-neutral-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {form.submit}
                </Button>
              </div>

              {status !== "idle" ? (
                <div
                  role="status"
                  className={cn(
                    "flex items-start gap-2.5 rounded-xl border p-4 sm:col-span-2",
                    status === "success"
                      ? "border-primary/30 bg-primary/5"
                      : "border-harvest/40 bg-harvest/10"
                  )}
                >
                  {status === "success" ? (
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                  ) : (
                    <Info
                      className="mt-0.5 h-4 w-4 shrink-0 text-harvest"
                      aria-hidden
                    />
                  )}
                  <p className="text-sm leading-relaxed text-charcoal/80">
                    {status === "success" ? form.success : form.error}
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
