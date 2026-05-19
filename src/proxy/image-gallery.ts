import { Image } from './image';
import { ProxyImage } from './proxy-image';

/**
 * Image Gallery
 * 
 * A gallery that uses proxy images for efficient memory management.
 * Images are only loaded when they are actually displayed.
 */

export class ImageGallery {
  private images: Image[] = [];

  /**
   * Add an image to the gallery
   */
  addImage(filename: string): void {
    this.images.push(new ProxyImage(filename));
  }

  /**
   * Display an image by index
   */
  displayImage(index: number): void {
    if (index >= 0 && index < this.images.length) {
      this.images[index].display();
    } else {
      console.log(`  ❌ Invalid image index: ${index}`);
    }
  }

  /**
   * Display all images
   */
  displayAll(): void {
    console.log('  Displaying all images:');
    this.images.forEach((image, index) => {
      console.log(`\n  Image ${index + 1}:`);
      image.display();
    });
  }

  /**
   * Get the number of images
   */
  getImageCount(): number {
    return this.images.length;
  }

  /**
   * Get all images
   */
  getImages(): Image[] {
    return this.images;
  }
}
