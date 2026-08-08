import { cn } from "@/lib/format";

interface PageLoaderProps {
  label?: string;
  className?: string;
}

/**
 * Full-height route loader. Used by app/loading.tsx and any client view that
 * has to wait before it can render real content.
 */
export function PageLoader({ label = "Loading…", className }: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex min-h-[60vh] flex-col items-center justify-center gap-5 px-4 text-center",
        className
      )}
    >
      <Spinner />
      <p className="font-ui text-[11px] tracking-subtop text-body uppercase">
        {label}
      </p>
    </div>
  );
}

/** Watch-dial style ring: static bezel with a primary-colored hand sweeping around it. */
export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block h-14 w-14", className)}
    >
      <span className="absolute inset-0 rounded-full border-2 border-line" />
      <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
    </span>
  );
}
