/**
 * Payment Interface
 * Represents a standard payment system contract
 */
export interface Payment {
  processPayment(amount: number): string;
  getCurrency(): string;
}

/**
 * USDT Payment Interface
 * Represents the target payment system we want to adapt to
 */
export interface USDTPayment {
  payWithUSDT(amountInUSDT: number): string;
  getUSDTBalance(): number;
}

