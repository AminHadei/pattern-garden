import { Document } from './document-interfaces';

/**
 * Report Document
 * 
 * Represents a report document with sections, author information,
 * creation date, and version.
 */
export class Report implements Document {
  private title: string;
  private content: string;
  private author: string;
  private creationDate: Date;
  private lastModified: Date;
  private version: number;
  private sections: Array<{
    title: string;
    content: string;
  }>;
  private status: 'Draft' | 'Review' | 'Final' | 'Published';

  constructor(
    title: string = 'Untitled Report',
    content: string = '',
    author: string = 'Unknown',
    creationDate: Date = new Date(),
    lastModified: Date = new Date(),
    version: number = 1,
    sections: Array<{
      title: string;
      content: string;
    }> = [],
    status: 'Draft' | 'Review' | 'Final' | 'Published' = 'Draft'
  ) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.creationDate = new Date(creationDate);
    this.lastModified = new Date(lastModified);
    this.version = version;
    this.sections = sections.map(section => ({ ...section }));
    this.status = status;
  }

  clone(): Document {
    // Deep clone the report
    return new Report(
      this.title,
      this.content,
      this.author,
      new Date(this.creationDate),
      new Date(this.lastModified),
      this.version,
      this.sections.map(section => ({ ...section })),
      this.status
    );
  }

  getType(): string {
    return 'Report';
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
    this.updateLastModified();
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
    this.updateLastModified();
  }

  getMetadata(): Record<string, any> {
    return {
      type: this.getType(),
      title: this.title,
      author: this.author,
      creationDate: this.creationDate.toISOString(),
      lastModified: this.lastModified.toISOString(),
      version: this.version,
      sectionsCount: this.sections.length,
      status: this.status,
      contentLength: this.content.length,
    };
  }

  display(): string {
    let display = `Report: ${this.title}\n`;
    display += `${'='.repeat(50)}\n`;
    display += `Author: ${this.author}\n`;
    display += `Version: ${this.version}\n`;
    display += `Status: ${this.status}\n`;
    display += `Created: ${this.creationDate.toLocaleDateString()}\n`;
    display += `Last Modified: ${this.lastModified.toLocaleDateString()}\n`;
    display += `Sections: ${this.sections.length}\n`;
    display += `Content: ${this.content.substring(0, 100)}${this.content.length > 100 ? '...' : ''}\n`;
    return display;
  }

  // Report-specific methods
  getAuthor(): string {
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
    this.updateLastModified();
  }

  getVersion(): number {
    return this.version;
  }

  incrementVersion(): void {
    this.version++;
    this.updateLastModified();
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(status: 'Draft' | 'Review' | 'Final' | 'Published'): void {
    this.status = status;
    this.updateLastModified();
  }

  getSections() {
    return this.sections.map(section => ({ ...section }));
  }

  addSection(section: { title: string; content: string }): void {
    this.sections.push({ ...section });
    this.updateLastModified();
  }

  getCreationDate(): Date {
    return new Date(this.creationDate);
  }

  getLastModified(): Date {
    return new Date(this.lastModified);
  }

  private updateLastModified(): void {
    this.lastModified = new Date();
  }
}

