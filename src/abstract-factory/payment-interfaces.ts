/**
 * Payment Interface
 * 
 * Defines the common interface that all payment methods must implement.
 */
export interface Payment {
  processPayment(amount: number): string;
  getPaymentMethod(): string;
  getStatus(): string;
}

/**
 * Payment Validator Interface
 * 
 * Defines the interface for validating payments before processing.
 */
export interface PaymentValidator {
  validate(amount: number, data?: any): { isValid: boolean; message: string };
  getValidatorType(): string;
}

/**
 * Payment Logger Interface
 * 
 * Defines the interface for logging payment transactions.
 */
export interface PaymentLogger {
  log(payment: Payment, amount: number): void;
  getLogs(): string[];
  getLoggerType(): string;
}

