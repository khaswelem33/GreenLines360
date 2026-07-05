import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-start"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            dark ? "text-gold-light" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance font-heading text-3xl font-semibold leading-tight md:text-4xl",
          dark ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-ivory/80" : "text-neutral",
            align === "center" && "mx-auto",
            "max-w-prose"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
