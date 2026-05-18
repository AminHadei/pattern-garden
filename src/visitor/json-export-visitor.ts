import { Visitor } from './visitor-interfaces';
import { TextElement } from './text-element';
import { ImageElement } from './image-element';
import { ParagraphElement } from './paragraph-element';

/**
 * JSON Export Visitor
 * 
 * A visitor that exports document elements to JSON format.
 */

export class JSONExportVisitor implements Visitor {
  private elements: any[] = [];

  visitText(element: TextElement): void {
    this.elements.push({
      type: 'text',
      content: element.getContent(),
    });
  }

  visitImage(element: ImageElement): void {
    this.elements.push({
      type: 'image',
      src: element.getSrc(),
      alt: element.getAlt(),
      width: element.getWidth(),
      height: element.getHeight(),
    });
  }

  visitParagraph(element: ParagraphElement): void {
    this.elements.push({
      type: 'paragraph',
      title: element.getTitle(),
      children: element.getChildren().map((text) => ({
        type: 'text',
        content: text.getContent(),
      })),
    });
  }

  getJSON(): string {
    return JSON.stringify({ elements: this.elements }, null, 2);
  }

  reset(): void {
    this.elements = [];
  }
}
