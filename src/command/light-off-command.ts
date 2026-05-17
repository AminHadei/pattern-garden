import { Command } from './command-interfaces';
import { Light } from './light';

/**
 * Light Off Command
 * 
 * A concrete command that turns a light off.
 */

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }

  getDescription(): string {
    return 'Turn Light Off';
  }
}
