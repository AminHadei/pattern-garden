import { Device } from './device-interfaces';

/**
 * Remote Control (Abstraction)
 * 
 * The abstraction side of the Bridge pattern.
 * Defines the high-level control interface for devices.
 */

export class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  /**
   * Toggle the device power
   */
  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  /**
   * Volume down
   */
  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  /**
   * Volume up
   */
  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  /**
   * Channel down
   */
  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  /**
   * Channel up
   */
  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  /**
   * Get device info
   */
  getDeviceInfo(): string {
    return this.device.getInfo();
  }
}
