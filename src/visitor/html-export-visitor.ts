import { Visitor } from './visitor-interfaces';
import { TextElement } from './text-element';
import { ImageElement } from './image-element';
import { ParagraphElement } from './paragraph-element';

/**
 * HTML Export Visitor
 * 
 * A visitor that exports document elements to HTML format.
 */

export class HTMLExportVisitor implements Visitor {
  private html: string = '';

  visitText(element: TextElement): void {
    this.html += `<p>${this.escapeHtml(element.getContent())}</p>\n`;
  }

  visitImage(element: ImageElement): void {
    this.html += `<img src="${this.escapeHtml(element.getSrc())}" `;
    this.html += `alt="${this.escapeHtml(element.getAlt())}" `;
    this.html += `width="${element.getWidth()}" `;
    this.html += `height="${element.getHeight()}" />\n`;
  }

  visitParagraph(element: ParagraphElement): void {
    this.html += `<div class="paragraph">\n`;
    this.html += `  <h3>${this.escapeHtml(element.getTitle())}</h3>\n`;
    element.getChildren().forEach((text) => {
      this.html += `  <p>${this.escapeHtml(text.getContent())}</p>\n`;
    });
    this.html += `</div>\n`;
  }

  getHTML(): string {
    return this.html;
  }

  reset(): void {
    this.html = '';
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
