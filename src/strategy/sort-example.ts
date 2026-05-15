import { Sorter } from './sorter';
import { BubbleSort } from './bubble-sort';
import { QuickSort } from './quick-sort';
import { MergeSort } from './merge-sort';

/**
 * Strategy Pattern Example - Sorting Algorithms
 * 
 * This example demonstrates the Strategy pattern for a sorting system
 * where different sorting algorithms can be used interchangeably.
 * 
 * The Strategy pattern:
 * - Defines a family of algorithms (sorting strategies)
 * - Encapsulates each algorithm and makes them interchangeable
 * - Allows the algorithm to vary independently from clients that use it
 * - Enables runtime selection of algorithms
 */

function demonstrateStrategy(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║       Strategy Pattern - Sorting Algorithms Example       ║');
  console.log('║                 Interchangeable Algorithms                ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Test data
  const testData1 = [64, 34, 25, 12, 22, 11, 90, 5];
  const testData2 = [38, 27, 43, 3, 9, 82, 10];
  const testData3 = [5, 2, 8, 1, 9, 3, 7, 4, 6];

  // Example 1: Using different strategies
  console.log('📌 Example 1: Using Different Sorting Strategies');
  console.log('─'.repeat(60));

  const bubbleSort = new BubbleSort();
  const quickSort = new QuickSort();
  const mergeSort = new MergeSort();

  console.log(`Original array: [${testData1.join(', ')}]\n`);

  // Use Bubble Sort
  const sorter1 = new Sorter(bubbleSort);
  const result1 = sorter1.sortWithInfo(testData1);
  console.log(`${result1.algorithm}: [${result1.sorted.join(', ')}]`);

  // Use Quick Sort
  const sorter2 = new Sorter(quickSort);
  const result2 = sorter2.sortWithInfo(testData1);
  console.log(`${result2.algorithm}: [${result2.sorted.join(', ')}]`);

  // Use Merge Sort
  const sorter3 = new Sorter(mergeSort);
  const result3 = sorter3.sortWithInfo(testData1);
  console.log(`${result3.algorithm}: [${result3.sorted.join(', ')}]\n`);

  // Example 2: Changing strategy at runtime
  console.log('📌 Example 2: Changing Strategy at Runtime');
  console.log('─'.repeat(60));

  const sorter = new Sorter(bubbleSort);
  console.log(`Original array: [${testData2.join(', ')}]`);

  // Sort with Bubble Sort
  let result = sorter.sortWithInfo(testData2);
  console.log(`Using ${result.algorithm}: [${result.sorted.join(', ')}]`);

  // Change to Quick Sort
  sorter.setStrategy(quickSort);
  result = sorter.sortWithInfo(testData2);
  console.log(`Switched to ${result.algorithm}: [${result.sorted.join(', ')}]`);

  // Change to Merge Sort
  sorter.setStrategy(mergeSort);
  result = sorter.sortWithInfo(testData2);
  console.log(`Switched to ${result.algorithm}: [${result.sorted.join(', ')}]\n`);

  // Example 3: Strategy selection based on data size
  console.log('📌 Example 3: Strategy Selection Based on Data Size');
  console.log('─'.repeat(60));

  function selectStrategy(data: number[]): Sorter {
    // Simple heuristic: use different strategies based on array size
    if (data.length < 10) {
      console.log('Small array detected, using Bubble Sort');
      return new Sorter(new BubbleSort());
    } else if (data.length < 100) {
      console.log('Medium array detected, using Quick Sort');
      return new Sorter(new QuickSort());
    } else {
      console.log('Large array detected, using Merge Sort');
      return new Sorter(new MergeSort());
    }
  }

  const smallArray = [5, 2, 8, 1, 9];
  const mediumArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
  const largeArray = Array.from({ length: 200 }, () => Math.floor(Math.random() * 1000));

  console.log(`\nSmall array (${smallArray.length} elements):`);
  const smallSorter = selectStrategy(smallArray);
  const smallResult = smallSorter.sortWithInfo(smallArray);
  console.log(`Result: [${smallResult.sorted.join(', ')}] (${smallResult.algorithm})\n`);

  console.log(`Medium array (${mediumArray.length} elements):`);
  const mediumSorter = selectStrategy(mediumArray);
  const mediumResult = mediumSorter.sortWithInfo(mediumArray);
  console.log(`First 10 elements: [${mediumResult.sorted.slice(0, 10).join(', ')}...] (${mediumResult.algorithm})\n`);

  console.log(`Large array (${largeArray.length} elements):`);
  const largeSorter = selectStrategy(largeArray);
  const largeResult = largeSorter.sortWithInfo(largeArray);
  console.log(`First 10 elements: [${largeResult.sorted.slice(0, 10).join(', ')}...] (${largeResult.algorithm})\n`);

  // Example 4: Comparing strategies
  console.log('📌 Example 4: Comparing Different Strategies');
  console.log('─'.repeat(60));

  const testArray = [64, 34, 25, 12, 22, 11, 90, 5, 77, 88, 33, 44];
  console.log(`Test array: [${testArray.join(', ')}]\n`);

  const strategies = [
    new BubbleSort(),
    new QuickSort(),
    new MergeSort(),
  ];

  strategies.forEach((strategy) => {
    const sorter = new Sorter(strategy);
    const result = sorter.sort(testArray);
    console.log(`${strategy.getName()}: [${result.join(', ')}]`);
  });
  console.log();

  // Example 5: Strategy pattern in action
  console.log('📌 Example 5: Strategy Pattern Benefits');
  console.log('─'.repeat(60));

  // Client code doesn't need to know which algorithm is being used
  function sortData(sorter: Sorter, data: number[]): void {
    const result = sorter.sortWithInfo(data);
    console.log(`Sorted using ${result.algorithm}`);
    console.log(`Result: [${result.sorted.join(', ')}]`);
  }

  console.log('Client code can work with any strategy:\n');
  sortData(new Sorter(new BubbleSort()), testData3);
  console.log();
  sortData(new Sorter(new QuickSort()), testData3);
  console.log();
  sortData(new Sorter(new MergeSort()), testData3);
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Strategy Pattern:                         ║');
  console.log('║    1. Encapsulates algorithms in separate classes          ║');
  console.log('║    2. Makes algorithms interchangeable                     ║');
  console.log('║    3. Allows runtime algorithm selection                   ║');
  console.log('║    4. Eliminates conditional statements for algorithms     ║');
  console.log('║    5. Open/Closed Principle - easy to add new strategies   ║');
  console.log('║    6. Client code doesn\'t depend on concrete algorithms    ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateStrategy();

