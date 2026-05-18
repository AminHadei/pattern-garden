/**
 * DVD Player
 * 
 * A subsystem component that controls the DVD player.
 */

export class DVDPlayer {
  private isOn: boolean = false;
  private movie: string | null = null;

  on(): void {
    this.isOn = true;
    console.log('📀 DVD Player is ON');
  }

  off(): void {
    this.isOn = false;
    this.movie = null;
    console.log('📀 DVD Player is OFF');
  }

  play(movie: string): void {
    this.movie = movie;
    console.log(`📀 DVD Player playing: "${movie}"`);
  }

  stop(): void {
    if (this.movie) {
      console.log(`📀 DVD Player stopped: "${this.movie}"`);
      this.movie = null;
    }
  }

  eject(): void {
    console.log('📀 DVD Player ejecting disc');
  }
}
