import { MediaPlayer } from './media-player';

/**
 * State Interface
 * 
 * Defines the interface for all state classes.
 * Each state implements the behavior for the media player in that state.
 */

export interface State {
  /**
   * Play the media
   */
  play(player: MediaPlayer): void;

  /**
   * Pause the media
   */
  pause(player: MediaPlayer): void;

  /**
   * Stop the media
   */
  stop(player: MediaPlayer): void;

  /**
   * Get the name of the state
   */
  getName(): string;
}
