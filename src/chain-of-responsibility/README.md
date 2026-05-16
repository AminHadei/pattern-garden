# Chain of Responsibility Pattern - Support Ticket System

This project provides a complete example of the Chain of Responsibility pattern for a support ticket system where tickets are automatically routed through different support levels based on their priority.

## Purpose

The Chain of Responsibility pattern demonstrates:
- **Request Routing**: Pass requests along a chain of handlers
- **Decoupling**: Sender doesn't need to know which handler will process the request
- **Flexibility**: Handlers can be added, removed, or reordered dynamically
- **Single Responsibility**: Each handler focuses on one type of request

## File Structure

```
chain-of-responsibility/
├── support-interfaces.ts         # SupportTicket and SupportHandler interfaces
├── base-support-handler.ts       # Base handler implementing chain logic
├── level1-support.ts             # Level 1 support (basic support)
├── level2-support.ts             # Level 2 support (technical support)
├── level3-support.ts             # Level 3 support (expert support)
├── manager-support.ts            # Manager support (executive support)
├── support-example.ts            # Chain of Responsibility usage example
└── README.md                     # This file
```

## How It Works

1. **Handler Interface** (`SupportHandler`): Defines the contract for all handlers
2. **Base Handler** (`BaseSupportHandler`): Implements chain logic and template method
3. **Concrete Handlers**: Different support levels that handle specific ticket priorities
4. **Chain Setup**: Handlers are linked together to form a processing chain
5. **Request Processing**: Each handler either processes the ticket or passes it to the next handler

## Support Levels

### Level 1 Support (Basic Support)
- **Priority**: LOW
- **Handles**: Password resets, basic questions, simple troubleshooting
- **Resolution Time**: ~1 hour

### Level 2 Support (Technical Support)
- **Priority**: MEDIUM
- **Handles**: Configuration issues, integration problems, performance issues
- **Resolution Time**: ~4 hours

### Level 3 Support (Expert Support)
- **Priority**: HIGH
- **Handles**: System failures, critical bugs, security issues, database problems
- **Resolution Time**: ~8 hours

### Manager Support (Executive Support)
- **Priority**: CRITICAL
- **Handles**: System outages, major client issues, business-critical problems
- **Resolution Time**: Immediate attention

## Usage

### Basic Chain Setup

```typescript
import { Level1Support } from './level1-support';
import { Level2Support } from './level2-support';
import { Level3Support } from './level3-support';
import { ManagerSupport } from './manager-support';

// Create handlers
const level1 = new Level1Support();
const level2 = new Level2Support();
const level3 = new Level3Support();
const manager = new ManagerSupport();

// Build the chain
level1.setNext(level2).setNext(level3).setNext(manager);
```

### Processing Tickets

```typescript
import { SupportTicket, TicketPriority } from './support-interfaces';

// Create a ticket
const ticket: SupportTicket = {
  id: 'TKT-001',
  priority: TicketPriority.MEDIUM,
  description: 'API returning errors',
  customerName: 'John Doe',
};

// Process through the chain (starts at level1)
const response = level1.handle(ticket);
console.log(response);
```

### Different Priority Tickets

```typescript
// Low priority - handled by Level 1
const lowTicket: SupportTicket = {
  id: 'TKT-001',
  priority: TicketPriority.LOW,
  description: 'How to reset password?',
  customerName: 'User 1',
};

// Medium priority - handled by Level 2
const mediumTicket: SupportTicket = {
  id: 'TKT-002',
  priority: TicketPriority.MEDIUM,
  description: 'Integration not working',
  customerName: 'User 2',
};

// High priority - handled by Level 3
const highTicket: SupportTicket = {
  id: 'TKT-003',
  priority: TicketPriority.HIGH,
  description: 'Database connection failing',
  customerName: 'User 3',
};

// Critical priority - handled by Manager
const criticalTicket: SupportTicket = {
  id: 'TKT-004',
  priority: TicketPriority.CRITICAL,
  description: 'Complete system outage',
  customerName: 'User 4',
};

// All start from level1, but are routed to appropriate handler
level1.handle(lowTicket);
level1.handle(mediumTicket);
level1.handle(highTicket);
level1.handle(criticalTicket);
```

