# Memento Pattern - Text Editor with Undo/Redo

This project provides a complete example of the Memento pattern for a text editor that supports undo and redo functionality by saving and restoring states.

## Overview

The Memento pattern captures and externalizes an object's internal state so that the object can be restored to this state later, without violating encapsulation. It enables undo/redo functionality and state restoration.

## Components

### 1. Memento Interface
Defines the interface for memento objects that store state snapshots.

### 2. Text Memento
A concrete memento that stores the state of a text editor (the content).

### 3. Text Editor (Originator)
The originator class that:
- Creates mementos containing snapshots of its current state
- Can restore itself from a memento
- Manages its own state (content)

### 4. Caretaker
The caretaker class that:
- Stores and manages mementos
- Never operates on or examines memento contents
- Provides undo/redo functionality

## File Structure

```
memento/
├── memento-interfaces.ts       # Memento interface
├── text-memento.ts             # Text memento implementation
├── text-editor.ts              # Text editor (originator)
├── caretaker.ts                # Caretaker for managing mementos
├── memento-example.ts          # Memento pattern usage example
└── README.md                    # This file
```

## Usage

### Basic Save and Restore

```typescript
import { TextEditor } from './text-editor';
import { Caretaker } from './caretaker';

const editor = new TextEditor();
const caretaker = new Caretaker();

editor.setContent('Hello');
caretaker.saveMemento(editor.createMemento());

editor.append(' World');
// Restore previous state
const memento = caretaker.getPreviousMemento();
if (memento) {
  editor.restoreFromMemento(memento);
}
```

### Undo/Redo

```typescript
// Save multiple states
caretaker.saveMemento(editor.createMemento());
editor.append(' - Edit 1');
caretaker.saveMemento(editor.createMemento());

// Undo
if (caretaker.canUndo()) {
  const undoMemento = caretaker.getPreviousMemento();
  if (undoMemento) {
    editor.restoreFromMemento(undoMemento);
  }
}

// Redo
if (caretaker.canRedo()) {
  const redoMemento = caretaker.getNextMemento();
  if (redoMemento) {
    editor.restoreFromMemento(redoMemento);
  }
}
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/memento/memento-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/memento/memento-example.js
```

## Benefits of Memento Pattern

1. **State Protection**: Captures state without violating encapsulation
2. **Undo/Redo Support**: Enables undo and redo functionality
3. **Simplifies Originator**: Originator doesn't need to manage history
4. **State Restoration**: Can restore to any previous state
5. **History Management**: Can store multiple states
6. **Encapsulation**: Internal state is protected from external access

## Design Pattern

Memento is a behavioral design pattern that:
- Captures and externalizes an object's internal state
- Allows the object to be restored to this state later
- Protects encapsulation by not exposing internal state
- Enables undo/redo functionality

## Use Cases

This pattern is useful in the following scenarios:
- Text editors with undo/redo
- Game save/load systems
- Configuration management
- Transaction rollback systems
- State snapshots in applications
- Version control systems
