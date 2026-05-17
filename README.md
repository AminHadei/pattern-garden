# Workshop Projects

A collection of TypeScript workshop projects demonstrating various design patterns and programming concepts.

## Available Patterns

This repository contains examples of the following design patterns:

### Creational Patterns
- **Factory Method** (`src/factory/`) - Payment system with different payment methods
- **Abstract Factory** (`src/abstract-factory/`) - Payment system with families of related products
- **Builder** (`src/builder/`) - Computer building system with different configurations
- **Prototype** (`src/prototype/`) - Document management system with cloning
- **Singleton** (`src/singleton/`) - Logger system with single instance

### Structural Patterns
- **Adapter** (`src/adapter/`) - Payment system adapter for currency conversion
- **Decorator** (`src/decorator/`) - Coffee shop with dynamic toppings

### Behavioral Patterns
- **Observer** (`src/observer/`) - News notification system with subscribers
- **Strategy** (`src/strategy/`) - Sorting algorithms with interchangeable strategies
- **Chain of Responsibility** (`src/chain-of-responsibility/`) - Support ticket routing system

## Installation

This project requires Node.js to be installed on your system. Once Node.js is installed, you can install the project dependencies using any of the following package managers:

### Using npm
```bash
npm install
```

### Using yarn
```bash
yarn install
```

### Using pnpm
```bash
pnpm install
```

## Running Projects

After installing the dependencies, you can run TypeScript files in two ways:

### Method 1: Direct Execution (Recommended for Development)

Execute TypeScript files directly using `ts-node`:

```bash
npx ts-node src/[folder name]/[file name].ts
```

### Method 2: Compile Then Run

First, compile the TypeScript code to JavaScript:

```bash
npx tsc
```

Then run the compiled JavaScript file:

```bash
node dist/[file name].js
```

## Contributing Guidelines

When adding new code to this project, please follow these guidelines:

1. **Create a Workshop Folder**: Create a new folder inside the `src` directory with a name that is clearly related to your workshop topic. For example:
   - `src/observer-pattern/`
   - `src/singleton-pattern/`
   - `src/async-programming/`

2. **Workshop-Specific Documentation**: If your workshop has specific installation requirements or setup instructions that differ from the standard installation and execution methods described above, please create a `README.md` file inside your workshop folder. This README should include:
   - Any additional dependencies or setup steps required
   - Specific execution instructions if they differ from the standard approach
   - Any other relevant information for running your workshop code

3. **File Organization**: Keep your workshop code organized within its designated folder. You may include multiple files, subdirectories, or examples as needed.

**Example Structure:**
```
src/
  └── your-workshop-name/
      ├── README.md          (optional, if special instructions are needed)
      ├── example1.ts
      ├── example2.ts
      └── utils/
          └── helper.ts
```

