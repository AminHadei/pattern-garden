# Visitor Pattern - Document Export System

This project provides a complete example of the Visitor pattern for a document system where different operations (export, word count) can be performed on document elements without modifying the element classes.

## Overview

The Visitor pattern separates algorithms from the objects they operate on. It allows you to define new operations without changing the classes of the elements on which they operate. This pattern is useful when you have a stable object structure but want to add new operations frequently.

## Components

### 1. Element Interface
Defines the interface for all document elements with an `accept(visitor)` method.

### 2. Concrete Elements
- **TextElement**: Represents a text element
- **ImageElement**: Represents an image element
- **ParagraphElement**: Represents a paragraph element

### 3. Visitor Interface
Defines the interface for all visitors with methods to visit each element type.

### 4. Concrete Visitors
- **HTMLExportVisitor**: Exports elements to HTML format
- **JSONExportVisitor**: Exports elements to JSON format
- **WordCountVisitor**: Counts words in elements

### 5. Document
A container that holds multiple elements and can accept visitors.

## File Structure

```
visitor/
├── visitor-interfaces.ts       # Visitor and Element interfaces
├── text-element.ts             # Text element implementation
├── image-element.ts            # Image element implementation
├── paragraph-element.ts        # Paragraph element implementation
├── html-export-visitor.ts      # HTML export visitor
├── json-export-visitor.ts      # JSON export visitor
├── word-count-visitor.ts       # Word count visitor
├── document.ts                 # Document container
├── visitor-example.ts          # Visitor pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Visitor Usage

```typescript
import { Document } from './document';
import { TextElement } from './text-element';
import { HTMLExportVisitor } from './html-export-visitor';

const document = new Document();
document.addElement(new TextElement('Hello World'));

const htmlVisitor = new HTMLExportVisitor();
document.accept(htmlVisitor);
console.log(htmlVisitor.getHTML());
```

### Word Count

```typescript
import { WordCountVisitor } from './word-count-visitor';

const wordCountVisitor = new WordCountVisitor();
document.accept(wordCountVisitor);
console.log(wordCountVisitor.getWordCount());
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/visitor/visitor-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/visitor/visitor-example.js
```

## Benefits of Visitor Pattern

1. **Separates Operations**: Operations are separated from object structure
2. **Easy to Add Operations**: New visitors can be added without modifying elements
3. **Grouped Operations**: Related operations can be grouped in one visitor
4. **Open/Closed Principle**: Open for extension (new visitors), closed for modification
5. **Single Responsibility**: Each visitor has one specific operation
6. **Accumulates State**: Visitors can accumulate state during traversal

## Design Pattern

Visitor is a behavioral design pattern that:
- Separates algorithms from the objects they operate on
- Allows adding new operations without modifying element classes
- Enables operations to be defined over a structure of objects
- Follows the Open/Closed Principle

## Use Cases

This pattern is useful in the following scenarios:
- Document processing and export systems
- Compiler design (AST traversal)
- Report generation
- Code analysis tools
- File system operations
- When object structure is stable but operations vary frequently
