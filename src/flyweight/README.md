# Flyweight Pattern - Text Editor

This project provides a complete example of the Flyweight pattern for a text editor that efficiently stores characters by sharing common properties.

## Overview

The Flyweight pattern uses sharing to support large numbers of fine-grained objects efficiently. It separates intrinsic state (shared, immutable) from extrinsic state (context-specific, variable) to reduce memory usage.

## Components

### 1. Character (Flyweight)
Represents the intrinsic state of a character (char, font, size, color) - the shared, immutable part.

### 2. Character Factory (Flyweight Factory)
Creates and manages flyweight objects, ensuring proper sharing and reuse.

### 3. Character Context
Represents the extrinsic state (position: row, column) - the context-specific part that varies.

### 4. Text Editor
Uses the Flyweight pattern to efficiently store and render text by separating intrinsic and extrinsic state.

## File Structure

```
flyweight/
├── character.ts                 # Character flyweight
├── character-factory.ts         # Flyweight factory
├── character-context.ts         # Character context (extrinsic state)
├── text-editor.ts               # Text editor using flyweights
├── flyweight-example.ts         # Flyweight pattern usage example
└── README.md                    # This file
```

## Usage

### Basic Usage

```typescript
import { TextEditor } from './text-editor';

const editor = new TextEditor();
editor.addCharacter('H', 'Arial', 12, 'black', 0, 0);
editor.addCharacter('e', 'Arial', 12, 'black', 0, 1);
editor.addCharacter('l', 'Arial', 12, 'black', 0, 2);
editor.addCharacter('l', 'Arial', 12, 'black', 0, 3); // Reused

console.log(editor.render());
const stats = editor.getMemoryStats();
console.log(`Memory savings: ${stats.savings}`);
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/flyweight/flyweight-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/flyweight/flyweight-example.js
```

## Benefits of Flyweight Pattern

1. **Memory Efficiency**: Reduces memory usage by sharing common data
2. **Performance**: Improves performance by reducing object creation
3. **Separation of Concerns**: Separates intrinsic and extrinsic state
4. **Scalability**: Enables handling large numbers of objects
5. **Immutability**: Shared objects are immutable
6. **Context Storage**: Context-specific data stored separately

## Design Pattern

Flyweight is a structural design pattern that:
- Uses sharing to support large numbers of fine-grained objects
- Separates intrinsic state (shared) from extrinsic state (context-specific)
- Reduces memory usage by sharing common data
- Improves performance by reducing object creation

## Use Cases

This pattern is useful in the following scenarios:
- Text editors and word processors
- Game development (trees, bullets, particles)
- GUI frameworks (repeated UI elements)
- Browser rendering (DOM elements with same styles)
- When you have many similar objects that can share state
- When memory usage is a concern
