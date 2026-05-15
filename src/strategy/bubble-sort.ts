import { SortStrategy } from './sort-strategy';

/**
 * Bubble Sort Strategy
 * 
 * A simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order.
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
export class BubbleSort implements SortStrategy {
  public getName(): string {
    return 'Bubble Sort';
  }

  public sort(data: number[]): number[] {
    const arr = [...data]; // Create a copy
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  }
}