### Alternative Chain Configuration

```typescript
// Create a simplified chain that skips intermediate levels
const simpleLevel1 = new Level1Support();
const simpleManager = new ManagerSupport();

// Only two levels in this chain
simpleLevel1.setNext(simpleManager);

// Critical tickets go directly to manager
const urgentTicket: SupportTicket = {
  id: 'TKT-999',
  priority: TicketPriority.CRITICAL,
  description: 'Security breach',
  customerName: 'Security Team',
};

simpleLevel1.handle(urgentTicket);
```

### Processing Multiple Tickets

```typescript
const tickets: SupportTicket[] = [
  { id: 'TKT-101', priority: TicketPriority.LOW, ... },
  { id: 'TKT-102', priority: TicketPriority.MEDIUM, ... },
  { id: 'TKT-103', priority: TicketPriority.HIGH, ... },
];

tickets.forEach(ticket => {
  const response = level1.handle(ticket);
  console.log(response);
});
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/chain-of-responsibility/support-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/chain-of-responsibility/support-example.js
```

## Benefits of Chain of Responsibility Pattern

1. **Decoupling**: Sender doesn't need to know which handler will process the request
2. **Flexibility**: Handlers can be added, removed, or reordered at runtime
3. **Single Responsibility**: Each handler handles one type of request
4. **Open/Closed Principle**: Easy to add new handlers without modifying existing code
5. **Dynamic Chain**: Chain configuration can be changed at runtime
6. **Reduced Coupling**: Request sender and receivers are decoupled

## When to Use Chain of Responsibility Pattern

- When multiple objects can handle a request, but the handler isn't known in advance
- When you want to issue a request to one of several objects without specifying the receiver explicitly
- When the set of handlers should be specified dynamically
- When you want to decouple request sender from request receiver
- For event handling systems, middleware pipelines, validation chains

## Design Pattern

Chain of Responsibility is a behavioral design pattern that:
- Passes requests along a chain of handlers
- Each handler decides either to process the request or pass it to the next handler
- Decouples the sender from the receiver
- Allows multiple objects to handle the request

## Chain Flow

```
Request → Level 1 → Level 2 → Level 3 → Manager
           ↓         ↓         ↓         ↓
        [Handle]  [Handle]  [Handle]  [Handle]
           or        or        or        or
         [Pass]    [Pass]    [Pass]    [Pass]
```

Each handler:
1. Checks if it can handle the request
2. If yes: processes the request and returns
3. If no: passes to the next handler in the chain

## Comparison with Other Patterns

- **vs Command**: Chain of Responsibility passes request through chain, Command encapsulates request
- **vs Decorator**: Chain of Responsibility is for request handling, Decorator is for adding functionality
- **vs Strategy**: Chain of Responsibility selects handler dynamically, Strategy selects algorithm explicitly
- **vs Observer**: Chain of Responsibility has one-to-one relationship in chain, Observer has one-to-many

## Real-World Applications

- **Support Systems**: Routing support tickets to appropriate teams
- **Middleware**: HTTP request processing in web frameworks
- **Event Handling**: GUI event propagation (event bubbling)
- **Logging**: Different log levels handled by different loggers
- **Approval Workflows**: Request approvals through hierarchy
- **Exception Handling**: Exception propagation through handlers
- **Validation**: Data validation through multiple validators

## Ticket Priority Levels

```typescript
enum TicketPriority {
  LOW = 1,       // Basic questions, simple issues
  MEDIUM = 2,    // Technical issues, configuration problems
  HIGH = 3,      // System failures, critical bugs
  CRITICAL = 4,  // System outages, major incidents
}
```

## Handler Responsibilities

Each handler has specific responsibilities and cannot handle tickets outside its scope:
- Handlers are organized by priority level
- Each handler knows its capabilities
- Unknown requests are passed up the chain
- The chain ensures every ticket is handled appropriately

