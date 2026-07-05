import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-charcoal"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "block w-full rounded-xl border border-neutral-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-neutral-light",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          className
        )}
        {...props}
      />
    </div>
  );
}
