"use client";

import { cn, formatPrice } from "@/lib/format";
import {
  DELIVERY_FEES,
  type DeliveryMethod,
  type PaymentMethod,
} from "@/components/checkout/types";

interface CheckoutFormProps {
  delivery: DeliveryMethod;
  onDeliveryChange: (method: DeliveryMethod) => void;
  payment: PaymentMethod;
  onPaymentChange: (method: PaymentMethod) => void;
  freeDelivery: boolean;
}

const DIVISIONS = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const DELIVERY_OPTIONS: {
  id: DeliveryMethod;
  title: string;
  note: string;
}[] = [
  { id: "standard", title: "Standard Delivery", note: "3–5 business days" },
  { id: "express", title: "Express Delivery", note: "1–2 business days" },
];

const PAYMENT_OPTIONS: {
  id: PaymentMethod;
  title: string;
  note: string;
}[] = [
  { id: "cod", title: "Cash on Delivery", note: "Pay when your watch arrives" },
  {
    id: "bkash",
    title: "bKash",
    note: "We'll send a payment request after you order",
  },
  {
    id: "nagad",
    title: "Nagad",
    note: "We'll send a payment request after you order",
  },
  { id: "card", title: "Card", note: "Visa / Mastercard / Amex" },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
        {index}
      </span>
      <h2 className="text-xl font-semibold uppercase">{title}</h2>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
  autoComplete,
  inputMode,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "email" | "tel" | "text";
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink">
        {label} {required ? <span className="text-error">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary"
      />
    </label>
  );
}

function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  title,
  note,
  aside,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  note: string;
  aside?: string;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-sm border p-4 transition-colors",
        checked
          ? "border-primary bg-cream/60"
          : "border-line bg-white hover:border-primary/40"
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 shrink-0 accent-primary"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-xs text-body">{note}</span>
      </span>
      {aside ? (
        <span className="shrink-0 text-sm font-bold text-ink">{aside}</span>
      ) : null}
    </label>
  );
}

export function CheckoutForm({
  delivery,
  onDeliveryChange,
  payment,
  onPaymentChange,
  freeDelivery,
}: CheckoutFormProps) {
  return (
    <div className="min-w-0 space-y-8">
      <section className="rounded-sm border border-line bg-white p-6 shadow-sm md:p-8">
        <SectionTitle index="01" title="Contact Information" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" name="name" autoComplete="name" />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+8801XXXXXXXXX"
            autoComplete="tel"
          />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="sm:col-span-2"
          />
        </div>
      </section>

      <section className="rounded-sm border border-line bg-white p-6 shadow-sm md:p-8">
        <SectionTitle index="02" title="Shipping Address" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Street Address"
            name="address"
            placeholder="House, road, area"
            autoComplete="street-address"
            className="sm:col-span-2"
          />
          <Field label="City / Town" name="city" autoComplete="address-level2" />
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold tracking-wide text-ink">
              Division <span className="text-error">*</span>
            </span>
            <select
              name="division"
              required
              className="w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            >
              <option value="">Select division</option>
              {DIVISIONS.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </label>
          <Field
            label="Postal Code"
            name="postalCode"
            inputMode="numeric"
            autoComplete="postal-code"
          />
        </div>
      </section>

      <section className="rounded-sm border border-line bg-white p-6 shadow-sm md:p-8">
        <SectionTitle index="03" title="Delivery Method" />
        <div className="grid gap-4 sm:grid-cols-2">
          {DELIVERY_OPTIONS.map((option) => (
            <ChoiceCard
              key={option.id}
              name="delivery"
              value={option.id}
              checked={delivery === option.id}
              onChange={() => onDeliveryChange(option.id)}
              title={option.title}
              note={option.note}
              aside={
                freeDelivery && option.id === "standard"
                  ? "Free"
                  : formatPrice(DELIVERY_FEES[option.id])
              }
            />
          ))}
        </div>
      </section>

      <section className="rounded-sm border border-line bg-white p-6 shadow-sm md:p-8">
        <SectionTitle index="04" title="Payment Method" />
        <div className="grid gap-4">
          {PAYMENT_OPTIONS.map((option) => (
            <ChoiceCard
              key={option.id}
              name="payment"
              value={option.id}
              checked={payment === option.id}
              onChange={() => onPaymentChange(option.id)}
              title={option.title}
              note={option.note}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
