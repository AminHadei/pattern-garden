# Computer Builder Pattern

This workshop demonstrates the **Builder Design Pattern** through a practical example of constructing different types of computers (Gaming, Office, and Workstation) with varying configurations and components.

## Purpose

The goal of this example is to illustrate how the Builder pattern can be used to:

- **Step-by-step construction**: Build complex objects (computers) step by step, allowing fine-grained control over the construction process
- **Reusable building process**: Use the same construction process to create different representations (gaming PC, office PC, workstation)
- **Isolate construction code**: Separate the construction logic from the product itself, making the code more maintainable
- **Flexible configurations**: Easily create different configurations of the same product type
- **Fluent interface**: Provide a readable, chainable API for building objects

## How It Works

The example includes:

1. **Product Class** (`Computer`): Represents the final computer object with all its components
2. **Builder Interface** (`ComputerBuilder`): Defines the contract for building a computer
3. **Concrete Builders**: 
   - `GamingComputerBuilder` - For high-performance gaming computers
   - `OfficeComputerBuilder` - For budget-friendly office computers
   - `WorkstationComputerBuilder` - For professional workstations
4. **Director Class** (`ComputerDirector`): Orchestrates the building process and provides predefined configurations

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/builder/computer-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/builder/computer-example.js
```

## Expected Output

The program will demonstrate:
- Building different types of computers (Gaming, Office, Workstation)
- Using the Director pattern for predefined configurations
- Using the fluent interface for custom builds
- Building multiple computers with the same builder instance
- Different construction approaches (with and without Director)

## Project Structure

- `computer.ts` - The Computer product class
- `computer-builder.ts` - Builder interface and base abstract class
- `gaming-computer-builder.ts` - Builder for gaming computers
- `office-computer-builder.ts` - Builder for office computers
- `workstation-computer-builder.ts` - Builder for workstation computers
- `computer-director.ts` - Director class for orchestrating builds
- `computer-example.ts` - Main example demonstrating the pattern

## Key Concepts Demonstrated

1. **Builder Pattern**: Separates object construction from representation
2. **Fluent Interface**: Method chaining for readable code
3. **Director Pattern**: Provides predefined construction sequences
4. **Polymorphism**: Different builders implementing the same interface
5. **Reusability**: Same builder instance can create multiple products

