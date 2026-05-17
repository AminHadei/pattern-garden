/**
 * Command Interface
 * 
 * Defines the common interface for all command objects.
 * This allows commands to be executed, undone, and stored.
 */

export interface Command {
  /**
   * Execute the command
   */
  execute(): void;

  /**
   * Undo the command
   */
  undo(): void;

  /**
   * Get a description of the command
   */
  getDescription(): string;
}
