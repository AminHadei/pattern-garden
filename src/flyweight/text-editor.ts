import { CharacterFactory } from './character-factory';
import { CharacterContext } from './character-context';

/**
 * Text Editor
 * 
 * Uses the Flyweight pattern to efficiently store and render text.
 * Separates intrinsic state (character properties) from extrinsic
 * state (position).
 */

export class TextEditor {
  private characterFactory: CharacterFactory;
  private characters: CharacterContext[] = [];

  constructor() {
    this.characterFactory = new CharacterFactory();
  }

  /**
   * Add a character to the editor
   */
  addCharacter(
    char: string,
    font: string,
    size: number,
    color: string,
    row: number,
    column: number
  ): void {
    const character = this.characterFactory.getCharacter(char, font, size, color);
    this.characters.push(new CharacterContext(character, row, column));
  }

  /**
   * Render all characters
   */
  render(): string {
    return this.characters.map((ctx) => ctx.render()).join(' ');
  }

  /**
   * Get memory statistics
   */
  getMemoryStats(): { totalCharacters: number; uniqueCharacters: number; savings: string } {
    const totalCharacters = this.characters.length;
    const uniqueCharacters = this.characterFactory.getCharacterCount();
    const savings = totalCharacters > 0
      ? `${((1 - uniqueCharacters / totalCharacters) * 100).toFixed(1)}%`
      : '0%';

    return {
      totalCharacters,
      uniqueCharacters,
      savings,
    };
  }

  /**
   * Get all characters
   */
  getCharacters(): CharacterContext[] {
    return this.characters;
  }
}
