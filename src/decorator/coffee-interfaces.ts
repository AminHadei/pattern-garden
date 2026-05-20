/**
 * Coffee Interface
 * 
 * Defines the interface for coffee objects.
 * Both concrete coffees and decorators implement this interface.
 */
export interface Coffee {
  /**
   * Get the description of the coffee
   * @returns The coffee description
   */
  getDescription(): string;

  /**
   * Get the cost of the coffee
   * @returns The coffee cost
   */
  getCost(): number;
}


