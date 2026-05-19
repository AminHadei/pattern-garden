import { Book } from './book';
import { Iterator, Iterable } from './iterator-interfaces';
import { BookIterator } from './book-iterator';

/**
 * Book Collection
 * 
 * A collection of books that implements the Iterable interface.
 * This allows the collection to be traversed using an iterator.
 */

export class BookCollection implements Iterable<Book> {
  private books: Book[] = [];

  /**
   * Add a book to the collection
   */
  addBook(book: Book): void {
    this.books.push(book);
  }

  /**
   * Get a book by index
   */
  getBook(index: number): Book {
    return this.books[index];
  }

  /**
   * Get the number of books in the collection
   */
  getCount(): number {
    return this.books.length;
  }

  /**
   * Create an iterator for this collection
   */
  createIterator(): Iterator<Book> {
    return new BookIterator(this);
  }
}
