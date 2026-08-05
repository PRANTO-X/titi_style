import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/format";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  badge?: number;
}

export function IconButton({
  label,
  badge,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-soft hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
      {badge !== undefined && badge > 0 ? (
        <span className="absolute right-0 top-0 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-white">
          {badge > 99 ? "99+" : badge}
        </span>
      ) : null}
    </button>
  );
}
