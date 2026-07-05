"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight scroll-entrance wrapper (IntersectionObserver + CSS).
 * Respects prefers-reduced-motion (elements render fully visible).
 */
export function Reveal({
  children,
  delay = 0,
  scale = false,
  className,
}: {
  children: React.ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  /** Adds a soft scale-in to the fade-up */
  scale?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", scale && "reveal-scale", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
