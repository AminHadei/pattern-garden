# Facade Pattern - Home Theater System

This project provides a complete example of the Facade pattern for a home theater system that simplifies the complex interactions between multiple components.

## Overview

The Facade pattern provides a simplified interface to a complex subsystem. It hides the complexity of the subsystem and makes it easier to use by providing a single, unified interface.

## Components

### 1. Subsystem Components
- **Amplifier**: Controls the amplifier
- **DVDPlayer**: Controls the DVD player
- **Projector**: Controls the projector
- **TheaterLights**: Controls the theater lights
- **Screen**: Controls the screen
- **PopcornPopper**: Controls the popcorn popper

### 2. Facade
- **HomeTheaterFacade**: Provides a simplified interface to coordinate all components

## File Structure

```
facade/
├── amplifier.ts                # Amplifier subsystem
├── dvd-player.ts               # DVD player subsystem
├── projector.ts                 # Projector subsystem
├── theater-lights.ts           # Theater lights subsystem
├── screen.ts                   # Screen subsystem
├── popcorn-popper.ts           # Popcorn popper subsystem
├── home-theater-facade.ts      # Home theater facade
├── facade-example.ts           # Facade pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Usage

```typescript
import { HomeTheaterFacade } from './home-theater-facade';
import { Amplifier } from './amplifier';
import { DVDPlayer } from './dvd-player';
// ... import other components

const homeTheater = new HomeTheaterFacade(
  new Amplifier(),
  new DVDPlayer(),
  new Projector(),
  new TheaterLights(),
  new Screen(),
  new PopcornPopper()
);

// Simple interface - one method call
homeTheater.watchMovie('Inception');
homeTheater.endMovie();
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/facade/facade-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/facade/facade-example.js
```

## Benefits of Facade Pattern

1. **Simplified Interface**: Provides a single, simple interface to a complex subsystem
2. **Hides Complexity**: Client doesn't need to know subsystem details
3. **Decoupling**: Decouples client code from subsystem classes
4. **Easier to Use**: Reduces learning curve and makes code more readable
5. **Flexibility**: Can still access subsystems directly if needed
6. **Maintainability**: Makes code more maintainable and easier to change

## Design Pattern

Facade is a structural design pattern that:
- Provides a simplified interface to a complex subsystem
- Hides the complexity of the subsystem
- Decouples client code from subsystem classes
- Makes the subsystem easier to use

## Use Cases

This pattern is useful in the following scenarios:
- Home theater systems
- API wrappers
- Library interfaces
- Framework design
- When you want to simplify a complex subsystem
- When you want to provide a higher-level interface
- When you want to decouple clients from subsystem classes
