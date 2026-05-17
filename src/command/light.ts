/**
 * Light Class
 * 
 * Represents a light that can be turned on or off.
 * This is a receiver in the Command pattern.
 */

export class Light {
  private isOn: boolean = false;
  private brightness: number = 50; // 0-100

  turnOn(): void {
    this.isOn = true;
    console.log('💡 Light is ON');
  }

  turnOff(): void {
    this.isOn = false;
    console.log('💡 Light is OFF');
  }

  setBrightness(level: number): void {
    this.brightness = Math.max(0, Math.min(100, level));
    console.log(`💡 Light brightness set to ${this.brightness}%`);
  }

  getBrightness(): number {
    return this.brightness;
  }

  isLightOn(): boolean {
    return this.isOn;
  }
}
