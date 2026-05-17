import { Device } from './device-interfaces';

/**
 * TV (Concrete Implementation)
 * 
 * A concrete implementation of the Device interface for a TV.
 */

export class TV implements Device {
  private enabled: boolean = false;
  private volume: number = 20;
  private channel: number = 1;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
    console.log('📺 TV is now ON');
  }

  disable(): void {
    this.enabled = false;
    console.log('📺 TV is now OFF');
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(100, volume));
    console.log(`📺 TV volume set to ${this.volume}%`);
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = Math.max(1, channel);
    console.log(`📺 TV channel set to ${this.channel}`);
  }

  getInfo(): string {
    return `TV - Channel: ${this.channel}, Volume: ${this.volume}%`;
  }
}
