import { SortStrategy } from './sort-strategy';

/**
 * Merge Sort Strategy
 * 
 * An efficient, stable sorting algorithm that uses divide-and-conquer approach.
 * It divides the array into halves, sorts them, and then merges them.
 * 
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
export class MergeSort implements SortStrategy {
  public getName(): string {
    return 'Merge Sort';
  }

  public sort(data: number[]): number[] {
    const arr = [...data]; // Create a copy
    this.mergeSort(arr, 0, arr.length - 1);
    return arr;
  }

  private mergeSort(arr: number[], left: number, right: number): void {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      this.mergeSort(arr, left, mid);
      this.mergeSort(arr, mid + 1, right);
      this.merge(arr, left, mid, right);
    }
  }

  private merge(arr: number[], left: number, mid: number, right: number): void {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const leftArr = new Array(n1);
    const rightArr = new Array(n2);

    for (let i = 0; i < n1; i++) {
      leftArr[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
      rightArr[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
}

