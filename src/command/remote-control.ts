import { Command } from './command-interfaces';

/**
 * Remote Control (Invoker)
 * 
 * The invoker that holds commands and triggers their execution.
 * This is the remote control that can execute commands and undo them.
 */

export class RemoteControl {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command | null = null;
  private history: Command[] = [];

  constructor(slots: number = 7) {
    // Initialize with empty commands (NoCommand pattern)
    for (let i = 0; i < slots; i++) {
      this.onCommands.push(new NoCommand());
      this.offCommands.push(new NoCommand());
    }
  }

  /**
   * Set a command for a specific slot
   */
  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  /**
   * Press the on button for a slot
   */
  pressOnButton(slot: number): void {
    const command = this.onCommands[slot];
    command.execute();
    this.undoCommand = command;
    this.history.push(command);
  }

  /**
   * Press the off button for a slot
   */
  pressOffButton(slot: number): void {
    const command = this.offCommands[slot];
    command.execute();
    this.undoCommand = command;
    this.history.push(command);
  }

  /**
   * Undo the last command
   */
  pressUndoButton(): void {
    if (this.undoCommand) {
      console.log('↩️  Undoing last command...');
      this.undoCommand.undo();
      this.history.pop();
      this.undoCommand = this.history.length > 0 ? this.history[this.history.length - 1] : null;
    } else {
      console.log('↩️  Nothing to undo');
    }
  }

  /**
   * Get command history
   */
  getHistory(): string[] {
    return this.history.map(cmd => cmd.getDescription());
  }
}

/**
 * No Command
 * 
 * A null object pattern implementation for empty command slots.
 */
class NoCommand implements Command {
  execute(): void {
    // Do nothing
  }

  undo(): void {
    // Do nothing
  }

  getDescription(): string {
    return 'No Command';
  }
}
