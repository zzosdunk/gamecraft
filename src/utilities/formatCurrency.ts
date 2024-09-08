const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const min = 0;
const max = Infinity;

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

export function formatCurrency(number: number | undefined) {
  if (number) return CURRENCY_FORMATTER.format(clamp(number, min, max));
}
