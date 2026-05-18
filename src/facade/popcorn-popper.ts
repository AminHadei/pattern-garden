/**
 * Popcorn Popper
 * 
 * A subsystem component that controls the popcorn popper.
 */

export class PopcornPopper {
  private isOn: boolean = false;

  on(): void {
    this.isOn = true;
    console.log('🍿 Popcorn Popper is ON');
  }

  off(): void {
    this.isOn = false;
    console.log('🍿 Popcorn Popper is OFF');
  }

  pop(): void {
    console.log('🍿 Popcorn Popper popping popcorn!');
  }
}
