import { Device } from './device-interfaces';

/**
 * Radio (Concrete Implementation)
 * 
 * A concrete implementation of the Device interface for a Radio.
 */

export class Radio implements Device {
  private enabled: boolean = false;
  private volume: number = 15;
  private channel: number = 88.5; // FM frequency

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
    console.log('📻 Radio is now ON');
  }

  disable(): void {
    this.enabled = false;
    console.log('📻 Radio is now OFF');
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(100, volume));
    console.log(`📻 Radio volume set to ${this.volume}%`);
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = Math.max(87.5, Math.min(108.0, channel));
    console.log(`📻 Radio frequency set to ${this.channel} MHz`);
  }

  getInfo(): string {
    return `Radio - Frequency: ${this.channel} MHz, Volume: ${this.volume}%`;
  }
}
