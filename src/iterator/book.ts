/**
 * Book Class
 * 
 * Represents a book with title, author, and year.
 */

export class Book {
  constructor(
    private title: string,
    private author: string,
    private year: number
  ) {}

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getYear(): number {
    return this.year;
  }

  toString(): string {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}
