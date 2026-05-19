import { Memento } from './memento-interfaces';

/**
 * Text Memento
 * 
 * A memento that stores the state of a text editor.
 * This is an immutable object that captures the editor's state at a point in time.
 */

export class TextMemento implements Memento {
  private readonly state: string;
  private readonly timestamp: Date;

  constructor(state: string) {
    this.state = state;
    this.timestamp = new Date();
  }

  getState(): string {
    return this.state;
  }

  getTimestamp(): Date {
    return this.timestamp;
  }
}
