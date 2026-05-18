/**
 * Theater Lights
 * 
 * A subsystem component that controls the theater lights.
 */

export class TheaterLights {
  private isOn: boolean = false;
  private dimLevel: number = 100;

  on(): void {
    this.isOn = true;
    console.log('💡 Theater Lights are ON');
  }

  off(): void {
    this.isOn = false;
    console.log('💡 Theater Lights are OFF');
  }

  dim(level: number): void {
    this.dimLevel = Math.max(0, Math.min(100, level));
    console.log(`💡 Theater Lights dimmed to ${this.dimLevel}%`);
  }
}
