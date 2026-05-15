import { Payment, PaymentValidator, PaymentLogger } from './payment-interfaces';

/**
 * Abstract Payment Factory
 * 
 * The Abstract Factory pattern provides an interface for creating families
 * of related or dependent objects without specifying their concrete classes.
 * 
 * This abstract factory defines methods to create:
 * - Payment objects
 * - Payment Validators
 * - Payment Loggers
 * 
 * Each concrete factory will create a family of products that work together.
 */
export abstract class PaymentFactory {
  /**
   * Creates a Payment instance
   */
  abstract createPayment(config?: any): Payment;

  /**
   * Creates a Payment Validator instance
   */
  abstract createValidator(): PaymentValidator;

  /**
   * Creates a Payment Logger instance
   */
  abstract createLogger(): PaymentLogger;
}

