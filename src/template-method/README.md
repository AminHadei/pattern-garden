# Template Method Pattern - Data Processing

This project provides a complete example of the Template Method pattern for a data processing system where different data formats (JSON, XML, CSV) are processed using the same algorithm structure.

## Overview

The Template Method pattern defines the skeleton of an algorithm in a base class, letting subclasses override specific steps of the algorithm without changing its structure. It promotes code reuse and follows the Hollywood Principle ("Don't call us, we'll call you").

## Components

### 1. Abstract Class (Template)
- **DataProcessor**: Defines the template method `processData()` that outlines the algorithm structure

### 2. Concrete Implementations
- **JSONProcessor**: Processes JSON data
- **XMLProcessor**: Processes XML data
- **CSVProcessor**: Processes CSV data

### 3. Algorithm Steps
The template method defines these steps:
1. Read data
2. Validate data
3. Process data (abstract - must be implemented)
4. Format output
5. Save result

## File Structure

```
template-method/
├── data-processor.ts           # Abstract base class with template method
├── json-processor.ts           # JSON processor implementation
├── xml-processor.ts            # XML processor implementation
├── csv-processor.ts            # CSV processor implementation
├── template-method-example.ts  # Template Method pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Usage

```typescript
import { JSONProcessor } from './json-processor';

const processor = new JSONProcessor();
const jsonData = '{"name": "John", "age": 30}';
const result = processor.processData(jsonData);
```

### Different Processors

```typescript
import { JSONProcessor } from './json-processor';
import { XMLProcessor } from './xml-processor';
import { CSVProcessor } from './csv-processor';

const processors = [
  new JSONProcessor(),
  new XMLProcessor(),
  new CSVProcessor(),
];

processors.forEach(processor => {
  processor.processData(data);
});
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/template-method/template-method-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/template-method/template-method-example.js
```

## Benefits of Template Method Pattern

1. **Code Reuse**: Common algorithm structure is defined once
2. **Consistent Structure**: All subclasses follow the same algorithm flow
3. **Flexibility**: Subclasses can customize specific steps
4. **Control Flow**: Base class controls the algorithm flow
5. **Hollywood Principle**: Base class calls subclasses, not vice versa
6. **Reduces Duplication**: Common code is in the base class

## Design Pattern

Template Method is a behavioral design pattern that:
- Defines the skeleton of an algorithm in a base class
- Lets subclasses override specific steps without changing structure
- Promotes code reuse
- Follows the Hollywood Principle

## Use Cases

This pattern is useful in the following scenarios:
- Data processing pipelines
- Framework design (defining algorithm structure)
- Code generation tools
- Test frameworks
- Build systems
- When you have multiple classes with similar algorithms but different steps
