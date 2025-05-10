// Utility functions
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}

// Format number with commas
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Format currency
export function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

// Format percentage
export function formatPercent(num: number): string {
  return `${num > 0 ? "+" : ""}${num.toFixed(1)}%`
}

// Generate random data for demo purposes
export function generateRandomData(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
