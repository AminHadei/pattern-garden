import { SortStrategy } from './sort-strategy';

/**
 * Quick Sort Strategy
 * 
 * An efficient sorting algorithm that uses divide-and-conquer approach.
 * It picks a pivot element and partitions the array around the pivot.
 * 
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n)
 */
export class QuickSort implements SortStrategy {
  public getName(): string {
    return 'Quick Sort';
  }

  public sort(data: number[]): number[] {
    const arr = [...data]; // Create a copy
    this.quickSort(arr, 0, arr.length - 1);
    return arr;
  }

  private quickSort(arr: number[], low: number, high: number): void {
    if (low < high) {
      const pivotIndex = this.partition(arr, low, high);
      this.quickSort(arr, low, pivotIndex - 1);
      this.quickSort(arr, pivotIndex + 1, high);
    }
  }

  private partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
}


