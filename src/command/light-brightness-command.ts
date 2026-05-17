import { Command } from './command-interfaces';
import { Light } from './light';

/**
 * Light Brightness Command
 * 
 * A concrete command that sets the light brightness.
 * Stores the previous brightness for undo functionality.
 */

export class LightBrightnessCommand implements Command {
  private previousBrightness: number;

  constructor(
    private light: Light,
    private brightness: number
  ) {
    this.previousBrightness = light.getBrightness();
  }

  execute(): void {
    this.previousBrightness = this.light.getBrightness();
    this.light.setBrightness(this.brightness);
  }

  undo(): void {
    this.light.setBrightness(this.previousBrightness);
  }

  getDescription(): string {
    return `Set Light Brightness to ${this.brightness}%`;
  }
}
