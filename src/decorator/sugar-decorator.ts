import { CoffeeDecorator } from './coffee-decorator';

/**
 * Sugar Decorator (Concrete Decorator)
 * 
 * Adds sugar to the coffee.
 * This decorator extends the coffee's description and cost.
 */
export class SugarDecorator extends CoffeeDecorator {
  public getDescription(): string {
    return `${this.coffee.getDescription()}, Sugar`;
  }

  public getCost(): number {
    return this.coffee.getCost() + 0.5;
  }
}


