/**
 * Character (Flyweight)
 * 
 * Represents the intrinsic state of a character.
 * This is the shared, immutable part that can be reused.
 */

export class Character {
  constructor(
    private char: string,
    private font: string,
    private size: number,
    private color: string
  ) {}

  getChar(): string {
    return this.char;
  }

  getFont(): string {
    return this.font;
  }

  getSize(): number {
    return this.size;
  }

  getColor(): string {
    return this.color;
  }

  /**
   * Get a unique key for this character
   */
  getKey(): string {
    return `${this.char}-${this.font}-${this.size}-${this.color}`;
  }

  render(): string {
    return `[${this.char}]`;
  }
}
