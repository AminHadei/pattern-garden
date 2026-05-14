import { Payment } from './payment-interfaces';

/**
 * GBP Payment System
 * Concrete implementation of Payment interface for British Pound
 */
export class GBPPayment implements Payment {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  processPayment(amount: number): string {
    if (amount > this.balance) {
      return `❌ GBP Payment Failed: Insufficient balance. Required: £${amount}, Available: £${this.balance}`;
    }
    this.balance -= amount;
    return `✅ GBP Payment Successful: £${amount} processed. Remaining balance: £${this.balance.toFixed(2)}`;
  }

  getCurrency(): string {
    return 'GBP';
  }

  getBalance(): number {
    return this.balance;
  }
}

