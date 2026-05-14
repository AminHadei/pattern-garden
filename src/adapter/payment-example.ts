import { Payment } from './payment-interfaces';
import { USDTPaymentSystem } from './usdt-payment';
import { USDToUSDTAdapter, EURToUSDTAdapter, GBPToUSDTAdapter } from './payment-adapters';

/**
 * Payment Adapter Pattern Example
 * 
 * This example demonstrates how to use the Adapter pattern to integrate
 * different payment systems (USD, EUR, GBP) with a USDT payment system.
 * 
 * The Adapter pattern allows incompatible interfaces to work together
 * by wrapping an object with an adapter that makes it compatible.
 */

function processPayments(payments: Payment[]): void {
  console.log('\n=== Processing Payments ===\n');
  
  payments.forEach((payment, index) => {
    const amounts = [100, 250, 500];
    const amount = amounts[index % amounts.length];
    
    console.log(`Payment ${index + 1}: ${payment.getCurrency()} Payment`);
    console.log(`Amount: ${amount} ${payment.getCurrency()}`);
    console.log(payment.processPayment(amount));
    console.log('---\n');
  });
}

function main(): void {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║         Payment System Adapter Pattern Example           ║');
  console.log('║            Converting USD, EUR, GBP to USDT              ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Create the target USDT payment system
  const usdtPaymentSystem = new USDTPaymentSystem(50000);
  console.log(`Initial USDT Balance: ${usdtPaymentSystem.getUSDTBalance()} USDT\n`);

  // Create adapters for different currencies
  const usdAdapter = new USDToUSDTAdapter(usdtPaymentSystem);
  const eurAdapter = new EURToUSDTAdapter(usdtPaymentSystem);
  const gbpAdapter = new GBPToUSDTAdapter(usdtPaymentSystem);

  // All adapters implement the Payment interface, so they can be used interchangeably
  const payments: Payment[] = [
    usdAdapter,  // $100 USD -> 100 USDT
    eurAdapter,  // €250 EUR -> 270 USDT (250 * 1.08)
    gbpAdapter,  // £500 GBP -> 635 USDT (500 * 1.27)
  ];

  // Process all payments using the same interface
  processPayments(payments);

  // Show final USDT balance
  console.log(`\nFinal USDT Balance: ${usdtPaymentSystem.getUSDTBalance().toFixed(2)} USDT`);
  
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Adapter Pattern:                          ║');
  console.log('║    1. Allows incompatible interfaces to work together      ║');
  console.log('║    2. Enables reuse of existing payment systems            ║');
  console.log('║    3. Provides a unified interface for different systems   ║');
  console.log('║    4. Makes it easy to add new payment methods             ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
main();

