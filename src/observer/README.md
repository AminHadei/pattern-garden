# Observer Pattern - News Notification System

This project provides a complete example of the Observer pattern for a news notification system where multiple subscribers (observers) are automatically notified when news is published.

## Purpose

The Observer pattern demonstrates:
- **One-to-many dependency**: One subject (News Agency) notifies many observers (Subscribers)
- **Loose coupling**: Subject and observers are decoupled - they don't need to know each other's details
- **Dynamic subscription**: Observers can subscribe and unsubscribe at runtime
- **Event-driven architecture**: Changes in the subject trigger updates in observers

## File Structure

```
observer/
├── observer-interfaces.ts        # Observer and Subject interfaces
├── news-agency.ts                # News Agency (Subject) implementation
├── email-subscriber.ts           # Email subscriber (Observer) implementation
├── sms-subscriber.ts             # SMS subscriber (Observer) implementation
├── push-subscriber.ts            # Push notification subscriber (Observer) implementation
├── news-example.ts               # Observer pattern usage example
└── README.md                     # This file
```

## How It Works

1. **Subject (News Agency)**: Maintains a list of observers and notifies them when news is published
2. **Observers (Subscribers)**: Implement the Observer interface and receive updates when news is published
3. **Subscription**: Observers can attach/detach themselves from the subject
4. **Notification**: When news is published, all attached observers are automatically notified

## Usage

### Basic Usage

```typescript
import { NewsAgency } from './news-agency';
import { EmailSubscriber } from './email-subscriber';

// Create the subject
const newsAgency = new NewsAgency();

// Create observers
const emailSubscriber = new EmailSubscriber('John Doe', 'john@example.com');

// Subscribe observers
newsAgency.attach(emailSubscriber);

// Publish news - all subscribers are notified
newsAgency.publishNews(
  'Breaking News',
  'This is the news content',
  'General'
);
```

### Multiple Subscribers

```typescript
import { NewsAgency } from './news-agency';
import { EmailSubscriber } from './email-subscriber';
import { SMSSubscriber } from './sms-subscriber';
import { PushSubscriber } from './push-subscriber';

const newsAgency = new NewsAgency();

// Create different types of subscribers
const emailSub = new EmailSubscriber('John', 'john@example.com');
const smsSub = new SMSSubscriber('Jane', '+1234567890');
const pushSub = new PushSubscriber('device-123');

// Subscribe all
newsAgency.attach(emailSub);
newsAgency.attach(smsSub);
newsAgency.attach(pushSub);

// Publish news - all receive notifications
newsAgency.publishNews('Title', 'Content', 'Category');
```

### Unsubscribing

```typescript
// Unsubscribe an observer
newsAgency.detach(emailSub);

// Now only smsSub and pushSub will receive notifications
newsAgency.publishNews('Title', 'Content', 'Category');
```

### Dynamic Subscription

```typescript
// Subscribe during runtime
const newSubscriber = new EmailSubscriber('Bob', 'bob@example.com');
newsAgency.attach(newSubscriber);

// New subscriber will receive future notifications
newsAgency.publishNews('Title', 'Content', 'Category');
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/observer/news-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/observer/news-example.js
```

## Benefits of Observer Pattern

1. **Loose Coupling**: Subject and observers are decoupled - they don't depend on each other's concrete classes
2. **Dynamic Relationships**: Observers can be added or removed at runtime
3. **Broadcast Communication**: One subject can notify many observers efficiently
4. **Open/Closed Principle**: Easy to add new observer types without modifying existing code
5. **Separation of Concerns**: Subject focuses on state management, observers focus on reacting to changes
6. **Event-Driven Architecture**: Supports event-driven programming patterns

## When to Use Observer Pattern

- When changes to one object require updating multiple dependent objects
- When the number of dependent objects is unknown or changes dynamically
- When you want to decouple the subject from its observers
- For event handling systems, model-view architectures, publish-subscribe systems
- When you need a one-to-many dependency between objects

## Design Pattern

Observer is a behavioral design pattern that:
- Defines a one-to-many dependency between objects
- When one object (subject) changes state, all dependent objects (observers) are notified
- Allows observers to subscribe and unsubscribe dynamically
- Decouples the subject from its observers

## Components

### Subject (News Agency)
- Maintains a list of observers
- Provides methods to attach/detach observers
- Notifies all observers when state changes

### Observer (Subscribers)
- Defines an interface for receiving updates
- Concrete observers implement specific notification methods (Email, SMS, Push)

### Concrete Observers
- **EmailSubscriber**: Receives news via email
- **SMSSubscriber**: Receives news via SMS
- **PushSubscriber**: Receives news via push notifications

## Real-World Applications

- **Event Handling**: GUI frameworks, DOM events
- **Model-View-Controller (MVC)**: Views observe model changes
- **Publish-Subscribe Systems**: Message queues, event buses
- **Notification Systems**: User notifications, alerts
- **Data Binding**: Reactive programming, data synchronization

## Comparison with Other Patterns

- **vs Mediator**: Observer is one-to-many, Mediator is many-to-many
- **vs Strategy**: Observer is about notification, Strategy is about algorithm selection
- **vs Command**: Observer is reactive, Command is about encapsulating requests


