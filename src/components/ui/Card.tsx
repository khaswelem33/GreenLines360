import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
        className
      )}
    >
      {/* Gold hairline that appears on hover — profile motif */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-center scale-x-0 bg-gold-hairline transition-transform duration-300 group-hover:scale-x-100"
      />
      {children}
    </div>
  );
}
