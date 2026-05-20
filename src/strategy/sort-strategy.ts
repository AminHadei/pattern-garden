/**
 * Sort Strategy Interface
 * 
 * Defines the interface for sorting algorithms.
 * Different sorting strategies can be implemented and used interchangeably.
 */
export interface SortStrategy {
  /**
   * Sort an array of numbers
   * @param data The array to sort
   * @returns A new sorted array (does not modify the original)
   */
  sort(data: number[]): number[];

  /**
   * Get the name of the sorting algorithm
   * @returns The algorithm name
   */
  getName(): string;
}


