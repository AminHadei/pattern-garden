import { RemoteControl } from './remote-control';
import { Device } from './device-interfaces';

/**
 * Advanced Remote Control (Refined Abstraction)
 * 
 * An extended abstraction that adds more features.
 * This demonstrates how the Bridge pattern allows extending
 * the abstraction independently from the implementation.
 */

export class AdvancedRemoteControl extends RemoteControl {
  /**
   * Mute the device
   */
  mute(): void {
    this.device.setVolume(0);
    console.log('🔇 Device muted');
  }

  /**
   * Set volume to a specific level
   */
  setVolume(volume: number): void {
    this.device.setVolume(volume);
  }

  /**
   * Set channel to a specific number
   */
  setChannel(channel: number): void {
    this.device.setChannel(channel);
  }

  /**
   * Get current status
   */
  getStatus(): string {
    const status = this.device.isEnabled() ? 'ON' : 'OFF';
    return `${this.device.getInfo()} - Status: ${status}`;
  }
}
