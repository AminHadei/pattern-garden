import { PaymentFactory } from './payment-factory';
import { InternetBankPaymentFactory } from './internet-bank-factory';
import { CashPaymentFactory } from './cash-factory';
import { CryptocurrencyPaymentFactory } from './cryptocurrency-factory';
import { Payment } from './payment-interfaces';

/**
 * Abstract Factory Pattern Example - Payment System
 * 
 * This example demonstrates the Abstract Factory pattern for creating
 * families of related payment objects (Payment, Validator, Logger).
 * 
 * The Abstract Factory pattern:
 * - Provides an interface for creating families of related objects
 * - Ensures that products from the same family work together
 * - Makes it easy to switch between different product families
 * - Isolates concrete classes from clients
 */

interface PaymentSystem {
  factory: PaymentFactory;
  name: string;
}

function processPaymentWithSystem(
  system: PaymentSystem,
  amount: number,
  config?: any
): void {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`Payment System: ${system.name}`);
  console.log(`${'='.repeat(70)}`);

  // Create the family of products using the factory
  const payment = system.factory.createPayment(config);
  const validator = system.factory.createValidator();
  const logger = system.factory.createLogger();

  console.log(`\nFactory Products Created:`);
  console.log(`  - Payment: ${payment.getPaymentMethod()}`);
  console.log(`  - Validator: ${validator.getValidatorType()}`);
  console.log(`  - Logger: ${logger.getLoggerType()}`);

  // Validate payment
  console.log(`\n📋 Validation:`);
  const validation = validator.validate(amount, config);
  console.log(`  ${validation.isValid ? '✓' : '✗'} ${validation.message}`);

  if (!validation.isValid) {
    console.log(`\n❌ Payment validation failed. Cannot process payment.`);
    return;
  }

  // Process payment
  console.log(`\n💳 Processing Payment:`);
  const result = payment.processPayment(amount);
  console.log(result);

  // Log payment
  console.log(`\n📝 Logging Payment:`);
  logger.log(payment, amount);
  const logs = logger.getLogs();
  console.log(logs[logs.length - 1]);

  console.log(`\n${'='.repeat(70)}\n`);
}

function main(): void {
  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║       Abstract Factory Pattern - Payment System Example       ║');
  console.log('║         Creating Families of Related Payment Products         ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  // Example 1: Internet Bank Payment System
  console.log('📌 Example 1: Internet Bank Payment System');
  const internetBankSystem: PaymentSystem = {
    factory: new InternetBankPaymentFactory(),
    name: 'Internet Bank Payment System',
  };

  processPaymentWithSystem(internetBankSystem, 1500.00, {
    accountNumber: '1234-5678-9012-3456',
    bankName: 'National Bank',
  });

  // Example 2: Cash Payment System
  console.log('📌 Example 2: Cash Payment System');
  const cashSystem: PaymentSystem = {
    factory: new CashPaymentFactory(),
    name: 'Cash Payment System',
  };

  processPaymentWithSystem(cashSystem, 250.00);

  // Example 3: Cryptocurrency Payment System
  console.log('📌 Example 3: Cryptocurrency Payment System');
  const cryptoSystem: PaymentSystem = {
    factory: new CryptocurrencyPaymentFactory(),
    name: 'Cryptocurrency Payment System',
  };

  processPaymentWithSystem(cryptoSystem, 5000.00, {
    walletAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    cryptoType: 'Bitcoin',
  });

  // Example 4: Switching between payment systems dynamically
  console.log('📌 Example 4: Dynamic Payment System Selection');
  console.log('Simulating payment system selection based on user preference...\n');

  const paymentSystems: PaymentSystem[] = [
    {
      factory: new InternetBankPaymentFactory(),
      name: 'Internet Bank',
    },
    {
      factory: new CashPaymentFactory(),
      name: 'Cash',
    },
    {
      factory: new CryptocurrencyPaymentFactory(),
      name: 'Cryptocurrency',
    },
  ];

  const scenarios = [
    {
      systemIndex: 0,
      amount: 1200.00,
      config: {
        accountNumber: '9876-5432-1098-7654',
        bankName: 'International Bank',
      },
    },
    {
      systemIndex: 1,
      amount: 50.00,
      config: undefined,
    },
    {
      systemIndex: 2,
      amount: 3500.00,
      config: {
        walletAddress: '0x1234567890123456789012345678901234567890',
        cryptoType: 'Ethereum',
      },
    },
  ];

  scenarios.forEach((scenario, index) => {
    console.log(`\nScenario ${index + 1}: User selects ${paymentSystems[scenario.systemIndex].name}`);
    processPaymentWithSystem(
      paymentSystems[scenario.systemIndex],
      scenario.amount,
      scenario.config
    );
  });

  // Example 5: Demonstrating product family consistency
  console.log('📌 Example 5: Product Family Consistency');
  console.log('All products from the same factory work together seamlessly...\n');

  const factory = new InternetBankPaymentFactory();
  const payment = factory.createPayment({
    accountNumber: '1111-2222-3333-4444',
    bankName: 'Digital Bank',
  });
  const validator = factory.createValidator();
  const logger = factory.createLogger();

  console.log('Created products from InternetBankPaymentFactory:');
  console.log(`  Payment: ${payment.getPaymentMethod()}`);
  console.log(`  Validator: ${validator.getValidatorType()}`);
  console.log(`  Logger: ${logger.getLoggerType()}`);
  console.log('\n✓ All products are from the same family and work together!');

  // Summary
  console.log('\n╔═══════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Abstract Factory Pattern:                    ║');
  console.log('║    1. Creates families of related objects                     ║');
  console.log('║    2. Ensures products from same family work together         ║');
  console.log('║    3. Easy to switch between product families                 ║');
  console.log('║    4. Isolates concrete classes from client code              ║');
  console.log('║    5. Promotes consistency among products                     ║');
  console.log('║    6. Follows Dependency Inversion Principle                  ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');
}

// Run the example
main();

