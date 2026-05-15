import { PaymentValidator } from './payment-interfaces';

/**
 * Cash Payment Validator
 * 
 * Validates Cash payments by checking amount limits and basic constraints.
 */
export class CashValidator implements PaymentValidator {
  validate(amount: number, data?: any): { isValid: boolean; message: string } {
    if (amount <= 0) {
      return {
        isValid: false,
        message: 'Payment amount must be greater than zero',
      };
    }

    if (amount > 10000) {
      return {
        isValid: false,
        message: 'Cash payment amount exceeds maximum limit of $10,000',
      };
    }

    // Cash payments don't require additional data
    return {
      isValid: true,
      message: 'Cash payment validation passed',
    };
  }

  getValidatorType(): string {
    return 'Cash Validator';
  }
}

