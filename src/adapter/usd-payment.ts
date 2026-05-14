import { Payment } from './payment-interfaces';

/**
 * USD Payment System
 * Concrete implementation of Payment interface for US Dollar
 */
export class USDPayment implements Payment {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  processPayment(amount: number): string {
    if (amount > this.balance) {
      return `❌ USD Payment Failed: Insufficient balance. Required: $${amount}, Available: $${this.balance}`;
    }
    this.balance -= amount;
    return `✅ USD Payment Successful: $${amount} processed. Remaining balance: $${this.balance.toFixed(2)}`;
  }

  getCurrency(): string {
    return 'USD';
  }

  getBalance(): number {
    return this.balance;
  }
}

