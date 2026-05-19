/**
 * Memento Interface
 * 
 * Defines the interface for memento objects that store state snapshots.
 * The memento should only be accessible by the originator.
 */

export interface Memento {
  /**
   * Get the state stored in this memento
   */
  getState(): string;

  /**
   * Get the timestamp when this memento was created
   */
  getTimestamp(): Date;
}
