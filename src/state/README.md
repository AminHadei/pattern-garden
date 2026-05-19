# State Pattern - Media Player

This project provides a complete example of the State pattern for a media player that can be in different states (Stopped, Playing, Paused) with state-specific behavior.

## Overview

The State pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. It encapsulates state-specific behavior in separate classes and makes state transitions explicit.

## Components

### 1. State Interface
Defines the interface for all state classes with methods: `play()`, `pause()`, `stop()`, and `getName()`.

### 2. Concrete States
- **StoppedState**: When the player is stopped (can only transition to Playing)
- **PlayingState**: When the player is playing (can transition to Paused or Stopped)
- **PausedState**: When the player is paused (can transition to Playing or Stopped)

### 3. Context
- **MediaPlayer**: The context class that maintains the current state and delegates behavior to state objects

## File Structure

```
state/
├── state-interfaces.ts         # State interface
├── media-player.ts             # Media player context
├── stopped-state.ts            # Stopped state implementation
├── playing-state.ts            # Playing state implementation
├── paused-state.ts             # Paused state implementation
├── state-example.ts            # State pattern usage example
└── README.md                   # This file
```

## Usage

### Basic State Transitions

```typescript
import { MediaPlayer } from './media-player';

const player = new MediaPlayer();
player.setTrack('My Song - Artist');

player.play();   // Transition to Playing state
player.pause();  // Transition to Paused state
player.play();   // Transition back to Playing state
player.stop();   // Transition to Stopped state
```

### State Information

```typescript
console.log(player.getState().getName()); // Get current state name
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/state/state-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/state/state-example.js
```

## Benefits of State Pattern

1. **Encapsulates State Behavior**: Each state encapsulates its own behavior
2. **Eliminates Conditionals**: No need for if/switch statements based on state
3. **Explicit Transitions**: State transitions are clear and explicit
4. **Easy to Extend**: Adding new states is straightforward
5. **Single Responsibility**: Each state class has one responsibility
6. **Open/Closed Principle**: Open for extension (new states), closed for modification

## Design Pattern

State is a behavioral design pattern that:
- Allows an object to alter its behavior when its internal state changes
- Encapsulates state-specific behavior in separate classes
- Makes state transitions explicit
- Eliminates conditional statements based on state

## Use Cases

This pattern is useful in the following scenarios:
- Media players (play, pause, stop)
- Game character states (idle, running, jumping)
- Order processing (pending, processing, shipped, delivered)
- Document workflow (draft, review, approved, published)
- Network connection states (disconnected, connecting, connected)
- UI component states (enabled, disabled, loading)
