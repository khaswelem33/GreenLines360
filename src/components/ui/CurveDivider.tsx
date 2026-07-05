import { cn } from "@/lib/utils";

/**
 * Soft curved section divider with a subtle gold hairline,
 * echoing the curves used across the corporate profile.
 */
export function CurveDivider({
  fillClassName = "fill-ivory",
  className,
}: {
  fillClassName?: string;
  className?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none w-full", className)}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,76 1080,4 1440,40 L1440,72 L0,72 Z"
          className={fillClassName}
        />
        <path
          d="M0,40 C360,76 1080,4 1440,40"
          fill="none"
          stroke="#c9a24d"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
