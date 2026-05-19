/**
 * Iterator Interface
 * 
 * Defines the common interface for iterating over collections.
 * This allows clients to traverse different types of collections
 * without knowing their internal structure.
 */

export interface Iterator<T> {
  /**
   * Check if there are more elements in the collection
   * @returns true if there are more elements, false otherwise
   */
  hasNext(): boolean;

  /**
   * Get the next element in the collection
   * @returns The next element
   */
  next(): T;

  /**
   * Reset the iterator to the beginning
   */
  reset(): void;
}

/**
 * Iterable Interface
 * 
 * Defines the interface for collections that can be iterated.
 */
export interface Iterable<T> {
  /**
   * Create an iterator for this collection
   * @returns An iterator instance
   */
  createIterator(): Iterator<T>;
}
