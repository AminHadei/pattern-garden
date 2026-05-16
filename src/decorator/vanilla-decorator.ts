import { CoffeeDecorator } from './coffee-decorator';

/**
 * Vanilla Decorator (Concrete Decorator)
 * 
 * Adds vanilla syrup to the coffee.
 * This decorator extends the coffee's description and cost.
 */
export class VanillaDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Vanilla`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 2.0;
  }
}

