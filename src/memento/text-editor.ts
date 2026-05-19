import { TextMemento } from './text-memento';
import { Memento } from './memento-interfaces';

/**
 * Text Editor (Originator)
 * 
 * The originator class that creates mementos containing snapshots
 * of its current state and can restore itself from a memento.
 */

export class TextEditor {
  private content: string = '';

  /**
   * Set the content
   */
  setContent(content: string): void {
    this.content = content;
  }

  /**
   * Get the current content
   */
  getContent(): string {
    return this.content;
  }

  /**
   * Append text to the content
   */
  append(text: string): void {
    this.content += text;
  }

  /**
   * Create a memento containing the current state
   */
  createMemento(): Memento {
    return new TextMemento(this.content);
  }

  /**
   * Restore the state from a memento
   */
  restoreFromMemento(memento: Memento): void {
    this.content = memento.getState();
  }

  /**
   * Get the length of the content
   */
  getLength(): number {
    return this.content.length;
  }
}
