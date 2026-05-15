import { Payment, PaymentLogger } from './payment-interfaces';

/**
 * Internet Bank Payment Logger
 * 
 * Logs Internet Bank payment transactions with detailed banking information.
 */
export class InternetBankLogger implements PaymentLogger {
  private logs: string[] = [];

  log(payment: Payment, amount: number): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Internet Bank Payment Log:\n` +
                     `  Method: ${payment.getPaymentMethod()}\n` +
                     `  Amount: $${amount.toFixed(2)}\n` +
                     `  Status: ${payment.getStatus()}\n` +
                     `  Logged to: Banking System Database`;
    
    this.logs.push(logEntry);
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  getLoggerType(): string {
    return 'Internet Bank Logger';
  }
}

