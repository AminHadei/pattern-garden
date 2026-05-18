import { Character } from './character';

/**
 * Character Factory (Flyweight Factory)
 * 
 * Creates and manages flyweight objects.
 * Ensures that flyweights are shared properly.
 */

export class CharacterFactory {
  private characters: Map<string, Character> = new Map();

  /**
   * Get or create a character flyweight
   */
  getCharacter(char: string, font: string, size: number, color: string): Character {
    const key = `${char}-${font}-${size}-${color}`;

    if (!this.characters.has(key)) {
      this.characters.set(key, new Character(char, font, size, color));
      console.log(`  ✨ Created new character: ${key}`);
    } else {
      console.log(`  ♻️  Reused character: ${key}`);
    }

    return this.characters.get(key)!;
  }

  /**
   * Get the number of unique characters created
   */
  getCharacterCount(): number {
    return this.characters.size;
  }

  /**
   * Get all character keys
   */
  getCharacterKeys(): string[] {
    return Array.from(this.characters.keys());
  }
}
