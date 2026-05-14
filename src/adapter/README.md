# Payment System Adapter Pattern

This workshop demonstrates the **Adapter Design Pattern** through a practical example of integrating multiple payment systems with different currencies into a unified USDT payment system.

## Purpose

The goal of this example is to illustrate how the Adapter pattern can be used to:

- **Bridge incompatible interfaces**: Connect different payment systems (USD, EUR, GBP) that have different interfaces with a target system (USDT) that expects a specific interface
- **Enable code reuse**: Allow existing payment systems to work with new systems without modifying their source code
- **Provide a unified interface**: Create a consistent way to process payments from different currency systems
- **Simplify integration**: Make it easy to add new payment methods in the future

## How It Works

The example includes:

1. **Payment Systems**: Separate implementations for USD, EUR, and GBP payments
2. **Target System**: A USDT payment system that only accepts USDT transactions
3. **Adapters**: Three adapter classes that convert USD, EUR, and GBP payments to USDT by:
   - Implementing the `Payment` interface
   - Converting currency amounts using exchange rates
   - Delegating the actual payment processing to the USDT system

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/adapter/payment-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/adapter/payment-example.js
```

## Expected Output

The program will demonstrate:
- Processing payments in USD, EUR, and GBP
- Automatic conversion to USDT using exchange rates
- Unified payment processing through the adapter pattern
- Balance tracking for the USDT payment system

## Project Structure

- `payment-interfaces.ts` - Base interfaces for payment systems
- `usd-payment.ts` - USD payment implementation
- `eur-payment.ts` - EUR payment implementation
- `gbp-payment.ts` - GBP payment implementation
- `usdt-payment.ts` - USDT payment system (target)
- `payment-adapters.ts` - Adapter classes for currency conversion
- `payment-example.ts` - Main example demonstrating the pattern

