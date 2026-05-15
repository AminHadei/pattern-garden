import { PaymentValidator } from './payment-interfaces';

/**
 * Internet Bank Payment Validator
 * 
 * Validates Internet Bank payments by checking account number format
 * and bank name validity.
 */
export class InternetBankValidator implements PaymentValidator {
  validate(amount: number, data?: any): { isValid: boolean; message: string } {
    if (!data || !data.accountNumber || !data.bankName) {
      return {
        isValid: false,
        message: 'Internet Bank payment requires accountNumber and bankName',
      };
    }

    if (amount <= 0) {
      return {
        isValid: false,
        message: 'Payment amount must be greater than zero',
      };
    }

    if (amount > 100000) {
      return {
        isValid: false,
        message: 'Internet Bank payment amount exceeds maximum limit of $100,000',
      };
    }

    // Validate account number format (basic check)
    const accountNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!accountNumberPattern.test(data.accountNumber)) {
      return {
        isValid: false,
        message: 'Invalid account number format. Expected format: XXXX-XXXX-XXXX-XXXX',
      };
    }

    return {
      isValid: true,
      message: 'Internet Bank payment validation passed',
    };
  }

  getValidatorType(): string {
    return 'Internet Bank Validator';
  }
}

