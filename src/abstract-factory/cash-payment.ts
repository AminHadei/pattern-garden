import { Payment } from './payment-interfaces';

/**
 * Cash Payment
 * 
 * Represents a payment made with physical cash.
 */
export class CashPayment implements Payment {
  private status: string;
  private receiptNumber: string;

  constructor() {
    this.status = 'Pending';
    this.receiptNumber = this.generateReceiptNumber();
  }

  processPayment(amount: number): string {
    this.status = 'Processing';
    this.status = 'Completed';
    
    return `✓ Cash Payment Processed Successfully\n` +
           `  Amount: $${amount.toFixed(2)}\n` +
           `  Receipt Number: ${this.receiptNumber}\n` +
           `  Payment Type: Physical Cash\n` +
           `  Processing Time: Instant\n` +
           `  Status: ${this.status}`;
  }

  getPaymentMethod(): string {
    return 'Cash';
  }

  getStatus(): string {
    return this.status;
  }

  getReceiptNumber(): string {
    return this.receiptNumber;
  }

  private generateReceiptNumber(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `CASH-${timestamp}-${random}`;
  }
}

