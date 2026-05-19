import { State } from './state-interfaces';
import { MediaPlayer } from './media-player';
import { PausedState } from './paused-state';
import { StoppedState } from './stopped-state';

/**
 * Playing State
 * 
 * Represents the state when the media player is playing.
 * From this state, the player can transition to paused or stopped.
 */

export class PlayingState implements State {
  play(player: MediaPlayer): void {
    console.log(`▶️  Already playing: ${player.getTrack()}`);
  }

  pause(player: MediaPlayer): void {
    console.log(`⏸️  Pausing: ${player.getTrack()}`);
    player.setState(new PausedState());
  }

  stop(player: MediaPlayer): void {
    console.log(`⏹️  Stopping: ${player.getTrack()}`);
    player.setState(new StoppedState());
  }

  getName(): string {
    return 'Playing';
  }
}
