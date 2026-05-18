import { Visitor } from './visitor-interfaces';
import { TextElement } from './text-element';
import { ImageElement } from './image-element';
import { ParagraphElement } from './paragraph-element';

/**
 * Word Count Visitor
 * 
 * A visitor that counts words in document elements.
 */

export class WordCountVisitor implements Visitor {
  private wordCount: number = 0;

  visitText(element: TextElement): void {
    const words = element.getContent().split(/\s+/).filter((word) => word.length > 0);
    this.wordCount += words.length;
  }

  visitImage(element: ImageElement): void {
    // Images don't contribute to word count
    // But we could count alt text if needed
    if (element.getAlt()) {
      const words = element.getAlt().split(/\s+/).filter((word) => word.length > 0);
      this.wordCount += words.length;
    }
  }

  visitParagraph(element: ParagraphElement): void {
    // Count words in paragraph title
    const titleWords = element.getTitle().split(/\s+/).filter((word) => word.length > 0);
    this.wordCount += titleWords.length;

    // Count words in children
    element.getChildren().forEach((text) => {
      const words = text.getContent().split(/\s+/).filter((word) => word.length > 0);
      this.wordCount += words.length;
    });
  }

  getWordCount(): number {
    return this.wordCount;
  }

  reset(): void {
    this.wordCount = 0;
  }
}
