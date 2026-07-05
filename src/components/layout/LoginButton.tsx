import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LoginButton({
  label,
  className,
  onClick,
}: {
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/login"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-ivory transition-all hover:bg-primary-light hover:shadow-soft",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        "motion-reduce:transition-none",
        className
      )}
    >
      {label}
    </Link>
  );
}
