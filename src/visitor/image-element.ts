import { Element } from './visitor-interfaces';
import { Visitor } from './visitor-interfaces';

/**
 * Image Element
 * 
 * Represents an image element in a document.
 */

export class ImageElement implements Element {
  constructor(
    private src: string,
    private alt: string,
    private width: number,
    private height: number
  ) {}

  getSrc(): string {
    return this.src;
  }

  getAlt(): string {
    return this.alt;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  accept(visitor: Visitor): void {
    visitor.visitImage(this);
  }
}
