import { PaymentFactory } from './payment-factory';
import { Payment, PaymentValidator, PaymentLogger } from './payment-interfaces';
import { InternetBankPayment } from './internet-bank-payment';
import { InternetBankValidator } from './internet-bank-validator';
import { InternetBankLogger } from './internet-bank-logger';

/**
 * Internet Bank Payment Factory
 * 
 * Concrete factory that creates a family of Internet Bank payment products:
 * - InternetBankPayment
 * - InternetBankValidator
 * - InternetBankLogger
 * 
 * All products in this family are designed to work together for Internet Bank payments.
 */
export class InternetBankPaymentFactory extends PaymentFactory {
  createPayment(config?: { accountNumber: string; bankName: string }): Payment {
    if (!config || !config.accountNumber || !config.bankName) {
      throw new Error('Internet Bank payment requires accountNumber and bankName');
    }
    return new InternetBankPayment(config.accountNumber, config.bankName);
  }

  createValidator(): PaymentValidator {
    return new InternetBankValidator();
  }

  createLogger(): PaymentLogger {
    return new InternetBankLogger();
  }
}

