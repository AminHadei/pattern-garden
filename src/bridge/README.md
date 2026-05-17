# Bridge Pattern - Device Remote Control

This project provides a complete example of the Bridge pattern for a remote control system that can control different devices (TV, Radio) using the same remote control interface.

## Overview

The Bridge pattern separates abstraction from implementation, allowing both to vary independently. It decouples the abstraction from implementation details and enables runtime binding of implementation.

## Components

### 1. Device Interface (Implementation)
Defines the interface for device implementations with methods for power, volume, and channel control.

### 2. Concrete Implementations
- **TV**: A concrete device implementation for a television
- **Radio**: A concrete device implementation for a radio

### 3. Remote Control (Abstraction)
- **RemoteControl**: The basic abstraction that defines the high-level control interface
- **AdvancedRemoteControl**: A refined abstraction that extends the basic remote with additional features

## File Structure

```
bridge/
├── device-interfaces.ts        # Device interface (implementation)
├── tv.ts                       # TV implementation
├── radio.ts                    # Radio implementation
├── remote-control.ts           # Basic remote control (abstraction)
├── advanced-remote-control.ts  # Advanced remote control (refined abstraction)
├── bridge-example.ts           # Bridge pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Remote Control

```typescript
import { TV } from './tv';
import { RemoteControl } from './remote-control';

const tv = new TV();
const remote = new RemoteControl(tv);

remote.togglePower();
remote.volumeUp();
remote.channelUp();
```

### Advanced Remote Control

```typescript
import { Radio } from './radio';
import { AdvancedRemoteControl } from './advanced-remote-control';

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);

advancedRemote.togglePower();
advancedRemote.setVolume(50);
advancedRemote.mute();
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/bridge/bridge-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/bridge/bridge-example.js
```

## Benefits of Bridge Pattern

1. **Separation of Concerns**: Abstraction and implementation are separated
2. **Independent Variation**: Both can vary independently
3. **Decoupling**: Abstraction doesn't depend on implementation details
4. **Runtime Binding**: Implementation can be selected at runtime
5. **Hides Implementation**: Client doesn't need to know implementation details
6. **Open/Closed Principle**: Open for extension, closed for modification

## Design Pattern

Bridge is a structural design pattern that:
- Separates abstraction from implementation
- Allows both to vary independently
- Decouples the abstraction from implementation details
- Enables runtime binding of implementation

## Use Cases

This pattern is useful in the following scenarios:
- Remote control systems
- GUI frameworks (abstraction: window, implementation: OS-specific)
- Database drivers (abstraction: SQL, implementation: database-specific)
- Device drivers
- When you want to avoid permanent binding between abstraction and implementation
- When both abstraction and implementation should be extensible
