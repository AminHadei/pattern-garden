# Decorator Pattern - Coffee Shop

This project provides a complete example of the Decorator pattern for a coffee shop system where customers can dynamically add various toppings and flavors to their coffee.

## Purpose

The Decorator pattern demonstrates:
- **Dynamic Functionality**: Add features to objects at runtime
- **Flexible Composition**: Combine decorators in any order
- **Alternative to Subclassing**: Avoid class explosion when combining features
- **Same Interface**: Decorators maintain the same interface as the original object

## File Structure

```
decorator/
├── coffee-interfaces.ts          # Coffee interface definition
├── simple-coffee.ts              # Simple Coffee (concrete component)
├── coffee-decorator.ts           # Coffee Decorator (abstract decorator)
├── milk-decorator.ts             # Milk decorator implementation
├── sugar-decorator.ts            # Sugar decorator implementation
├── whipped-cream-decorator.ts    # Whipped cream decorator implementation
├── caramel-decorator.ts          # Caramel decorator implementation
├── vanilla-decorator.ts          # Vanilla decorator implementation
├── coffee-example.ts             # Decorator pattern usage example
└── README.md                     # This file
```

## How It Works

1. **Component** (`Coffee`): Interface that both concrete components and decorators implement
2. **Concrete Component** (`SimpleCoffee`): Basic coffee without any additions
3. **Decorator** (`CoffeeDecorator`): Abstract base class for all decorators
4. **Concrete Decorators**: Add specific functionality (Milk, Sugar, Whipped Cream, etc.)

## Usage

### Basic Usage

```typescript
import { SimpleCoffee } from './simple-coffee';
import { MilkDecorator } from './milk-decorator';

// Create a simple coffee
const coffee = new SimpleCoffee();

// Add milk
const coffeeWithMilk = new MilkDecorator(coffee);

console.log(coffeeWithMilk.getDescription()); // "Simple Coffee, Milk"
console.log(coffeeWithMilk.getCost()); // 6.5
```

### Multiple Decorators

```typescript
import { SimpleCoffee } from './simple-coffee';
import { MilkDecorator } from './milk-decorator';
import { SugarDecorator } from './sugar-decorator';
import { WhippedCreamDecorator } from './whipped-cream-decorator';

// Build a complex coffee
const fancyCoffee = new WhippedCreamDecorator(
  new SugarDecorator(
    new MilkDecorator(new SimpleCoffee())
  )
);

console.log(fancyCoffee.getDescription());
// "Simple Coffee, Milk, Sugar, Whipped Cream"
console.log(fancyCoffee.getCost()); // 9.0
```

### Step-by-Step Building

```typescript
import { SimpleCoffee } from './simple-coffee';
import { MilkDecorator } from './milk-decorator';
import { SugarDecorator } from './sugar-decorator';
import { CaramelDecorator } from './caramel-decorator';

// Start with simple coffee
let myCoffee = new SimpleCoffee();

// Add decorators one by one
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
myCoffee = new CaramelDecorator(myCoffee);

console.log(myCoffee.getDescription());
// "Simple Coffee, Milk, Sugar, Caramel"
```

### Creating Popular Combinations

```typescript
// Latte (coffee + milk)
const latte = new MilkDecorator(new SimpleCoffee());

// Cappuccino (coffee + milk + whipped cream)
const cappuccino = new WhippedCreamDecorator(
  new MilkDecorator(new SimpleCoffee())
);

// Caramel Macchiato (coffee + milk + caramel + vanilla)
const caramelMacchiato = new VanillaDecorator(
  new CaramelDecorator(
    new MilkDecorator(new SimpleCoffee())
  )
);
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/decorator/coffee-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/decorator/coffee-example.js
```

## Benefits of Decorator Pattern

1. **Dynamic Functionality**: Add features at runtime, not compile time
2. **Flexible Composition**: Combine decorators in any order
3. **Avoids Class Explosion**: No need for classes like `CoffeeWithMilkAndSugar`, `CoffeeWithMilkSugarAndCream`, etc.
4. **Single Responsibility**: Each decorator has one responsibility
5. **Open/Closed Principle**: Easy to add new decorators without modifying existing code
6. **Same Interface**: Decorators can be used anywhere the original component is used

## When to Use Decorator Pattern

- When you need to add functionality to objects dynamically
- When subclassing would lead to an explosion of classes
- When you want to add features that can be combined in various ways
- When you need to add responsibilities to objects without modifying their structure
- For GUI components, I/O streams, middleware, etc.

## Design Pattern

Decorator is a structural design pattern that:
- Allows adding new functionality to objects dynamically
- Wraps objects to add new behaviors
- Maintains the same interface as the original object
- Provides a flexible alternative to subclassing

## Components

### Component (Coffee Interface)
- Defines the interface for objects that can have responsibilities added dynamically

### Concrete Component (SimpleCoffee)
- Defines an object to which additional responsibilities can be attached

### Decorator (CoffeeDecorator)
- Maintains a reference to a Component object
- Defines an interface that conforms to Component's interface

### Concrete Decorators
- **MilkDecorator**: Adds milk (+$1.50)
- **SugarDecorator**: Adds sugar (+$0.50)
- **WhippedCreamDecorator**: Adds whipped cream (+$2.00)
- **CaramelDecorator**: Adds caramel syrup (+$2.50)
- **VanillaDecorator**: Adds vanilla syrup (+$2.00)

## Decorator Order

The order of decorators affects the description but not the total cost:
- `new CaramelDecorator(new VanillaDecorator(coffee))` → "Coffee, Vanilla, Caramel"
- `new VanillaDecorator(new CaramelDecorator(coffee))` → "Coffee, Caramel, Vanilla"

Both have the same cost but different descriptions.

## Comparison with Other Patterns

- **vs Inheritance**: Decorator uses composition, allows runtime changes
- **vs Strategy**: Decorator adds functionality, Strategy changes behavior
- **vs Adapter**: Decorator enhances interface, Adapter changes interface

## Real-World Applications

- **GUI Frameworks**: Adding scrollbars, borders to components
- **I/O Streams**: Adding buffering, compression, encryption
- **Middleware**: Adding logging, authentication, caching
- **Web Frameworks**: Adding middleware to HTTP requests
- **Text Processing**: Adding formatting, validation, transformation

## Cost Breakdown

- Simple Coffee: $5.00
- Milk: +$1.50
- Sugar: +$0.50
- Whipped Cream: +$2.00
- Caramel: +$2.50
- Vanilla: +$2.00

