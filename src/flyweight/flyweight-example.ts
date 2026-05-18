import { TextEditor } from './text-editor';

/**
 * Flyweight Pattern Example - Text Editor
 * 
 * This example demonstrates the Flyweight pattern for a text editor
 * that efficiently stores characters by sharing common properties.
 * 
 * The Flyweight pattern:
 * - Uses sharing to support large numbers of fine-grained objects
 * - Separates intrinsic state (shared) from extrinsic state (context-specific)
 * - Reduces memory usage by sharing common data
 * - Improves performance by reducing object creation
 */

function demonstrateFlyweight(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║          Flyweight Pattern - Text Editor Example          ║');
  console.log('║           Share Common Data, Reduce Memory Usage          ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: Basic character sharing
  console.log('📌 Example 1: Basic Character Sharing');
  console.log('─'.repeat(60));

  const editor1 = new TextEditor();
  console.log('Adding characters:');

  editor1.addCharacter('H', 'Arial', 12, 'black', 0, 0);
  editor1.addCharacter('e', 'Arial', 12, 'black', 0, 1);
  editor1.addCharacter('l', 'Arial', 12, 'black', 0, 2);
  editor1.addCharacter('l', 'Arial', 12, 'black', 0, 3); // Reused
  editor1.addCharacter('o', 'Arial', 12, 'black', 0, 4);

  console.log(`\nRendered: ${editor1.render()}`);
  const stats1 = editor1.getMemoryStats();
  console.log(`Total characters: ${stats1.totalCharacters}`);
  console.log(`Unique characters: ${stats1.uniqueCharacters}`);
  console.log(`Memory savings: ${stats1.savings}\n`);

  // Example 2: Different fonts and styles
  console.log('📌 Example 2: Different Fonts and Styles');
  console.log('─'.repeat(60));

  const editor2 = new TextEditor();
  console.log('Adding characters with different styles:');

  editor2.addCharacter('H', 'Arial', 12, 'black', 0, 0);
  editor2.addCharacter('e', 'Arial', 12, 'black', 0, 1);
  editor2.addCharacter('l', 'Arial', 12, 'black', 0, 2);
  editor2.addCharacter('l', 'Arial', 12, 'black', 0, 3); // Reused
  editor2.addCharacter('o', 'Arial', 14, 'red', 0, 4); // Different size and color
  editor2.addCharacter('!', 'Arial', 14, 'red', 0, 5); // Different character

  console.log(`\nRendered: ${editor2.render()}`);
  const stats2 = editor2.getMemoryStats();
  console.log(`Total characters: ${stats2.totalCharacters}`);
  console.log(`Unique characters: ${stats2.uniqueCharacters}`);
  console.log(`Memory savings: ${stats2.savings}\n`);

  // Example 3: Large text with many repeated characters
  console.log('📌 Example 3: Large Text with Many Repeated Characters');
  console.log('─'.repeat(60));

  const editor3 = new TextEditor();
  const text = 'The quick brown fox jumps over the lazy dog.';
  console.log(`Adding text: "${text}"`);

  let column = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char !== ' ') {
      editor3.addCharacter(char, 'Arial', 12, 'black', 0, column);
      column++;
    }
  }

  const stats3 = editor3.getMemoryStats();
  console.log(`\nTotal characters: ${stats3.totalCharacters}`);
  console.log(`Unique characters: ${stats3.uniqueCharacters}`);
  console.log(`Memory savings: ${stats3.savings}`);
  console.log(`\nUnique character types: ${editor3.getMemoryStats().uniqueCharacters}`);
  console.log();

  // Example 4: Memory efficiency demonstration
  console.log('📌 Example 4: Memory Efficiency Demonstration');
  console.log('─'.repeat(60));

  const editor4 = new TextEditor();
  const repeatedText = 'AAAAABBBBBCCCCC';

  console.log(`Adding repeated text: "${repeatedText}"`);
  for (let i = 0; i < repeatedText.length; i++) {
    editor4.addCharacter(repeatedText[i], 'Arial', 12, 'black', 0, i);
  }

  const stats4 = editor4.getMemoryStats();
  console.log(`\nTotal characters: ${stats4.totalCharacters}`);
  console.log(`Unique characters: ${stats4.uniqueCharacters}`);
  console.log(`Memory savings: ${stats4.savings}`);
  console.log('Only 3 unique character objects created for 15 characters!\n');

  // Example 5: Without Flyweight (conceptual comparison)
  console.log('📌 Example 5: Flyweight Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Without Flyweight Pattern:');
  console.log('  • Each character would create a new object');
  console.log('  • 1000 characters = 1000 objects');
  console.log('  • High memory usage');
  console.log();
  console.log('With Flyweight Pattern:');
  console.log('  • Shared character objects');
  console.log('  • 1000 characters with 26 unique types = 26 objects');
  console.log('  • Significant memory savings');
  console.log('  • Better performance');
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Flyweight Pattern:                        ║');
  console.log('║    1. Reduces memory usage by sharing common data          ║');
  console.log('║    2. Separates intrinsic and extrinsic state              ║');
  console.log('║    3. Improves performance by reducing object creation     ║');
  console.log('║    4. Enables handling large numbers of objects            ║');
  console.log('║    5. Shared objects are immutable                         ║');
  console.log('║    6. Context-specific data stored separately              ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateFlyweight();
