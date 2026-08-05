"use client";

import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/format";

interface AuthFieldProps {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export function AuthField({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  required = true,
  value,
  onChange,
  error,
  Icon,
}: AuthFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold tracking-wide text-ink"
      >
        {label} {required ? <span className="text-error">*</span> : null}
      </label>
      <div className="relative">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-body" />
        ) : null}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className={cn(
            "w-full rounded-btn border bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:outline-none",
            error ? "border-error" : "border-line focus:border-primary"
          )}
        />
      </div>
      {error ? <p className="mt-1 text-xs text-error">{error}</p> : null}
    </div>
  );
}
