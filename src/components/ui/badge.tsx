import type { ProductBadge } from "@/lib/types";
import { cn } from "@/lib/format";

const BADGE_CLASSES: Record<ProductBadge, string> = {
  sale: "bg-sale text-white",
  new: "bg-primary text-white",
  hot: "bg-error text-white",
};

interface BadgeProps {
  label: string;
  type?: ProductBadge;
  className?: string;
}

export function Badge({ label, type = "sale", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "absolute left-4 top-4 rounded-badge px-2.5 py-1 text-xs font-semibold leading-none",
        BADGE_CLASSES[type],
        className
      )}
    >
      {label}
    </span>
  );
}
