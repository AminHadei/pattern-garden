import { Memento } from './memento-interfaces';

/**
 * Caretaker
 * 
 * The caretaker class that is responsible for storing and managing mementos.
 * It never operates on or examines the contents of a memento.
 */

export class Caretaker {
  private mementos: Memento[] = [];
  private currentIndex: number = -1;
  private maxHistorySize: number = 50;

  /**
   * Save a memento
   */
  saveMemento(memento: Memento): void {
    // Remove any mementos after current index (for redo functionality)
    this.mementos = this.mementos.slice(0, this.currentIndex + 1);

    // Add new memento
    this.mementos.push(memento);
    this.currentIndex++;

    // Limit history size
    if (this.mementos.length > this.maxHistorySize) {
      this.mementos.shift();
      this.currentIndex--;
    }
  }

  /**
   * Get the previous memento (undo)
   */
  getPreviousMemento(): Memento | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.mementos[this.currentIndex];
    }
    return null;
  }

  /**
   * Get the next memento (redo)
   */
  getNextMemento(): Memento | null {
    if (this.currentIndex < this.mementos.length - 1) {
      this.currentIndex++;
      return this.mementos[this.currentIndex];
    }
    return null;
  }

  /**
   * Get the current memento
   */
  getCurrentMemento(): Memento | null {
    if (this.currentIndex >= 0 && this.currentIndex < this.mementos.length) {
      return this.mementos[this.currentIndex];
    }
    return null;
  }

  /**
   * Check if undo is possible
   */
  canUndo(): boolean {
    return this.currentIndex > 0;
  }

  /**
   * Check if redo is possible
   */
  canRedo(): boolean {
    return this.currentIndex < this.mementos.length - 1;
  }

  /**
   * Get the history size
   */
  getHistorySize(): number {
    return this.mementos.length;
  }

  /**
   * Clear all history
   */
  clearHistory(): void {
    this.mementos = [];
    this.currentIndex = -1;
  }
}
