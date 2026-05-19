import { Book } from './book';
import { Iterator } from './iterator-interfaces';
import { BookCollection } from './book-collection';

/**
 * Reverse Book Iterator
 * 
 * Implements the Iterator interface for traversing a BookCollection
 * in reverse order. This demonstrates how different iteration
 * strategies can be implemented.
 */

export class ReverseBookIterator implements Iterator<Book> {
  private currentIndex: number;

  constructor(private collection: BookCollection) {
    this.currentIndex = collection.getCount() - 1;
  }

  hasNext(): boolean {
    return this.currentIndex >= 0;
  }

  next(): Book {
    if (!this.hasNext()) {
      throw new Error('No more books in collection');
    }
    const book = this.collection.getBook(this.currentIndex);
    this.currentIndex--;
    return book;
  }

  reset(): void {
    this.currentIndex = this.collection.getCount() - 1;
  }
}
