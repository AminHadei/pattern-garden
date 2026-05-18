/**
 * Amplifier
 * 
 * A subsystem component that controls the amplifier.
 */

export class Amplifier {
  private isOn: boolean = false;
  private volume: number = 20;

  on(): void {
    this.isOn = true;
    console.log('🔊 Amplifier is ON');
  }

  off(): void {
    this.isOn = false;
    console.log('🔊 Amplifier is OFF');
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(100, volume));
    console.log(`🔊 Amplifier volume set to ${this.volume}%`);
  }

  setSurroundSound(): void {
    console.log('🔊 Amplifier set to Surround Sound mode');
  }
}
