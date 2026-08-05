import { cn } from "@/lib/format";

interface SectionHeaderProps {
  subtop: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  subtop,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3 md:mb-12",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <p className="text-xs font-semibold tracking-subtop text-primary">
        {subtop}
      </p>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[40px]",
          light && "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-base",
            light ? "text-white/70" : "text-body"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
