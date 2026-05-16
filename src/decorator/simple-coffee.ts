import { Coffee } from './coffee-interfaces';

/**
 * Simple Coffee (Concrete Component)
 * 
 * A basic coffee without any additions.
 * This is the base component that can be decorated.
 */
export class SimpleCoffee implements Coffee {
  public getDescription(): string {
    return 'Simple Coffee';
  }

  public getCost(): number {
    return 5.0;
  }
}

