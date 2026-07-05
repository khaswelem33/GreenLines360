"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import type { AuthContent } from "@/content/types";

/**
 * Login UI foundation — no real authentication yet.
 * Submitting shows the localized notice; real auth arrives in the
 * portal phase (see src/lib/auth.ts).
 */
export function LoginForm({ form }: { form: AuthContent["form"] }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full flex-col gap-5"
    >
      <Input
        id="email"
        type="email"
        name="email"
        label={form.email}
        placeholder={form.emailPlaceholder}
        autoComplete="email"
      />
      <Input
        id="password"
        type="password"
        name="password"
        label={form.password}
        placeholder={form.passwordPlaceholder}
        autoComplete="current-password"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-charcoal">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-neutral-border text-primary accent-[#006536]"
          />
          {form.remember}
        </label>
        <a
          href="#"
          aria-disabled="true"
          onClick={(event) => event.preventDefault()}
          className="text-sm font-medium text-primary hover:text-primary-light"
        >
          {form.forgot}
        </a>
      </div>

      <Button type="submit" size="lg" className="w-full">
        {form.submit}
      </Button>

      <div
        role="status"
        className={
          submitted
            ? "flex items-start gap-2.5 rounded-xl border border-gold/50 bg-gold/10 p-4"
            : "flex items-start gap-2.5 rounded-xl border border-neutral-border bg-ivory p-4"
        }
      >
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
        <p className="text-sm leading-relaxed text-neutral">{form.notice}</p>
      </div>
    </form>
  );
}
