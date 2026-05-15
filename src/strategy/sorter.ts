import { SortStrategy } from './sort-strategy';

/**
 * Sorter (Context)
 * 
 * The Sorter class uses the Strategy pattern to sort arrays.
 * It maintains a reference to a SortStrategy object and delegates
 * the sorting work to it. The strategy can be changed at runtime.
 * 
 * This implementation:
 * - Uses composition to hold a sorting strategy
 * - Allows changing the strategy at runtime
 * - Delegates sorting to the current strategy
 * - Provides a clean interface for sorting operations
 */
export class Sorter {
  private strategy: SortStrategy;

  /**
   * Create a new Sorter with a default strategy
   * @param strategy The sorting strategy to use
   */
  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  /**
   * Set a new sorting strategy
   * @param strategy The new sorting strategy to use
   */
  public setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }

  /**
   * Get the current sorting strategy
   * @returns The current strategy
   */
  public getStrategy(): SortStrategy {
    return this.strategy;
  }

  /**
   * Sort an array using the current strategy
   * @param data The array to sort
   * @returns A new sorted array
   */
  public sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }

  /**
   * Sort an array and return information about the operation
   * @param data The array to sort
   * @returns Object containing sorted array and algorithm name
   */
  public sortWithInfo(data: number[]): { sorted: number[]; algorithm: string } {
    const sorted = this.strategy.sort(data);
    return {
      sorted,
      algorithm: this.strategy.getName(),
    };
  }
}

