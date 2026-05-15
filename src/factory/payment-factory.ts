import { Payment } from './payment-interfaces';
import { InternetBankPayment } from './internet-bank-payment';
import { CashPayment } from './cash-payment';
import { CryptocurrencyPayment } from './cryptocurrency-payment';

/**
 * Payment Type Enum
 * 
 * Defines the available payment types that can be created
 * by the factory.
 */
export enum PaymentType {
  INTERNET_BANK = 'internet_bank',
  CASH = 'cash',
  CRYPTOCURRENCY = 'cryptocurrency',
}

/**
 * Payment Factory Configuration
 * 
 * Configuration object for creating payment instances.
 */
export interface PaymentFactoryConfig {
  type: PaymentType;
  // For Internet Bank
  accountNumber?: string;
  bankName?: string;
  // For Cryptocurrency
  walletAddress?: string;
  cryptoType?: string;
}

/**
 * Payment Factory (Factory Method Pattern)
 * 
 * The Factory Method pattern provides an interface for creating objects
 * without specifying their exact classes. This factory creates different
 * types of payment objects based on the payment type.
 * 
 * Benefits:
 * - Encapsulates object creation logic
 * - Makes it easy to add new payment types
 * - Provides a single point of creation
 * - Allows for flexible object creation based on runtime conditions
 */
export class PaymentFactory {
  /**
   * Creates a payment instance based on the provided configuration
   * 
   * @param config The payment factory configuration
   * @returns A Payment instance of the requested type
   * @throws Error if the payment type is invalid or required parameters are missing
   */
  static createPayment(config: PaymentFactoryConfig): Payment {
    switch (config.type) {
      case PaymentType.INTERNET_BANK:
        if (!config.accountNumber || !config.bankName) {
          throw new Error('Internet Bank payment requires accountNumber and bankName');
        }
        return new InternetBankPayment(config.accountNumber, config.bankName);

      case PaymentType.CASH:
        return new CashPayment();

      case PaymentType.CRYPTOCURRENCY:
        if (!config.walletAddress) {
          throw new Error('Cryptocurrency payment requires walletAddress');
        }
        return new CryptocurrencyPayment(
          config.walletAddress,
          config.cryptoType || 'Bitcoin'
        );

      default:
        throw new Error(`Unknown payment type: ${config.type}`);
    }
  }

  /**
   * Creates an Internet Bank payment with default values
   * 
   * @param accountNumber The bank account number
   * @param bankName The name of the bank
   * @returns An InternetBankPayment instance
   */
  static createInternetBankPayment(
    accountNumber: string,
    bankName: string
  ): Payment {
    return this.createPayment({
      type: PaymentType.INTERNET_BANK,
      accountNumber,
      bankName,
    });
  }

  /**
   * Creates a Cash payment
   * 
   * @returns A CashPayment instance
   */
  static createCashPayment(): Payment {
    return this.createPayment({
      type: PaymentType.CASH,
    });
  }

  /**
   * Creates a Cryptocurrency payment
   * 
   * @param walletAddress The cryptocurrency wallet address
   * @param cryptoType The type of cryptocurrency (default: Bitcoin)
   * @returns A CryptocurrencyPayment instance
   */
  static createCryptocurrencyPayment(
    walletAddress: string,
    cryptoType: string = 'Bitcoin'
  ): Payment {
    return this.createPayment({
      type: PaymentType.CRYPTOCURRENCY,
      walletAddress,
      cryptoType,
    });
  }
}

