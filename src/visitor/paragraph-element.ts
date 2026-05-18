import { Element } from './visitor-interfaces';
import { Visitor } from './visitor-interfaces';
import { TextElement } from './text-element';

/**
 * Paragraph Element
 * 
 * Represents a paragraph element that can contain multiple text elements.
 */

export class ParagraphElement implements Element {
  private children: TextElement[] = [];

  constructor(private title: string) {}

  addText(text: TextElement): void {
    this.children.push(text);
  }

  getTitle(): string {
    return this.title;
  }

  getChildren(): TextElement[] {
    return this.children;
  }

  accept(visitor: Visitor): void {
    visitor.visitParagraph(this);
  }
}
