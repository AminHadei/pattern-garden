import { Command } from './command-interfaces';
import { Stereo } from './stereo';

/**
 * Stereo Off Command
 * 
 * A concrete command that turns a stereo off.
 */

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.turnOff();
  }

  undo(): void {
    this.stereo.turnOn();
  }

  getDescription(): string {
    return 'Turn Stereo Off';
  }
}
