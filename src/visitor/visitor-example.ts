import { Document } from './document';
import { TextElement } from './text-element';
import { ImageElement } from './image-element';
import { ParagraphElement } from './paragraph-element';
import { HTMLExportVisitor } from './html-export-visitor';
import { JSONExportVisitor } from './json-export-visitor';
import { WordCountVisitor } from './word-count-visitor';

/**
 * Visitor Pattern Example - Document Export System
 * 
 * This example demonstrates the Visitor pattern for a document system
 * where different operations (export, word count) can be performed
 * on document elements without modifying the element classes.
 * 
 * The Visitor pattern:
 * - Separates algorithms from the objects they operate on
 * - Allows adding new operations without modifying element classes
 * - Enables operations to be defined over a structure of objects
 * - Follows Open/Closed Principle
 */

function demonstrateVisitor(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║         Visitor Pattern - Document Export Example         ║');
  console.log('║         Separate Operations from Object Structure         ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Create a document with various elements
  const document = new Document();

  const text1 = new TextElement('This is a sample text element.');
  const text2 = new TextElement('Another text element with more content.');
  const image1 = new ImageElement('photo.jpg', 'A beautiful landscape', 800, 600);
  const paragraph1 = new ParagraphElement('Introduction');
  paragraph1.addText(new TextElement('This is the first paragraph.'));
  paragraph1.addText(new TextElement('This is the second sentence.'));

  document.addElement(text1);
  document.addElement(image1);
  document.addElement(text2);
  document.addElement(paragraph1);

  // Example 1: HTML Export
  console.log('📌 Example 1: HTML Export');
  console.log('─'.repeat(60));

  const htmlVisitor = new HTMLExportVisitor();
  document.accept(htmlVisitor);
  console.log(htmlVisitor.getHTML());
  console.log();

  // Example 2: JSON Export
  console.log('📌 Example 2: JSON Export');
  console.log('─'.repeat(60));

  const jsonVisitor = new JSONExportVisitor();
  document.accept(jsonVisitor);
  console.log(jsonVisitor.getJSON());
  console.log();

  // Example 3: Word Count
  console.log('📌 Example 3: Word Count');
  console.log('─'.repeat(60));

  const wordCountVisitor = new WordCountVisitor();
  document.accept(wordCountVisitor);
  console.log(`Total word count: ${wordCountVisitor.getWordCount()}`);
  console.log();

  // Example 4: Multiple visitors on same document
  console.log('📌 Example 4: Multiple Visitors on Same Document');
  console.log('─'.repeat(60));

  const document2 = new Document();
  document2.addElement(new TextElement('First sentence.'));
  document2.addElement(new TextElement('Second sentence with more words.'));
  document2.addElement(new ImageElement('chart.png', 'Data visualization chart', 1200, 800));

  const htmlVisitor2 = new HTMLExportVisitor();
  const wordCountVisitor2 = new WordCountVisitor();

  document2.accept(htmlVisitor2);
  document2.accept(wordCountVisitor2);

  console.log('HTML Export:');
  console.log(htmlVisitor2.getHTML());
  console.log(`Word Count: ${wordCountVisitor2.getWordCount()}\n`);

  // Example 5: Adding new operations without modifying elements
  console.log('📌 Example 5: Visitor Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Key advantage: New operations can be added without modifying element classes.');
  console.log('For example, we could add:');
  console.log('  • PDF Export Visitor');
  console.log('  • Markdown Export Visitor');
  console.log('  • Spell Check Visitor');
  console.log('  • Accessibility Check Visitor');
  console.log('All without changing TextElement, ImageElement, or ParagraphElement classes.\n');

  // Example 6: Selective visiting
  console.log('📌 Example 6: Selective Element Visiting');
  console.log('─'.repeat(60));

  const wordCountVisitor3 = new WordCountVisitor();
  
  // Visit only specific elements
  text1.accept(wordCountVisitor3);
  text2.accept(wordCountVisitor3);
  
  console.log(`Word count for selected elements: ${wordCountVisitor3.getWordCount()}`);
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Visitor Pattern:                          ║');
  console.log('║    1. Separates operations from object structure           ║');
  console.log('║    2. Easy to add new operations (visitors)                ║');
  console.log('║    3. Operations can be grouped together                   ║');
  console.log('║    4. Open/Closed Principle - open for extension           ║');
  console.log('║    5. Single Responsibility - each visitor has one job     ║');
  console.log('║    6. Can accumulate state during traversal                ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateVisitor();
