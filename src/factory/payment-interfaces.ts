/**
 * Payment Interface
 * 
 * Defines the common interface that all payment methods must implement.
 * This allows the client code to work with any payment type without
 * knowing the specific implementation details.
 */

export interface Payment {
  /**
   * Process a payment with the given amount
   * @param amount The amount to be paid
   * @returns A message describing the payment result
   */
  processPayment(amount: number): string;

  /**
   * Get the payment method name
   * @returns The name of the payment method
   */
  getPaymentMethod(): string;

  /**
   * Get the payment status
   * @returns The current status of the payment
   */
  getStatus(): string;
}

