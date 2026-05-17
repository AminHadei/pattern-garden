import { Command } from './command-interfaces';

/**
 * Macro Command
 * 
 * A command that executes multiple commands in sequence.
 * This demonstrates the composite pattern within the command pattern.
 */

export class MacroCommand implements Command {
  private commands: Command[] = [];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute(): void {
    console.log('📋 Executing Macro Command:');
    this.commands.forEach((command, index) => {
      console.log(`  ${index + 1}. ${command.getDescription()}`);
      command.execute();
    });
  }

  undo(): void {
    console.log('📋 Undoing Macro Command:');
    // Undo in reverse order
    for (let i = this.commands.length - 1; i >= 0; i--) {
      console.log(`  ${this.commands.length - i}. Undo: ${this.commands[i].getDescription()}`);
      this.commands[i].undo();
    }
  }

  getDescription(): string {
    return `Macro Command (${this.commands.length} commands)`;
  }
}
