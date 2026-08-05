import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/format";

interface LogoProps {
  className?: string;
  linkClassName?: string;
  width?: number;
}

export function Logo({ className, linkClassName, width = 160 }: LogoProps) {
  const height = Math.round((width * 141) / 213);

  return (
    <Link
      href="/"
      aria-label="Titi Style home"
      className={cn("inline-block shrink-0", linkClassName)}
    >
      <Image
        src="/images/logo/brand-logo.png"
        alt="Titi Style"
        width={width}
        height={height}
        priority
        className={cn("h-auto w-auto", className)}
      />
    </Link>
  );
}
