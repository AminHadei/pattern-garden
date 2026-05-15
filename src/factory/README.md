# Factory Method Pattern - Payment System

This project provides a complete example of the Factory Method pattern for a payment system that includes three different payment methods:

## Payment Methods

### 1. Internet Bank
Payment through online banking system that requires account number and bank name.

### 2. Cash
Payment with physical cash that is processed instantly.

### 3. Cryptocurrency
Payment using cryptocurrencies such as Bitcoin and Ethereum that are processed on blockchain networks.

## File Structure

```
factory/
├── payment-interfaces.ts          # Common interface for all payment methods
├── internet-bank-payment.ts       # Internet bank payment implementation
├── cash-payment.ts                # Cash payment implementation
├── cryptocurrency-payment.ts      # Cryptocurrency payment implementation
├── payment-factory.ts             # Factory for creating payment objects
├── payment-example.ts             # Factory Method usage example
└── README.md                      # This file
```

## Usage

### Method 1: Using Factory Helper Methods

```typescript
import { PaymentFactory } from './payment-factory';

// Create Internet Bank payment
const internetBankPayment = PaymentFactory.createInternetBankPayment(
  '1234-5678-9012-3456',
  'National Bank'
);

// Create Cash payment
const cashPayment = PaymentFactory.createCashPayment();

// Create Cryptocurrency payment
const cryptoPayment = PaymentFactory.createCryptocurrencyPayment(
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  'Bitcoin'
);
```

### Method 2: Using Generic createPayment Method

```typescript
import { PaymentFactory, PaymentType } from './payment-factory';

const payment = PaymentFactory.createPayment({
  type: PaymentType.INTERNET_BANK,
  accountNumber: '1234-5678-9012-3456',
  bankName: 'National Bank',
});
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/builder/payment-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/factory/payment-example.js
```

## Benefits of Factory Method Pattern

1. **Encapsulates Creation Logic**: Object creation logic is centralized in one place
2. **Easy to Extend**: Add new payment methods without modifying existing code
3. **Single Point of Creation**: All payment objects are created from one factory
4. **Flexibility**: Create objects based on runtime conditions
5. **Low Coupling**: Client code doesn't depend on concrete classes
6. **Open/Closed Principle**: Open for extension, closed for modification

## Design Pattern

Factory Method is a creational design pattern that:
- Provides an interface for creating objects
- Allows subclasses to determine the type of objects to be created
- Reduces coupling between client code and concrete classes

## Use Cases

This pattern is useful in the following scenarios:
- Payment systems with different payment methods
- Creating objects based on user input
- Systems that need to create objects at runtime
- When object creation logic is complex
