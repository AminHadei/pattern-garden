import { TextEditor } from './text-editor';
import { Caretaker } from './caretaker';

/**
 * Memento Pattern Example - Text Editor with Undo/Redo
 * 
 * This example demonstrates the Memento pattern for a text editor
 * that supports undo and redo functionality by saving and restoring states.
 * 
 * The Memento pattern:
 * - Captures and externalizes an object's internal state
 * - Allows the object to be restored to this state later
 * - Protects encapsulation by not exposing internal state
 * - Enables undo/redo functionality
 */

function demonstrateMemento(): void {
  console.log('╔═════════════════════════════════════════════════════════╗');
  console.log('║          Memento Pattern - Text Editor Example          ║');
  console.log('║          Save State, Restore Later (Undo/Redo)          ║');
  console.log('╚═════════════════════════════════════════════════════════╝\n');

  const editor = new TextEditor();
  const caretaker = new Caretaker();

  // Example 1: Basic save and restore
  console.log('📌 Example 1: Basic Save and Restore');
  console.log('─'.repeat(60));

  editor.setContent('Hello');
  console.log(`Content: "${editor.getContent()}"`);
  
  const memento1 = editor.createMemento();
  caretaker.saveMemento(memento1);
  console.log('State saved\n');

  editor.append(' World');
  console.log(`Content after append: "${editor.getContent()}"`);

  const previousMemento = caretaker.getPreviousMemento();
  if (previousMemento) {
    editor.restoreFromMemento(previousMemento);
    console.log(`Content after restore: "${editor.getContent()}"`);
  }
  console.log();

  // Example 2: Multiple saves and undo/redo
  console.log('📌 Example 2: Multiple Saves and Undo/Redo');
  console.log('─'.repeat(60));

  editor.setContent('Initial text');
  caretaker.saveMemento(editor.createMemento());
  console.log(`1. "${editor.getContent()}"`);

  editor.append(' - First edit');
  caretaker.saveMemento(editor.createMemento());
  console.log(`2. "${editor.getContent()}"`);

  editor.append(' - Second edit');
  caretaker.saveMemento(editor.createMemento());
  console.log(`3. "${editor.getContent()}"`);

  editor.append(' - Third edit');
  caretaker.saveMemento(editor.createMemento());
  console.log(`4. "${editor.getContent()}"\n`);

  // Undo operations
  console.log('Undoing changes:');
  if (caretaker.canUndo()) {
    const undoMemento = caretaker.getPreviousMemento();
    if (undoMemento) {
      editor.restoreFromMemento(undoMemento);
      console.log(`After undo: "${editor.getContent()}"`);
    }
  }

  if (caretaker.canUndo()) {
    const undoMemento = caretaker.getPreviousMemento();
    if (undoMemento) {
      editor.restoreFromMemento(undoMemento);
      console.log(`After undo: "${editor.getContent()}"`);
    }
  }

  if (caretaker.canUndo()) {
    const undoMemento = caretaker.getPreviousMemento();
    if (undoMemento) {
      editor.restoreFromMemento(undoMemento);
      console.log(`After undo: "${editor.getContent()}"`);
    }
  }
  console.log();

  // Redo operations
  console.log('Redoing changes:');
  if (caretaker.canRedo()) {
    const redoMemento = caretaker.getNextMemento();
    if (redoMemento) {
      editor.restoreFromMemento(redoMemento);
      console.log(`After redo: "${editor.getContent()}"`);
    }
  }

  if (caretaker.canRedo()) {
    const redoMemento = caretaker.getNextMemento();
    if (redoMemento) {
      editor.restoreFromMemento(redoMemento);
      console.log(`After redo: "${editor.getContent()}"`);
    }
  }
  console.log();

  // Example 3: History management
  console.log('📌 Example 3: History Management');
  console.log('─'.repeat(60));

  const editor2 = new TextEditor();
  const caretaker2 = new Caretaker();

  for (let i = 1; i <= 5; i++) {
    editor2.setContent(`Version ${i}`);
    caretaker2.saveMemento(editor2.createMemento());
    console.log(`Saved: "${editor2.getContent()}"`);
  }

  console.log(`\nHistory size: ${caretaker2.getHistorySize()}`);
  console.log(`Can undo: ${caretaker2.canUndo()}`);
  console.log(`Can redo: ${caretaker2.canRedo()}\n`);

  // Example 4: State protection
  console.log('📌 Example 4: State Protection');
  console.log('─'.repeat(60));

  editor2.setContent('Protected content');
  const memento = editor2.createMemento();
  caretaker2.saveMemento(memento);

  console.log('Memento stores state without exposing internal structure:');
  console.log(`Memento state: "${memento.getState()}"`);
  console.log(`Memento timestamp: ${memento.getTimestamp().toLocaleTimeString()}`);
  console.log();

  // Example 5: Practical text editing scenario
  console.log('📌 Example 5: Practical Text Editing Scenario');
  console.log('─'.repeat(60));

  const editor3 = new TextEditor();
  const caretaker3 = new Caretaker();

  console.log('Simulating text editing session:\n');

  editor3.setContent('Document Title');
  caretaker3.saveMemento(editor3.createMemento());
  console.log(`[Save] "${editor3.getContent()}"`);

  editor3.append('\n\nIntroduction paragraph.');
  caretaker3.saveMemento(editor3.createMemento());
  console.log(`[Save] "${editor3.getContent()}"`);

  editor3.append('\n\nBody paragraph with more content.');
  caretaker3.saveMemento(editor3.createMemento());
  console.log(`[Save] "${editor3.getContent()}"`);

  // User makes a mistake and wants to undo
  console.log('\nUser wants to undo last change:');
  if (caretaker3.canUndo()) {
    const undoMemento = caretaker3.getPreviousMemento();
    if (undoMemento) {
      editor3.restoreFromMemento(undoMemento);
      console.log(`[Undo] "${editor3.getContent()}"`);
    }
  }

  // User continues editing
  editor3.append('\n\nNew paragraph after undo.');
  caretaker3.saveMemento(editor3.createMemento());
  console.log(`[Save] "${editor3.getContent()}"`);
  console.log();

  // Summary
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Memento Pattern:                            ║');
  console.log('║    1. Captures object state without violating encapsulation  ║');
  console.log('║    2. Enables undo/redo functionality                        ║');
  console.log('║    3. Simplifies originator (no history management)          ║');
  console.log('║    4. Protects internal state from external access           ║');
  console.log('║    5. Can store multiple states (history)                    ║');
  console.log('║    6. Allows state restoration at any point                  ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateMemento();
