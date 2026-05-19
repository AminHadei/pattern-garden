import { Image } from './image';

/**
 * Real Image
 * 
 * The actual image object that performs expensive operations
 * like loading from disk. This is the real subject.
 */

export class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  /**
   * Load image from disk (expensive operation)
   */
  private loadFromDisk(): void {
    console.log(`  ⏳ Loading image from disk: ${this.filename}`);
    // Simulate loading time
    // In real implementation, this would actually load the image file
  }

  display(): void {
    console.log(`  🖼️  Displaying image: ${this.filename}`);
  }

  getFilename(): string {
    return this.filename;
  }
}
