"use client";

import { useState } from "react";
import Image from "next/image";
import type { MediaSlot } from "@/content/types";
import {
  MediaPlaceholder,
  type MediaPlaceholderHints,
} from "./MediaPlaceholder";
import { cn } from "@/lib/utils";

/**
 * Renders the physical PNG at slot.publicPath (premium rounded card).
 * The PNG starts life as a designed placeholder file and is later
 * overwritten with the real image — same filename, no code changes.
 * The React MediaPlaceholder card is used only as an emergency
 * fallback if the file fails to load.
 */
export function MediaSlotView({
  slot,
  hints,
  aspectRatio = "16 / 9",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
}: {
  slot: MediaSlot;
  hints: MediaPlaceholderHints;
  aspectRatio?: string;
  sizes?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !slot.publicPath) {
    return (
      <MediaPlaceholder
        code={slot.code}
        size={slot.size}
        label={slot.label}
        hints={hints}
        savePath={slot.savePath}
        aspectRatio={aspectRatio}
        className={className}
      />
    );
  }

  return (
    <div
      style={{ aspectRatio }}
      className={cn(
        "relative w-full overflow-hidden rounded-3xl border border-primary/15 shadow-soft ring-1 ring-gold/25",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-6 top-0 z-10 h-px bg-gold-hairline"
      />
      <Image
        src={slot.publicPath}
        alt={slot.alt || slot.label}
        fill
        sizes={sizes}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
