import { Currency } from '../types';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  AED: 'AED '
};

export function formatPrice(amount: number | undefined | null, currency: Currency): string {
  const safeAmount = Math.round(amount || 0);
  const symbol = CURRENCY_SYMBOLS[currency] || '₹';
  if (currency === 'INR') {
    return `${symbol}${safeAmount.toLocaleString('en-IN')}`;
  }
  return `${symbol}${safeAmount.toLocaleString('en-US')}`;
}

export function calculateDiscountPercentage(price: number, originalPrice?: number): number | null {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
