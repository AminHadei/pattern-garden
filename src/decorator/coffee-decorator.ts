import { Coffee } from './coffee-interfaces';

/**
 * Coffee Decorator (Abstract Decorator)
 * 
 * Base class for all coffee decorators.
 * It maintains a reference to a Coffee object and delegates
 * calls to it. Concrete decorators extend this class to add
 * new functionality.
 */
export abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getDescription(): string {
    return this.coffee.getDescription();
  }

  public getCost(): number {
    return this.coffee.getCost();
  }
}

