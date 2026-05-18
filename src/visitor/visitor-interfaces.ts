import { TextElement } from './text-element';
import { ImageElement } from './image-element';
import { ParagraphElement } from './paragraph-element';

/**
 * Visitor Interface
 * 
 * Defines the interface for all visitor classes.
 * Each visitor can perform operations on different element types.
 */

export interface Visitor {
  /**
   * Visit a text element
   */
  visitText(element: TextElement): void;

  /**
   * Visit an image element
   */
  visitImage(element: ImageElement): void;

  /**
   * Visit a paragraph element
   */
  visitParagraph(element: ParagraphElement): void;
}

/**
 * Element Interface
 * 
 * Defines the interface for all document elements that can accept visitors.
 */

export interface Element {
  /**
   * Accept a visitor
   */
  accept(visitor: Visitor): void;
}
