import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MediaPlaceholderHints {
  recommended: string;
  replaceWith: string;
}

/**
 * Premium white placeholder card for image slots that will be filled
 * with real photography later. Shows the slot code, recommended size,
 * and an editorial replacement label.
 */
export function MediaPlaceholder({
  code,
  size,
  label,
  hints,
  savePath,
  aspectRatio = "16 / 9",
  className,
}: {
  code: string;
  size: string;
  label: string;
  hints: MediaPlaceholderHints;
  /** Exact save path shown so images can be replaced without guesswork */
  savePath?: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} (${code})`}
      style={{ aspectRatio }}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-soft ring-1 ring-gold/25",
        className
      )}
    >
      {/* Gold hairline top edge */}
      <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gold-hairline" />
      {/* Soft brand tint */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-gold/[0.06]"
      />

      <div className="relative flex max-w-xs flex-col items-center gap-2.5 px-6 py-8 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ivory-light text-primary">
          <ImageIcon className="h-5 w-5" aria-hidden />
        </span>
        <p className="font-heading text-sm font-semibold tracking-wide text-primary">
          {code}
        </p>
        <p className="text-xs text-neutral">
          {hints.recommended}: {size}
        </p>
        <p className="text-xs leading-relaxed text-neutral-light">
          {hints.replaceWith}: {label}
        </p>
        {savePath ? (
          <p
            dir="ltr"
            className="rounded-md bg-ivory px-2 py-1 font-mono text-[10px] text-neutral"
          >
            {savePath}
          </p>
        ) : null}
      </div>
    </div>
  );
}
