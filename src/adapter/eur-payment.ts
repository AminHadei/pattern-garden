import { Payment } from './payment-interfaces';

/**
 * EUR Payment System
 * Concrete implementation of Payment interface for Euro
 */
export class EURPayment implements Payment {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  processPayment(amount: number): string {
    if (amount > this.balance) {
      return `❌ EUR Payment Failed: Insufficient balance. Required: €${amount}, Available: €${this.balance}`;
    }
    this.balance -= amount;
    return `✅ EUR Payment Successful: €${amount} processed. Remaining balance: €${this.balance.toFixed(2)}`;
  }

  getCurrency(): string {
    return 'EUR';
  }

  getBalance(): number {
    return this.balance;
  }
}

