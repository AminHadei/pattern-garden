import { State } from './state-interfaces';
import { MediaPlayer } from './media-player';
import { PlayingState } from './playing-state';
import { StoppedState } from './stopped-state';

/**
 * Paused State
 * 
 * Represents the state when the media player is paused.
 * From this state, the player can transition to playing or stopped.
 */

export class PausedState implements State {
  play(player: MediaPlayer): void {
    console.log(`▶️  Resuming: ${player.getTrack()}`);
    player.setState(new PlayingState());
  }

  pause(player: MediaPlayer): void {
    console.log(`⏸️  Already paused: ${player.getTrack()}`);
  }

  stop(player: MediaPlayer): void {
    console.log(`⏹️  Stopping: ${player.getTrack()}`);
    player.setState(new StoppedState());
  }

  getName(): string {
    return 'Paused';
  }
}
