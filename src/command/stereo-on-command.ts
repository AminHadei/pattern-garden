import { Command } from './command-interfaces';
import { Stereo } from './stereo';

/**
 * Stereo On Command
 * 
 * A concrete command that turns a stereo on and sets it up.
 */

export class StereoOnCommand implements Command {
  private previousVolume: number;

  constructor(
    private stereo: Stereo,
    private cdName: string,
    private volume: number
  ) {
    this.previousVolume = stereo.getVolume();
  }

  execute(): void {
    this.previousVolume = this.stereo.getVolume();
    this.stereo.turnOn();
    this.stereo.setCD(this.cdName);
    this.stereo.setVolume(this.volume);
  }

  undo(): void {
    this.stereo.setVolume(this.previousVolume);
    this.stereo.turnOff();
  }

  getDescription(): string {
    return `Turn Stereo On (CD: ${this.cdName}, Volume: ${this.volume}%)`;
  }
}
