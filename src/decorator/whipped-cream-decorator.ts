import { CoffeeDecorator } from './coffee-decorator';

/**
 * Whipped Cream Decorator (Concrete Decorator)
 * 
 * Adds whipped cream to the coffee.
 * This decorator extends the coffee's description and cost.
 */
export class WhippedCreamDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Whipped Cream`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 2.0;
  }
}

