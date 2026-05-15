# Abstract Factory Pattern - Payment System

This project provides a complete example of the Abstract Factory pattern for a payment system that creates families of related payment products.

## Payment Systems

Each payment system consists of a family of related products:

### 1. Internet Bank Payment System
- **InternetBankPayment**: Payment processing through online banking
- **InternetBankValidator**: Validates account numbers and bank information
- **InternetBankLogger**: Logs transactions to banking system database

### 2. Cash Payment System
- **CashPayment**: Physical cash payment processing
- **CashValidator**: Validates cash payment amounts and limits
- **CashLogger**: Logs transactions to point of sale system

### 3. Cryptocurrency Payment System
- **CryptocurrencyPayment**: Blockchain-based payment processing
- **CryptocurrencyValidator**: Validates wallet addresses and crypto transactions
- **CryptocurrencyLogger**: Logs transactions to blockchain explorer

## File Structure

```
abstract-factory/
├── payment-interfaces.ts              # Common interfaces (Payment, Validator, Logger)
├── internet-bank-payment.ts           # Internet Bank payment implementation
├── cash-payment.ts                    # Cash payment implementation
├── cryptocurrency-payment.ts          # Cryptocurrency payment implementation
├── internet-bank-validator.ts         # Internet Bank validator implementation
├── cash-validator.ts                  # Cash validator implementation
├── cryptocurrency-validator.ts        # Cryptocurrency validator implementation
├── internet-bank-logger.ts            # Internet Bank logger implementation
├── cash-logger.ts                     # Cash logger implementation
├── cryptocurrency-logger.ts           # Cryptocurrency logger implementation
├── payment-factory.ts                 # Abstract factory interface
├── internet-bank-factory.ts           # Internet Bank factory implementation
├── cash-factory.ts                    # Cash factory implementation
├── cryptocurrency-factory.ts          # Cryptocurrency factory implementation
├── payment-example.ts                 # Abstract Factory usage example
└── README.md                          # This file
```

## Usage

### Creating a Payment System Family

```typescript
import { InternetBankPaymentFactory } from './internet-bank-factory';
import { CashPaymentFactory } from './cash-factory';
import { CryptocurrencyPaymentFactory } from './cryptocurrency-factory';

// Create Internet Bank payment system
const internetBankFactory = new InternetBankPaymentFactory();
const payment = internetBankFactory.createPayment({
  accountNumber: '1234-5678-9012-3456',
  bankName: 'National Bank',
});
const validator = internetBankFactory.createValidator();
const logger = internetBankFactory.createLogger();

// All products work together as a family
const validation = validator.validate(1500.00, {
  accountNumber: '1234-5678-9012-3456',
  bankName: 'National Bank',
});

if (validation.isValid) {
  payment.processPayment(1500.00);
  logger.log(payment, 1500.00);
}
```

### Switching Between Payment Systems

```typescript
// Client code works with abstract factory
function processPayment(factory: PaymentFactory, amount: number, config?: any) {
  const payment = factory.createPayment(config);
  const validator = factory.createValidator();
  const logger = factory.createLogger();

  // Use the family of products
  const validation = validator.validate(amount, config);
  if (validation.isValid) {
    payment.processPayment(amount);
    logger.log(payment, amount);
  }
}

// Can easily switch between different payment systems
const internetBankFactory = new InternetBankPaymentFactory();
const cashFactory = new CashPaymentFactory();
const cryptoFactory = new CryptocurrencyPaymentFactory();

processPayment(internetBankFactory, 1500.00, {
  accountNumber: '1234-5678-9012-3456',
  bankName: 'National Bank',
});

processPayment(cashFactory, 250.00);
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/abstract-factory/payment-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/abstract-factory/payment-example.js
```

## Benefits of Abstract Factory Pattern

1. **Creates Product Families**: Creates families of related objects that work together
2. **Ensures Consistency**: Products from the same factory are designed to work together
3. **Easy to Switch**: Can easily switch between different product families
4. **Isolates Concrete Classes**: Client code doesn't depend on concrete implementations
5. **Promotes Consistency**: Ensures all products in a family follow the same design
6. **Dependency Inversion**: Client depends on abstractions, not concrete classes

## Abstract Factory vs Factory Method

- **Factory Method**: Creates one type of product (e.g., just Payment)
- **Abstract Factory**: Creates families of related products (e.g., Payment, Validator, Logger)

## Design Pattern

Abstract Factory is a creational design pattern that:
- Provides an interface for creating families of related objects
- Ensures that products from the same family are compatible
- Makes it easy to switch between different product families
- Isolates concrete classes from client code

## Use Cases

This pattern is useful in the following scenarios:
- Systems that need to create families of related objects
- When products from the same family must work together
- When you need to support multiple product families
- Cross-platform UI libraries (different families for different platforms)
- Database abstraction layers (different families for different databases)

