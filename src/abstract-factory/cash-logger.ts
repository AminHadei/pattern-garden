import { Payment, PaymentLogger } from './payment-interfaces';

/**
 * Cash Payment Logger
 * 
 * Logs Cash payment transactions with receipt information.
 */
export class CashLogger implements PaymentLogger {
  private logs: string[] = [];

  log(payment: Payment, amount: number): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Cash Payment Log:\n` +
                     `  Method: ${payment.getPaymentMethod()}\n` +
                     `  Amount: $${amount.toFixed(2)}\n` +
                     `  Status: ${payment.getStatus()}\n` +
                     `  Logged to: Point of Sale System`;
    
    this.logs.push(logEntry);
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  getLoggerType(): string {
    return 'Cash Logger';
  }
}

