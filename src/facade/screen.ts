/**
 * Screen
 * 
 * A subsystem component that controls the screen.
 */

export class Screen {
  private isDown: boolean = false;

  down(): void {
    this.isDown = true;
    console.log('🖥️  Screen is DOWN');
  }

  up(): void {
    this.isDown = false;
    console.log('🖥️  Screen is UP');
  }
}
