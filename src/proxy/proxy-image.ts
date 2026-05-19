import { Image } from './image';
import { RealImage } from './real-image';

/**
 * Proxy Image
 * 
 * A proxy that controls access to the RealImage.
 * Implements lazy loading - the image is only loaded when needed.
 */

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    console.log(`  📋 Proxy created for: ${this.filename}`);
  }

  display(): void {
    // Lazy loading: create RealImage only when needed
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }

  getFilename(): string {
    return this.filename;
  }

  /**
   * Check if the image is loaded
   */
  isLoaded(): boolean {
    return this.realImage !== null;
  }
}
