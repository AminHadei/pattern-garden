# Strategy Pattern - Sorting Algorithms

This project provides a complete example of the Strategy pattern for a sorting system where different sorting algorithms can be used interchangeably at runtime.

## Purpose

The Strategy pattern demonstrates:
- **Algorithm Encapsulation**: Each sorting algorithm is encapsulated in its own class
- **Interchangeability**: Algorithms can be swapped at runtime without changing client code
- **Separation of Concerns**: The sorting logic is separated from the code that uses it
- **Extensibility**: New sorting algorithms can be added without modifying existing code

## File Structure

```
strategy/
├── sort-strategy.ts              # SortStrategy interface
├── bubble-sort.ts                # Bubble Sort implementation
├── quick-sort.ts                 # Quick Sort implementation
├── merge-sort.ts                 # Merge Sort implementation
├── sorter.ts                     # Sorter context class
├── sort-example.ts               # Strategy pattern usage example
└── README.md                     # This file
```

## How It Works

1. **Strategy Interface** (`SortStrategy`): Defines the contract for all sorting algorithms
2. **Concrete Strategies**: Different sorting algorithms (Bubble Sort, Quick Sort, Merge Sort)
3. **Context** (`Sorter`): Uses a strategy to perform sorting operations
4. **Runtime Selection**: The strategy can be changed at runtime

## Usage

### Basic Usage

```typescript
import { Sorter } from './sorter';
import { BubbleSort } from './bubble-sort';

// Create a sorter with a specific strategy
const sorter = new Sorter(new BubbleSort());

// Sort an array
const data = [64, 34, 25, 12, 22, 11, 90, 5];
const sorted = sorter.sort(data);
console.log(sorted); // [5, 11, 12, 22, 25, 34, 64, 90]
```

### Changing Strategy at Runtime

```typescript
import { Sorter } from './sorter';
import { BubbleSort } from './bubble-sort';
import { QuickSort } from './quick-sort';
import { MergeSort } from './merge-sort';

const sorter = new Sorter(new BubbleSort());
const data = [64, 34, 25, 12, 22, 11, 90, 5];

// Sort with Bubble Sort
let result = sorter.sort(data);

// Change to Quick Sort
sorter.setStrategy(new QuickSort());
result = sorter.sort(data);

// Change to Merge Sort
sorter.setStrategy(new MergeSort());
result = sorter.sort(data);
```

### Strategy Selection Based on Conditions

```typescript
import { Sorter } from './sorter';
import { BubbleSort } from './bubble-sort';
import { QuickSort } from './quick-sort';

function getOptimalSorter(data: number[]): Sorter {
  if (data.length < 10) {
    return new Sorter(new BubbleSort());
  } else {
    return new Sorter(new QuickSort());
  }
}

const data = [5, 2, 8, 1, 9];
const sorter = getOptimalSorter(data);
const sorted = sorter.sort(data);
```

### Using Different Strategies

```typescript
import { Sorter } from './sorter';
import { BubbleSort } from './bubble-sort';
import { QuickSort } from './quick-sort';
import { MergeSort } from './merge-sort';

const data = [64, 34, 25, 12, 22, 11, 90, 5];

// Try different strategies
const bubbleResult = new Sorter(new BubbleSort()).sort(data);
const quickResult = new Sorter(new QuickSort()).sort(data);
const mergeResult = new Sorter(new MergeSort()).sort(data);
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/strategy/sort-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/strategy/sort-example.js
```

## Benefits of Strategy Pattern

1. **Algorithm Encapsulation**: Each algorithm is in its own class, making them easy to understand and maintain
2. **Runtime Selection**: Algorithms can be selected and changed at runtime
3. **Eliminates Conditionals**: No need for if/else or switch statements to choose algorithms
4. **Open/Closed Principle**: Easy to add new algorithms without modifying existing code
5. **Testability**: Each strategy can be tested independently
6. **Reusability**: Strategies can be reused in different contexts

## When to Use Strategy Pattern

- When you have multiple ways to perform a task and want to choose at runtime
- When you want to avoid conditional statements for algorithm selection
- When you have many related classes that differ only in their behavior
- When you want to isolate algorithm implementation details from client code
- When algorithms should be interchangeable

## Design Pattern

Strategy is a behavioral design pattern that:
- Defines a family of algorithms
- Encapsulates each algorithm in a separate class
- Makes algorithms interchangeable
- Allows algorithms to vary independently from clients

## Algorithms Implemented

### Bubble Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Best For**: Small arrays, educational purposes
- **Stable**: Yes

### Quick Sort
- **Time Complexity**: O(n log n) average, O(n²) worst case
- **Space Complexity**: O(log n)
- **Best For**: General-purpose sorting, large arrays
- **Stable**: No

### Merge Sort
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **Best For**: When stability is required, large arrays
- **Stable**: Yes

## Comparison with Other Patterns

- **vs Template Method**: Strategy uses composition, Template Method uses inheritance
- **vs State**: Strategy changes behavior, State changes object's state
- **vs Command**: Strategy encapsulates algorithms, Command encapsulates requests

## Real-World Applications

- **Sorting Algorithms**: Different sorting strategies
- **Payment Processing**: Different payment methods (credit card, PayPal, etc.)
- **Compression**: Different compression algorithms (ZIP, RAR, etc.)
- **Validation**: Different validation strategies
- **Navigation**: Different routing algorithms (shortest path, fastest route, etc.)


