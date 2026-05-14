import { Payment, USDTPayment } from './payment-interfaces';
import { USDTPaymentSystem } from './usdt-payment';

/**
 * Exchange rates (simplified - in a real application, these would be fetched from an API)
 */
const EXCHANGE_RATES = {
  USD_TO_USDT: 1.0,    // 1 USD = 1 USDT (simplified)
  EUR_TO_USDT: 1.08,   // 1 EUR = 1.08 USDT
  GBP_TO_USDT: 1.27,   // 1 GBP = 1.27 USDT
};

/**
 * Payment Adapter Base Class
 * Adapts different payment systems to work with USDT payment system
 */
export abstract class PaymentAdapter implements Payment {
  protected usdtPaymentSystem: USDTPaymentSystem;
  protected exchangeRate: number;

  constructor(usdtPaymentSystem: USDTPaymentSystem, exchangeRate: number) {
    this.usdtPaymentSystem = usdtPaymentSystem;
    this.exchangeRate = exchangeRate;
  }

  processPayment(amount: number): string {
    const amountInUSDT = this.convertToUSDT(amount);
    return this.usdtPaymentSystem.payWithUSDT(amountInUSDT);
  }

  protected convertToUSDT(amount: number): number {
    return amount * this.exchangeRate;
  }

  abstract getCurrency(): string;
}

/**
 * USD to USDT Adapter
 * Adapts USD payments to work with USDT payment system
 */
export class USDToUSDTAdapter extends PaymentAdapter {
  constructor(usdtPaymentSystem: USDTPaymentSystem) {
    super(usdtPaymentSystem, EXCHANGE_RATES.USD_TO_USDT);
  }

  getCurrency(): string {
    return 'USD';
  }
}

/**
 * EUR to USDT Adapter
 * Adapts EUR payments to work with USDT payment system
 */
export class EURToUSDTAdapter extends PaymentAdapter {
  constructor(usdtPaymentSystem: USDTPaymentSystem) {
    super(usdtPaymentSystem, EXCHANGE_RATES.EUR_TO_USDT);
  }

  getCurrency(): string {
    return 'EUR';
  }
}

/**
 * GBP to USDT Adapter
 * Adapts GBP payments to work with USDT payment system
 */
export class GBPToUSDTAdapter extends PaymentAdapter {
  constructor(usdtPaymentSystem: USDTPaymentSystem) {
    super(usdtPaymentSystem, EXCHANGE_RATES.GBP_TO_USDT);
  }

  getCurrency(): string {
    return 'GBP';
  }
}

