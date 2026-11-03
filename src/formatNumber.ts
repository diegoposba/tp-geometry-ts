/**
 * Formate un nombre en conservant au moins une décimale (3 -> "3.0", 1.25 -> "1.25")
 */
export default function formatNumber(value: number): string {
  return Number.isInteger(value) ? value.toFixed(1) : value.toString();
}
