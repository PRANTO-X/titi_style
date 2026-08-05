export function formatPrice(amount: number): string {
  return `\u09F3${new Intl.NumberFormat("en-BD").format(amount)}`;
}

export function formatComparePrice(amount?: number): string | null {
  return amount === undefined ? null : formatPrice(amount);
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
