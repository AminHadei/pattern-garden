# Command Pattern - Remote Control

This project provides a complete example of the Command pattern for a remote control system that can control various devices and support undo operations.

## Overview

The Command pattern encapsulates requests as objects, allowing you to parameterize clients with different requests, queue requests, log them, and support undo operations. It decouples the object that invokes the operation from the one that performs it.

## Components

### 1. Command Interface
Defines the interface for all command objects with `execute()`, `undo()`, and `getDescription()` methods.

### 2. Concrete Commands
- **LightOnCommand**: Turns a light on
- **LightOffCommand**: Turns a light off
- **LightBrightnessCommand**: Sets light brightness
- **StereoOnCommand**: Turns stereo on with CD and volume
- **StereoOffCommand**: Turns stereo off

### 3. Receivers
- **Light**: The device that receives light commands
- **Stereo**: The device that receives stereo commands

### 4. Invoker
- **RemoteControl**: The remote control that holds and executes commands

### 5. Macro Command
- **MacroCommand**: Executes multiple commands in sequence

## File Structure

```
command/
├── command-interfaces.ts          # Command interface
├── light.ts                       # Light receiver
├── light-on-command.ts            # Light on command
├── light-off-command.ts           # Light off command
├── light-brightness-command.ts    # Light brightness command
├── stereo.ts                      # Stereo receiver
├── stereo-on-command.ts           # Stereo on command
├── stereo-off-command.ts          # Stereo off command
├── macro-command.ts               # Macro command implementation
├── remote-control.ts              # Remote control invoker
├── command-example.ts             # Command pattern usage example
└── README.md                      # This file
```

## Usage

### Basic Command Execution

```typescript
import { RemoteControl } from './remote-control';
import { Light } from './light';
import { LightOnCommand } from './light-on-command';
import { LightOffCommand } from './light-off-command';

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(0, lightOn, lightOff);

remote.pressOnButton(0);  // Turn light on
remote.pressOffButton(0); // Turn light off
```

### Undo Functionality

```typescript
remote.pressOnButton(0);
remote.pressUndoButton(); // Undo the last command
```

### Macro Commands

```typescript
import { MacroCommand } from './macro-command';

const partyMode = new MacroCommand([
  lightOn,
  stereoOn,
  // ... more commands
]);

remote.setCommand(1, partyMode, partyModeOff);
remote.pressOnButton(1); // Execute all commands
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/command/command-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/command/command-example.js
```

## Benefits of Command Pattern

1. **Encapsulates Requests**: Requests are encapsulated as objects
2. **Undo/Redo Support**: Easy to implement undo and redo operations
3. **Queuing and Logging**: Commands can be queued, logged, and scheduled
4. **Decoupling**: Invoker doesn't need to know about receiver details
5. **Macro Commands**: Can compose commands into more complex operations
6. **First-Class Objects**: Commands can be stored, passed, and manipulated

## Design Pattern

Command is a behavioral design pattern that:
- Encapsulates a request as an object
- Allows parameterization of clients with different requests
- Supports undo operations
- Supports queuing and logging requests
- Decouples the invoker from the receiver

## Use Cases

This pattern is useful in the following scenarios:
- Remote control systems
- Undo/redo functionality
- Transaction systems
- Queuing and scheduling operations
- Logging and auditing systems
- Macro recording and playback
- Menu systems in GUI applications
