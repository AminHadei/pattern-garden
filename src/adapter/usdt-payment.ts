import { USDTPayment } from './payment-interfaces';

/**
 * USDT Payment System
 * The target payment system that only accepts USDT
 */
export class USDTPaymentSystem implements USDTPayment {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  payWithUSDT(amountInUSDT: number): string {
    if (amountInUSDT > this.balance) {
      return `❌ USDT Payment Failed: Insufficient balance. Required: ${amountInUSDT} USDT, Available: ${this.balance} USDT`;
    }
    this.balance -= amountInUSDT;
    return `✅ USDT Payment Successful: ${amountInUSDT} USDT processed. Remaining balance: ${this.balance.toFixed(2)} USDT`;
  }

  getUSDTBalance(): number {
    return this.balance;
  }
}

