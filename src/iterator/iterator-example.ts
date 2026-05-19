import { BookCollection } from './book-collection';
import { Book } from './book';
import { BookIterator } from './book-iterator';
import { ReverseBookIterator } from './reverse-book-iterator';

/**
 * Iterator Pattern Example - Book Collection
 * 
 * This example demonstrates the Iterator pattern for traversing
 * a collection of books without exposing its internal structure.
 * 
 * The Iterator pattern:
 * - Provides a way to access elements of a collection sequentially
 * - Encapsulates the traversal logic
 * - Allows different iteration strategies
 * - Decouples the collection from the traversal algorithm
 */

function demonstrateIterator(): void {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║       Iterator Pattern - Book Collection Example      ║');
  console.log('║         Sequential Access, Encapsulated Logic         ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  // Create a book collection
  const collection = new BookCollection();

  // Add books to the collection
  collection.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925));
  collection.addBook(new Book('1984', 'George Orwell', 1949));
  collection.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', 1960));
  collection.addBook(new Book('Pride and Prejudice', 'Jane Austen', 1813));
  collection.addBook(new Book('The Catcher in the Rye', 'J.D. Salinger', 1951));

  // Example 1: Basic iteration
  console.log('📌 Example 1: Basic Forward Iteration');
  console.log('─'.repeat(60));

  const iterator = collection.createIterator();
  console.log('Books in collection:\n');

  while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`  • ${book.toString()}`);
  }
  console.log();

  // Example 2: Reset and iterate again
  console.log('📌 Example 2: Reset and Iterate Again');
  console.log('─'.repeat(60));

  iterator.reset();
  console.log('Iterating again from the beginning:\n');

  let count = 1;
  while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`  ${count}. ${book.getTitle()}`);
    count++;
  }
  console.log();

  // Example 3: Reverse iteration
  console.log('📌 Example 3: Reverse Iteration');
  console.log('─'.repeat(60));

  const reverseIterator = new ReverseBookIterator(collection);
  console.log('Books in reverse order:\n');

  while (reverseIterator.hasNext()) {
    const book = reverseIterator.next();
    console.log(`  • ${book.toString()}`);
  }
  console.log();

  // Example 4: Filtering during iteration
  console.log('📌 Example 4: Filtering During Iteration');
  console.log('─'.repeat(60));

  iterator.reset();
  console.log('Books published before 1950:\n');

  while (iterator.hasNext()) {
    const book = iterator.next();
    if (book.getYear() < 1950) {
      console.log(`  • ${book.toString()}`);
    }
  }
  console.log();

  // Example 5: Multiple iterations simultaneously
  console.log('📌 Example 5: Multiple Iterators Simultaneously');
  console.log('─'.repeat(60));

  const iterator1 = collection.createIterator();
  const iterator2 = collection.createIterator();

  console.log('Using two iterators independently:\n');
  console.log('Iterator 1 - First 2 books:');
  for (let i = 0; i < 2 && iterator1.hasNext(); i++) {
    console.log(`  • ${iterator1.next().getTitle()}`);
  }

  console.log('\nIterator 2 - All books:');
  while (iterator2.hasNext()) {
    console.log(`  • ${iterator2.next().getTitle()}`);
  }
  console.log();

  // Example 6: Collection operations without exposing structure
  console.log('📌 Example 6: Collection Operations');
  console.log('─'.repeat(60));

  iterator.reset();
  let totalYears = 0;
  let bookCount = 0;

  while (iterator.hasNext()) {
    const book = iterator.next();
    totalYears += book.getYear();
    bookCount++;
  }

  const averageYear = Math.round(totalYears / bookCount);
  console.log(`Total books: ${bookCount}`);
  console.log(`Average publication year: ${averageYear}\n`);

  // Summary
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Iterator Pattern:                        ║');
  console.log('║    1. Encapsulates traversal logic                        ║');
  console.log('║    2. Supports multiple iteration strategies              ║');
  console.log('║    3. Decouples collection from traversal algorithm       ║');
  console.log('║    4. Allows multiple simultaneous iterations             ║');
  console.log('║    5. Hides internal collection structure                 ║');
  console.log('║    6. Single Responsibility Principle                     ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateIterator();
