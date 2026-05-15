import { Payment, PaymentLogger } from './payment-interfaces';

/**
 * Cryptocurrency Payment Logger
 * 
 * Logs Cryptocurrency payment transactions with blockchain information.
 */
export class CryptocurrencyLogger implements PaymentLogger {
  private logs: string[] = [];

  log(payment: Payment, amount: number): void {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Cryptocurrency Payment Log:\n` +
                     `  Method: ${payment.getPaymentMethod()}\n` +
                     `  Amount: $${amount.toFixed(2)}\n` +
                     `  Status: ${payment.getStatus()}\n` +
                     `  Logged to: Blockchain Explorer`;
    
    this.logs.push(logEntry);
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  getLoggerType(): string {
    return 'Cryptocurrency Logger';
  }
}

