/**
 * Image Interface
 * 
 * Defines the interface for image objects.
 */

export interface Image {
  /**
   * Display the image
   */
  display(): void;

  /**
   * Get the filename
   */
  getFilename(): string;
}
