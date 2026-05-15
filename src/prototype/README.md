# Prototype Pattern - Document Management System

This project provides a complete example of the Prototype pattern for a document management system that allows creating document copies efficiently by cloning prototypes.

## Document Types

The system supports three types of documents:

### 1. Contract
Legal contract documents with parties, effective dates, expiration dates, and terms.

### 2. Resume
Resume/CV documents with personal information, work experience, education, and skills.

### 3. Report
Report documents with sections, author information, creation date, version, and status.

## File Structure

```
prototype/
├── document-interfaces.ts          # Document interface with clone method
├── contract.ts                     # Contract document implementation
├── resume.ts                       # Resume document implementation
├── report.ts                       # Report document implementation
├── document-manager.ts             # Document manager with prototype registry
├── document-example.ts             # Prototype pattern usage example
└── README.md                       # This file
```

## Usage

### Direct Cloning

```typescript
import { Contract } from './contract';

// Create an original document
const originalContract = new Contract(
  'Service Agreement',
  'Contract content...',
  ['Company A', 'Company B'],
  new Date(),
  null,
  ['Term 1', 'Term 2']
);

// Clone the document
const clonedContract = originalContract.clone() as Contract;

// Modify the clone independently
clonedContract.setTitle('Service Agreement - Copy');
clonedContract.addParty('Company C');
```

### Using DocumentManager

```typescript
import { DocumentManager } from './document-manager';

// Initialize manager with default templates
const manager = new DocumentManager();
manager.initializeDefaultTemplates();

// Create documents by cloning prototypes
const contract = manager.createDocument('contract');
const resume = manager.createDocument('resume');
const report = manager.createDocument('report');

// Register custom prototypes
const customContract = new Contract('Custom Template', '...');
manager.registerPrototype('custom', customContract);

// Create from custom prototype
const newDoc = manager.createDocument('custom');
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/prototype/document-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/prototype/document-example.js
```

## Benefits of Prototype Pattern

1. **Reduces Object Creation Cost**: Cloning is often cheaper than creating from scratch
2. **Hides Complexity**: Client doesn't need to know how to construct complex objects
3. **Runtime Specification**: Can specify objects to create at runtime
4. **Reduces Subclassing**: Alternative to Factory patterns
5. **Dynamic Prototypes**: Can add/remove prototypes at runtime
6. **Complex Initialization**: Useful when object initialization is expensive or complex

## When to Use Prototype Pattern

- When object creation is expensive (database queries, network calls)
- When you want to avoid subclassing for object creation
- When objects have many possible configurations
- When you need to create objects at runtime based on existing instances
- When you want to keep object creation logic separate from business logic

## Deep vs Shallow Copy

This implementation uses **deep copying** to ensure that:
- Nested objects are properly cloned
- Arrays are copied, not referenced
- Dates are properly cloned
- Modifications to clones don't affect originals

## Design Pattern

Prototype is a creational design pattern that:
- Specifies the kinds of objects to create using a prototypical instance
- Creates new objects by copying this prototype
- Allows adding/removing prototypes at runtime
- Reduces the need for subclassing

## Comparison with Other Patterns

- **vs Factory Method**: Prototype clones existing objects, Factory creates new ones
- **vs Abstract Factory**: Prototype focuses on cloning, Abstract Factory creates families
- **vs Builder**: Prototype copies existing state, Builder constructs step by step

