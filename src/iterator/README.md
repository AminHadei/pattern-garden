# Iterator Pattern - Book Collection

This project provides a complete example of the Iterator pattern for a book collection system that allows sequential traversal without exposing internal structure.

## Overview

The Iterator pattern provides a way to access elements of a collection sequentially without exposing its underlying representation. It encapsulates the traversal logic and allows different iteration strategies.

## Components

### 1. Book
Represents a book with title, author, and publication year.

### 2. BookCollection
A collection of books that implements the `Iterable` interface, allowing it to create iterators.

### 3. BookIterator
A forward iterator that traverses the collection from first to last.

### 4. ReverseBookIterator
A reverse iterator that traverses the collection from last to first, demonstrating different iteration strategies.

## File Structure

```
iterator/
├── iterator-interfaces.ts      # Iterator and Iterable interfaces
├── book.ts                     # Book class
├── book-collection.ts          # Book collection implementation
├── book-iterator.ts            # Forward iterator implementation
├── reverse-book-iterator.ts    # Reverse iterator implementation
├── iterator-example.ts         # Iterator pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Iteration

```typescript
import { BookCollection } from './book-collection';
import { Book } from './book';

const collection = new BookCollection();
collection.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925));
collection.addBook(new Book('1984', 'George Orwell', 1949));

const iterator = collection.createIterator();
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(book.toString());
}
```

### Reverse Iteration

```typescript
import { ReverseBookIterator } from './reverse-book-iterator';

const reverseIterator = new ReverseBookIterator(collection);
while (reverseIterator.hasNext()) {
  const book = reverseIterator.next();
  console.log(book.toString());
}
```

### Reset Iterator

```typescript
iterator.reset(); // Start from the beginning again
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/iterator/iterator-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/iterator/iterator-example.js
```

## Benefits of Iterator Pattern

1. **Encapsulates Traversal Logic**: The iteration logic is separated from the collection
2. **Multiple Iteration Strategies**: Supports forward, reverse, filtered, etc.
3. **Decoupling**: Collection structure is independent of traversal algorithm
4. **Multiple Simultaneous Iterations**: Can have multiple iterators on the same collection
5. **Hides Internal Structure**: Clients don't need to know how collection is stored
6. **Single Responsibility**: Collection manages data, iterator manages traversal

## Design Pattern

Iterator is a behavioral design pattern that:
- Provides a way to access elements of a collection sequentially
- Encapsulates the traversal logic
- Allows different iteration strategies
- Decouples the collection from the traversal algorithm

## Use Cases

This pattern is useful in the following scenarios:
- Traversing collections without exposing internal structure
- Supporting multiple iteration strategies (forward, reverse, filtered)
- When you need multiple simultaneous iterations
- When collection structure might change but iteration interface should remain stable
- Implementing lazy evaluation of collection elements
