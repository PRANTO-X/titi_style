"use client";

import { MinusIcon, PlusIcon } from "@/components/ui/icons";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-line bg-white">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="flex h-12 w-12 items-center justify-center text-ink transition-colors hover:bg-paper"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <span className="w-14 text-center text-sm font-semibold text-ink">
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(quantity + 1)}
        className="flex h-12 w-12 items-center justify-center text-ink transition-colors hover:bg-paper"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
