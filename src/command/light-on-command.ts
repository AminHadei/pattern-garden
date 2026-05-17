import { Command } from './command-interfaces';
import { Light } from './light';

/**
 * Light On Command
 * 
 * A concrete command that turns a light on.
 */

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }

  getDescription(): string {
    return 'Turn Light On';
  }
}
