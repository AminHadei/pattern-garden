import { State } from './state-interfaces';
import { MediaPlayer } from './media-player';
import { PlayingState } from './playing-state';

/**
 * Stopped State
 * 
 * Represents the state when the media player is stopped.
 * From this state, the player can only transition to playing.
 */

export class StoppedState implements State {
  play(player: MediaPlayer): void {
    if (!player.getTrack()) {
      console.log('❌ No track selected. Please select a track first.');
      return;
    }
    console.log(`▶️  Playing: ${player.getTrack()}`);
    player.setState(new PlayingState());
  }

  pause(player: MediaPlayer): void {
    console.log('⏸️  Cannot pause. Player is stopped.');
  }

  stop(player: MediaPlayer): void {
    console.log('⏹️  Player is already stopped.');
  }

  getName(): string {
    return 'Stopped';
  }
}
