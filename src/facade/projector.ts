/**
 * Projector
 * 
 * A subsystem component that controls the projector.
 */

export class Projector {
  private isOn: boolean = false;

  on(): void {
    this.isOn = true;
    console.log('📽️  Projector is ON');
  }

  off(): void {
    this.isOn = false;
    console.log('📽️  Projector is OFF');
  }

  wideScreenMode(): void {
    console.log('📽️  Projector set to Wide Screen mode');
  }

  tvMode(): void {
    console.log('📽️  Projector set to TV mode');
  }
}
