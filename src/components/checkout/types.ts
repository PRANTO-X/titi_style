export type DeliveryMethod = "standard" | "express";
export type PaymentMethod = "cod" | "bkash" | "nagad" | "card";

export const FREE_DELIVERY_THRESHOLD = 5000;

export const DELIVERY_FEES: Record<DeliveryMethod, number> = {
  standard: 80,
  express: 160,
};
