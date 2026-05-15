import { PaymentFactory } from './payment-factory';
import { Payment, PaymentValidator, PaymentLogger } from './payment-interfaces';
import { CryptocurrencyPayment } from './cryptocurrency-payment';
import { CryptocurrencyValidator } from './cryptocurrency-validator';
import { CryptocurrencyLogger } from './cryptocurrency-logger';

/**
 * Cryptocurrency Payment Factory
 * 
 * Concrete factory that creates a family of Cryptocurrency payment products:
 * - CryptocurrencyPayment
 * - CryptocurrencyValidator
 * - CryptocurrencyLogger
 * 
 * All products in this family are designed to work together for Cryptocurrency payments.
 */
export class CryptocurrencyPaymentFactory extends PaymentFactory {
  createPayment(config?: { walletAddress: string; cryptoType?: string }): Payment {
    if (!config || !config.walletAddress) {
      throw new Error('Cryptocurrency payment requires walletAddress');
    }
    return new CryptocurrencyPayment(
      config.walletAddress,
      config.cryptoType || 'Bitcoin'
    );
  }

  createValidator(): PaymentValidator {
    return new CryptocurrencyValidator();
  }

  createLogger(): PaymentLogger {
    return new CryptocurrencyLogger();
  }
}

