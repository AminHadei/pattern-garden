import { Element } from './visitor-interfaces';
import { Visitor } from './visitor-interfaces';

/**
 * Text Element
 * 
 * Represents a text element in a document.
 */

export class TextElement implements Element {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }

  accept(visitor: Visitor): void {
    visitor.visitText(this);
  }
}
