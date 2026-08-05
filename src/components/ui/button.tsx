import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/format";

type ButtonVariant = "primary" | "dark" | "outline" | "light" | "gold";
type ButtonSize = "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark border border-primary hover:border-primary-dark",
  dark: "bg-ink text-white hover:bg-black border border-ink",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  light:
    "bg-white text-ink border border-white hover:bg-ink hover:text-white",
  gold: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "px-[30px] py-3 text-xs",
  lg: "px-[35px] py-[14px] text-xs",
};

interface ButtonBase {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = ButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-btn font-sans font-semibold uppercase tracking-btn transition-colors duration-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "lg",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  if (rest.href !== undefined) {
    const { href } = rest;
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
