import { CoffeeDecorator } from './coffee-decorator';

/**
 * Milk Decorator (Concrete Decorator)
 * 
 * Adds milk to the coffee.
 * This decorator extends the coffee's description and cost.
 */
export class MilkDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Milk`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 1.5;
  }
}

