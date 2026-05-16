import { CoffeeDecorator } from './coffee-decorator';

/**
 * Caramel Decorator (Concrete Decorator)
 * 
 * Adds caramel syrup to the coffee.
 * This decorator extends the coffee's description and cost.
 */
export class CaramelDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Caramel`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 2.5;
  }
}

