import { Payment } from './payment-interfaces';
import { PaymentFactory, PaymentType } from './payment-factory';

/**
 * Factory Method Pattern Example - Payment System
 * 
 * This example demonstrates the Factory Method pattern for creating
 * different types of payment objects (Internet Bank, Cash, Cryptocurrency).
 * 
 * The Factory Method pattern:
 * - Provides a way to create objects without specifying their exact classes
 * - Encapsulates object creation logic in a factory class
 * - Makes it easy to add new payment types without modifying existing code
 * - Provides a single point of creation for all payment types
 */

function processPayment(payment: Payment, amount: number): void {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Payment Method: ${payment.getPaymentMethod()}`);
  console.log(`${'='.repeat(60)}`);
  console.log(payment.processPayment(amount));
  console.log(`${'='.repeat(60)}\n`);
}

function main(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║      Factory Method Pattern - Payment System Example      ║');
  console.log('║       Internet Bank | Cash | Cryptocurrency Payments      ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: Create Internet Bank Payment using factory
  console.log('📌 Example 1: Creating Internet Bank Payment');
  const internetBankPayment = PaymentFactory.createInternetBankPayment(
    '1234-5678-9012-3456',
    'National Bank'
  );
  processPayment(internetBankPayment, 1500.00);

  // Example 2: Create Cash Payment using factory
  console.log('📌 Example 2: Creating Cash Payment');
  const cashPayment = PaymentFactory.createCashPayment();
  processPayment(cashPayment, 250.00);

  // Example 3: Create Cryptocurrency Payment using factory
  console.log('📌 Example 3: Creating Cryptocurrency Payment');
  const cryptoPayment = PaymentFactory.createCryptocurrencyPayment(
    '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    'Bitcoin'
  );
  processPayment(cryptoPayment, 5000.00);

  // Example 4: Create payments using the generic createPayment method
  console.log('📌 Example 4: Creating Payments using Generic Factory Method');
  
  const payments: Payment[] = [
    PaymentFactory.createPayment({
      type: PaymentType.INTERNET_BANK,
      accountNumber: '9876-5432-1098-7654',
      bankName: 'International Bank',
    }),
    PaymentFactory.createPayment({
      type: PaymentType.CASH,
    }),
    PaymentFactory.createPayment({
      type: PaymentType.CRYPTOCURRENCY,
      walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      cryptoType: 'Ethereum',
    }),
  ];

  const amounts = [750.50, 100.00, 2000.00];
  payments.forEach((payment, index) => {
    processPayment(payment, amounts[index]);
  });

  // Example 5: Dynamic payment creation based on user input
  console.log('📌 Example 5: Dynamic Payment Creation');
  console.log('Simulating payment selection based on user preference...\n');

  const paymentScenarios = [
    {
      type: PaymentType.INTERNET_BANK,
      description: 'User selects Internet Bank payment',
      config: {
        type: PaymentType.INTERNET_BANK,
        accountNumber: '1111-2222-3333-4444',
        bankName: 'Digital Bank',
      },
      amount: 1200.00,
    },
    {
      type: PaymentType.CASH,
      description: 'User selects Cash payment',
      config: {
        type: PaymentType.CASH,
      },
      amount: 50.00,
    },
    {
      type: PaymentType.CRYPTOCURRENCY,
      description: 'User selects Cryptocurrency payment',
      config: {
        type: PaymentType.CRYPTOCURRENCY,
        walletAddress: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        cryptoType: 'Bitcoin',
      },
      amount: 3500.00,
    },
  ];

  paymentScenarios.forEach((scenario) => {
    console.log(`\n${scenario.description}`);
    const payment = PaymentFactory.createPayment(scenario.config);
    processPayment(payment, scenario.amount);
  });

  // Summary
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Factory Method Pattern:                   ║');
  console.log('║    1. Encapsulates object creation logic                   ║');
  console.log('║    2. Makes it easy to add new payment types               ║');
  console.log('║    3. Provides a single point of creation                  ║');
  console.log('║    4. Allows flexible object creation                      ║');
  console.log('║    5. Client code doesn\'t depend on concrete classes       ║');
  console.log('║    6. Follows Open/Closed Principle                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
main();

