/**
 * Stereo Class
 * 
 * Represents a stereo system that can be turned on/off,
 * volume adjusted, and CD played.
 * This is a receiver in the Command pattern.
 */

export class Stereo {
  private isOn: boolean = false;
  private volume: number = 20;
  private cd: string | null = null;

  turnOn(): void {
    this.isOn = true;
    console.log('🔊 Stereo is ON');
  }

  turnOff(): void {
    this.isOn = false;
    console.log('🔊 Stereo is OFF');
  }

  setVolume(level: number): void {
    this.volume = Math.max(0, Math.min(100, level));
    console.log(`🔊 Stereo volume set to ${this.volume}%`);
  }

  setCD(cdName: string): void {
    this.cd = cdName;
    console.log(`🔊 Stereo CD set to: ${cdName}`);
  }

  getVolume(): number {
    return this.volume;
  }

  isStereoOn(): boolean {
    return this.isOn;
  }
}
