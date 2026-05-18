import { Element } from './visitor-interfaces';
import { Visitor } from './visitor-interfaces';

/**
 * Document
 * 
 * Represents a document that contains multiple elements.
 * Can accept visitors to perform operations on all elements.
 */

export class Document {
  private elements: Element[] = [];

  addElement(element: Element): void {
    this.elements.push(element);
  }

  accept(visitor: Visitor): void {
    this.elements.forEach((element) => {
      element.accept(visitor);
    });
  }

  getElements(): Element[] {
    return this.elements;
  }
}
