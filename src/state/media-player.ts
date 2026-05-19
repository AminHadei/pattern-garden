import { State } from './state-interfaces';
import { StoppedState } from './stopped-state';

/**
 * Media Player (Context)
 * 
 * The context class that maintains a reference to the current state
 * and delegates state-specific behavior to the current state object.
 */

export class MediaPlayer {
  private state: State;
  private currentTrack: string = '';

  constructor() {
    this.state = new StoppedState();
  }

  /**
   * Change the current state
   */
  setState(state: State): void {
    this.state = state;
  }

  /**
   * Get the current state
   */
  getState(): State {
    return this.state;
  }

  /**
   * Set the current track
   */
  setTrack(track: string): void {
    this.currentTrack = track;
  }

  /**
   * Get the current track
   */
  getTrack(): string {
    return this.currentTrack;
  }

  /**
   * Play the media
   */
  play(): void {
    this.state.play(this);
  }

  /**
   * Pause the media
   */
  pause(): void {
    this.state.pause(this);
  }

  /**
   * Stop the media
   */
  stop(): void {
    this.state.stop(this);
  }
}
