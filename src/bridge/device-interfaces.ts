/**
 * Device Interface (Implementation)
 * 
 * Defines the interface for device implementations.
 * This is the implementation side of the Bridge pattern.
 */

export interface Device {
  /**
   * Check if the device is enabled
   */
  isEnabled(): boolean;

  /**
   * Enable the device
   */
  enable(): void;

  /**
   * Disable the device
   */
  disable(): void;

  /**
   * Get the current volume
   */
  getVolume(): number;

  /**
   * Set the volume
   */
  setVolume(volume: number): void;

  /**
   * Get the current channel
   */
  getChannel(): number;

  /**
   * Set the channel
   */
  setChannel(channel: number): void;

  /**
   * Get device information
   */
  getInfo(): string;
}
