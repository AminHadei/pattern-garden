# Mediator Pattern - Chat Room System

This project provides a complete example of the Mediator pattern for a chat room system where users communicate through a mediator rather than directly with each other.

## Overview

The Mediator pattern defines how objects interact with each other. It promotes loose coupling by keeping objects from referring to each other explicitly and allows their interaction to be varied independently. The mediator centralizes communication logic and makes the system easier to understand and maintain.

## Components

### 1. Mediator Interface
Defines the interface for the mediator with methods: `sendMessage()`, `addUser()`, `removeUser()`, and `getUsers()`.

### 2. Chat Room (Concrete Mediator)
- **ChatRoom**: Coordinates communication between users, manages user list, and routes messages

### 3. User (Colleague)
- **User**: Represents a user in the chat system that communicates through the mediator

## File Structure

```
mediator/
├── mediator-interfaces.ts      # Mediator interface
├── user.ts                     # User (colleague) implementation
├── chat-room.ts                # Chat room (concrete mediator) implementation
├── mediator-example.ts          # Mediator pattern usage example
└── README.md                    # This file
```

## Usage

### Basic Usage

```typescript
import { ChatRoom } from './chat-room';
import { User } from './user';

const chatRoom = new ChatRoom();
const alice = new User('Alice', chatRoom);
const bob = new User('Bob', chatRoom);

// Private message
alice.sendMessage('Hello!', bob);

// Broadcast message
alice.broadcast('Hello everyone!');
```

### User Management

```typescript
const user = new User('Charlie', chatRoom);
console.log(chatRoom.getUserCount()); // Get number of users
user.leave(); // User leaves the chat
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/mediator/mediator-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/mediator/mediator-example.js
```

## Benefits of Mediator Pattern

1. **Loose Coupling**: Objects don't need to know about each other
2. **Centralized Communication**: All communication logic is in the mediator
3. **Easy to Extend**: Easy to add/remove colleagues without affecting others
4. **Single Responsibility**: Mediator handles all routing logic
5. **Reduces Dependencies**: Fewer dependencies between objects
6. **Maintainability**: Makes system easier to understand and maintain

## Design Pattern

Mediator is a behavioral design pattern that:
- Defines how objects interact with each other
- Promotes loose coupling by keeping objects from referring to each other
- Centralizes communication logic in the mediator
- Makes the system easier to understand and maintain

## Use Cases

This pattern is useful in the following scenarios:
- Chat systems and messaging applications
- Air traffic control systems
- GUI frameworks (dialog boxes, form validation)
- Event handling systems
- Workflow management systems
- When you have many objects that need to communicate with each other
- When you want to reduce coupling between objects

