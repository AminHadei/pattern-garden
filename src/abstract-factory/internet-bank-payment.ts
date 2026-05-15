import { Payment } from './payment-interfaces';

/**
 * Internet Bank Payment
 * 
 * Represents a payment made through online banking system.
 */
export class InternetBankPayment implements Payment {
  private accountNumber: string;
  private bankName: string;
  private status: string;

  constructor(accountNumber: string, bankName: string) {
    this.accountNumber = accountNumber;
    this.bankName = bankName;
    this.status = 'Pending';
  }

  processPayment(amount: number): string {
    this.status = 'Processing';
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    const processingTime = Math.floor(Math.random() * 2000) + 1000;
    this.status = 'Completed';
    
    return `✓ Internet Bank Payment Processed Successfully\n` +
           `  Bank: ${this.bankName}\n` +
           `  Account: ${this.accountNumber}\n` +
           `  Amount: $${amount.toFixed(2)}\n` +
           `  Verification Code: ${verificationCode}\n` +
           `  Processing Time: ${processingTime}ms\n` +
           `  Status: ${this.status}`;
  }

  getPaymentMethod(): string {
    return 'Internet Bank';
  }

  getStatus(): string {
    return this.status;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getBankName(): string {
    return this.bankName;
  }
}

