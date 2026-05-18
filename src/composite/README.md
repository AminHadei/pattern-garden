# Composite Pattern - File System

This project provides a complete example of the Composite pattern for a file system where files and directories can be treated uniformly.

## Overview

The Composite pattern composes objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly, simplifying client code and making it easier to add new component types.

## Components

### 1. File System Component Interface
Defines the common interface for both files and directories with methods: `getName()`, `getSize()`, `display()`, and optional methods for directories.

### 2. File (Leaf)
- **File**: Represents a file in the file system (leaf node with no children)

### 3. Directory (Composite)
- **Directory**: Represents a directory that can contain files and other directories

## File Structure

```
composite/
├── file-system-interfaces.ts   # Component interface
├── file.ts                     # File implementation (leaf)
├── directory.ts                # Directory implementation (composite)
├── composite-example.ts        # Composite pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Usage

```typescript
import { File } from './file';
import { Directory } from './directory';

const file = new File('document.txt', 1024);
const directory = new Directory('Documents');
directory.add(file);

directory.display();
```

### Nested Structure

```typescript
const root = new Directory('Root');
const subDir = new Directory('SubDir');
subDir.add(new File('file1.txt', 100));
subDir.add(new File('file2.txt', 200));
root.add(subDir);
root.add(new File('root-file.txt', 300));

root.display();
console.log(`Total size: ${root.getSize()} bytes`);
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/composite/composite-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/composite/composite-example.js
```

## Benefits of Composite Pattern

1. **Uniform Treatment**: Files and directories are treated the same way
2. **Simplifies Client Code**: No need to distinguish between files and directories
3. **Easy to Extend**: New component types can be added easily
4. **Recursive Composition**: Supports nested structures naturally
5. **Operations on Both**: Operations work on both leaves and composites
6. **Single Responsibility**: Each component has a clear responsibility

## Design Pattern

Composite is a structural design pattern that:
- Composes objects into tree structures
- Allows clients to treat individual objects and compositions uniformly
- Enables recursive composition
- Simplifies client code

## Use Cases

This pattern is useful in the following scenarios:
- File systems
- GUI component hierarchies (windows, panels, buttons)
- Organization structures (departments, employees)
- Document structures (sections, paragraphs, sentences)
- Menu systems
- Tree structures in general
