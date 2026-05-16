# Singleton Pattern - Logger System

This project provides a complete example of the Singleton pattern for a logging system that ensures only one logger instance exists throughout the application lifecycle.

## Purpose

The Singleton pattern ensures that:
- Only one instance of the Logger class can exist
- The same instance is accessible from anywhere in the application
- All logging operations use the same shared instance
- Resource usage is optimized (no duplicate loggers)

## File Structure

```
singleton/
├── logger-interfaces.ts          # Logger interface definition
├── logger.ts                     # Singleton Logger implementation
├── logger-example.ts             # Singleton pattern usage example
└── README.md                     # This file
```

## Usage

### Basic Usage

```typescript
import { SingletonLogger } from './logger';

// Get the singleton instance
const logger = SingletonLogger.getInstance();

// Use the logger
logger.info('Application started');
logger.warn('Low memory detected');
logger.error('Failed to connect to database');
logger.debug('Processing user request');
```

### Multiple References, Same Instance

```typescript
import { SingletonLogger } from './logger';

// All these references point to the same instance
const logger1 = SingletonLogger.getInstance();
const logger2 = SingletonLogger.getInstance();
const logger3 = SingletonLogger.getInstance();

// Verify they are the same
console.log(logger1 === logger2); // true
console.log(logger1 === logger3); // true

// All operations affect the same instance
logger1.info('Message 1');
logger2.warn('Message 2');
logger3.error('Message 3');

// All logs are stored in the same instance
console.log(logger1.getLogCount()); // 3
console.log(logger2.getLogCount()); // 3
```

### Accessing Logs

```typescript
import { SingletonLogger } from './logger';

const logger = SingletonLogger.getInstance();

// Log some messages
logger.info('User logged in');
logger.warn('Session expiring soon');
logger.error('Payment failed');

// Get all logs
const allLogs = logger.getLogs();
allLogs.forEach(log => console.log(log));

// Get log count
const count = logger.getLogCount();

// Clear logs
logger.clearLogs();
```

### Using in Different Modules

```typescript
// user-service.ts
import { SingletonLogger } from './logger';

export function createUser() {
  const logger = SingletonLogger.getInstance();
  logger.info('Creating new user');
  // ... user creation logic
}

// order-service.ts
import { SingletonLogger } from './logger';

export function processOrder() {
  const logger = SingletonLogger.getInstance();
  logger.info('Processing order');
  // ... order processing logic
}

// Both services use the same logger instance
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/singleton/logger-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/singleton/logger-example.js
```

## Benefits of Singleton Pattern

1. **Single Instance**: Ensures only one instance exists, preventing resource waste
2. **Global Access**: Provides easy access from anywhere in the application
3. **Consistent State**: All parts of the application share the same logger state
4. **Resource Efficiency**: Avoids creating multiple instances of expensive resources
5. **Controlled Access**: Provides a controlled way to access the shared resource
6. **Lazy Initialization**: Creates the instance only when first needed

## When to Use Singleton Pattern

- When you need exactly one instance of a class
- When the instance needs to be accessible globally
- When you want to control access to a shared resource
- For logging systems, database connections, configuration managers
- When creating multiple instances would be wasteful or problematic

## When NOT to Use Singleton Pattern

- When you need multiple instances of a class
- When the class needs to be easily testable (singletons can make testing harder)
- When you need to subclass the class (singletons are harder to extend)
- When the class needs to be thread-safe in multi-threaded environments (JavaScript is single-threaded, but this is still a consideration)

## Design Pattern

Singleton is a creational design pattern that:
- Ensures a class has only one instance
- Provides a global point of access to that instance
- Prevents direct instantiation through constructor
- Uses lazy initialization (creates instance when first requested)

## Implementation Details

### Private Constructor
The constructor is private, preventing external code from creating instances using `new SingletonLogger()`.

### Static getInstance Method
The `getInstance()` method is static, allowing access without creating an instance. It implements lazy initialization, creating the instance only when first called.

### Instance Storage
The instance is stored as a static property, ensuring it persists across all calls to `getInstance()`.

## Thread Safety Note

In JavaScript (single-threaded environment), the basic singleton implementation is thread-safe. However, in multi-threaded environments or when using Web Workers, additional synchronization mechanisms may be required.

## Testing Considerations

For testing purposes, the `resetInstance()` method is provided to reset the singleton instance. This should be used carefully and typically only in test environments.

