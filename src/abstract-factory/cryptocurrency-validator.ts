import { PaymentValidator } from './payment-interfaces';

/**
 * Cryptocurrency Payment Validator
 * 
 * Validates Cryptocurrency payments by checking wallet address format
 * and amount limits.
 */
export class CryptocurrencyValidator implements PaymentValidator {
  validate(amount: number, data?: any): { isValid: boolean; message: string } {
    if (!data || !data.walletAddress) {
      return {
        isValid: false,
        message: 'Cryptocurrency payment requires walletAddress',
      };
    }

    if (amount <= 0) {
      return {
        isValid: false,
        message: 'Payment amount must be greater than zero',
      };
    }

    if (amount > 50000) {
      return {
        isValid: false,
        message: 'Cryptocurrency payment amount exceeds maximum limit of $50,000',
      };
    }

    // Validate wallet address format (basic check)
    const bitcoinPattern = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^bc1[a-z0-9]{39,59}$/;
    const ethereumPattern = /^0x[a-fA-F0-9]{40}$/;
    
    if (!bitcoinPattern.test(data.walletAddress) && !ethereumPattern.test(data.walletAddress)) {
      return {
        isValid: false,
        message: 'Invalid wallet address format',
      };
    }

    return {
      isValid: true,
      message: 'Cryptocurrency payment validation passed',
    };
  }

  getValidatorType(): string {
    return 'Cryptocurrency Validator';
  }
}

