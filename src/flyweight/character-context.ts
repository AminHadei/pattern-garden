import { Character } from './character';

/**
 * Character Context
 * 
 * Represents the extrinsic state (position) of a character.
 * This is the context-specific part that varies.
 */

export class CharacterContext {
  constructor(
    private character: Character,
    private row: number,
    private column: number
  ) {}

  getCharacter(): Character {
    return this.character;
  }

  getRow(): number {
    return this.row;
  }

  getColumn(): number {
    return this.column;
  }

  render(): string {
    return `${this.character.render()}@(${this.row},${this.column})`;
  }
}
