import { PaymentFactory } from './payment-factory';
import { Payment, PaymentValidator, PaymentLogger } from './payment-interfaces';
import { CashPayment } from './cash-payment';
import { CashValidator } from './cash-validator';
import { CashLogger } from './cash-logger';

/**
 * Cash Payment Factory
 * 
 * Concrete factory that creates a family of Cash payment products:
 * - CashPayment
 * - CashValidator
 * - CashLogger
 * 
 * All products in this family are designed to work together for Cash payments.
 */
export class CashPaymentFactory extends PaymentFactory {
  createPayment(config?: any): Payment {
    return new CashPayment();
  }

  createValidator(): PaymentValidator {
    return new CashValidator();
  }

  createLogger(): PaymentLogger {
    return new CashLogger();
  }
}

