import { Book } from './book';
import { Iterator } from './iterator-interfaces';
import { BookCollection } from './book-collection';

/**
 * Book Iterator
 * 
 * Implements the Iterator interface for traversing a BookCollection.
 * This encapsulates the traversal logic and allows different
 * iteration strategies.
 */

export class BookIterator implements Iterator<Book> {
  private currentIndex: number = 0;

  constructor(private collection: BookCollection) {}

  hasNext(): boolean {
    return this.currentIndex < this.collection.getCount();
  }

  next(): Book {
    if (!this.hasNext()) {
      throw new Error('No more books in collection');
    }
    const book = this.collection.getBook(this.currentIndex);
    this.currentIndex++;
    return book;
  }

  reset(): void {
    this.currentIndex = 0;
  }
}
