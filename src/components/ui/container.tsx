import type { HTMLAttributes } from "react";
import { cn } from "@/lib/format";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container-site", className)} {...props} />;
}
