import { Coffee } from './coffee-interfaces';
import { SimpleCoffee } from './simple-coffee';
import { MilkDecorator } from './milk-decorator';
import { SugarDecorator } from './sugar-decorator';
import { WhippedCreamDecorator } from './whipped-cream-decorator';
import { CaramelDecorator } from './caramel-decorator';
import { VanillaDecorator } from './vanilla-decorator';

/**
 * Decorator Pattern Example - Coffee Shop
 * 
 * This example demonstrates the Decorator pattern for a coffee shop
 * where customers can add various toppings and flavors to their coffee.
 * 
 * The Decorator pattern:
 * - Allows adding new functionality to objects dynamically
 * - Provides a flexible alternative to subclassing
 * - Wraps objects to add new behaviors
 * - Maintains the same interface as the original object
 */

function printCoffee(coffee: Coffee): void {
  console.log(`   ${coffee.getDescription()}`);
  console.log(`   Cost: $${coffee.getCost().toFixed(2)}`);
}

function demonstrateDecorator(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║      Decorator Pattern - Coffee Shop Example              ║');
  console.log('║         Add Toppings Dynamically                         ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: Simple coffee
  console.log('📌 Example 1: Simple Coffee');
  console.log('─'.repeat(60));
  const simpleCoffee = new SimpleCoffee();
  printCoffee(simpleCoffee);
  console.log();

  // Example 2: Coffee with one decorator
  console.log('📌 Example 2: Coffee with Milk');
  console.log('─'.repeat(60));
  const coffeeWithMilk = new MilkDecorator(new SimpleCoffee());
  printCoffee(coffeeWithMilk);
  console.log();

  // Example 3: Coffee with multiple decorators
  console.log('📌 Example 3: Coffee with Milk and Sugar');
  console.log('─'.repeat(60));
  const coffeeWithMilkAndSugar = new SugarDecorator(
    new MilkDecorator(new SimpleCoffee())
  );
  printCoffee(coffeeWithMilkAndSugar);
  console.log();

  // Example 4: Complex coffee combinations
  console.log('📌 Example 4: Complex Coffee Combinations');
  console.log('─'.repeat(60));

  // Coffee with milk, sugar, and whipped cream
  const fancyCoffee = new WhippedCreamDecorator(
    new SugarDecorator(
      new MilkDecorator(new SimpleCoffee())
    )
  );
  console.log('Fancy Coffee:');
  printCoffee(fancyCoffee);
  console.log();

  // Coffee with caramel and vanilla
  const caramelVanillaCoffee = new VanillaDecorator(
    new CaramelDecorator(new SimpleCoffee())
  );
  console.log('Caramel Vanilla Coffee:');
  printCoffee(caramelVanillaCoffee);
  console.log();

  // Example 5: Building custom coffee step by step
  console.log('📌 Example 5: Building Custom Coffee Step by Step');
  console.log('─'.repeat(60));

  let myCoffee: Coffee = new SimpleCoffee();
  console.log('Starting with:');
  printCoffee(myCoffee);
  console.log();

  // Add milk
  myCoffee = new MilkDecorator(myCoffee);
  console.log('After adding milk:');
  printCoffee(myCoffee);
  console.log();

  // Add sugar
  myCoffee = new SugarDecorator(myCoffee);
  console.log('After adding sugar:');
  printCoffee(myCoffee);
  console.log();

  // Add whipped cream
  myCoffee = new WhippedCreamDecorator(myCoffee);
  console.log('After adding whipped cream:');
  printCoffee(myCoffee);
  console.log();

  // Add caramel
  myCoffee = new CaramelDecorator(myCoffee);
  console.log('Final coffee:');
  printCoffee(myCoffee);
  console.log();

  // Example 6: Different combinations
  console.log('📌 Example 6: Popular Coffee Combinations');
  console.log('─'.repeat(60));

  // Latte (coffee + milk)
  const latte = new MilkDecorator(new SimpleCoffee());
  console.log('Latte:');
  printCoffee(latte);
  console.log();

  // Cappuccino (coffee + milk + whipped cream)
  const cappuccino = new WhippedCreamDecorator(
    new MilkDecorator(new SimpleCoffee())
  );
  console.log('Cappuccino:');
  printCoffee(cappuccino);
  console.log();

  // Caramel Macchiato (coffee + milk + caramel + vanilla)
  const caramelMacchiato = new VanillaDecorator(
    new CaramelDecorator(
      new MilkDecorator(new SimpleCoffee())
    )
  );
  console.log('Caramel Macchiato:');
  printCoffee(caramelMacchiato);
  console.log();

  // Example 7: Decorator order matters
  console.log('📌 Example 7: Decorator Order');
  console.log('─'.repeat(60));

  // Same decorators, different order
  const order1 = new CaramelDecorator(
    new VanillaDecorator(new SimpleCoffee())
  );
  console.log('Order 1 (Caramel then Vanilla):');
  printCoffee(order1);
  console.log();

  const order2 = new VanillaDecorator(
    new CaramelDecorator(new SimpleCoffee())
  );
  console.log('Order 2 (Vanilla then Caramel):');
  printCoffee(order2);
  console.log();
  console.log('Note: Cost is the same, but description order differs');
  console.log();

  // Example 8: Reusing decorators
  console.log('📌 Example 8: Reusing Decorators');
  console.log('─'.repeat(60));

  // Multiple sugars
  const extraSweetCoffee = new SugarDecorator(
    new SugarDecorator(
      new SugarDecorator(new SimpleCoffee())
    )
  );
  console.log('Extra Sweet Coffee (3 sugars):');
  printCoffee(extraSweetCoffee);
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Decorator Pattern:                       ║');
  console.log('║    1. Adds functionality dynamically at runtime          ║');
  console.log('║    2. Flexible alternative to subclassing                ║');
  console.log('║    3. Can combine decorators in any order                ║');
  console.log('║    4. Open/Closed Principle - easy to add new decorators║');
  console.log('║    5. Maintains same interface as original object        ║');
  console.log('║    6. Can wrap objects multiple times                    ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateDecorator();

