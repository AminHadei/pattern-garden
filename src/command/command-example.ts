import { RemoteControl } from './remote-control';
import { Light } from './light';
import { Stereo } from './stereo';
import { LightOnCommand } from './light-on-command';
import { LightOffCommand } from './light-off-command';
import { LightBrightnessCommand } from './light-brightness-command';
import { StereoOnCommand } from './stereo-on-command';
import { StereoOffCommand } from './stereo-off-command';
import { MacroCommand } from './macro-command';

/**
 * Command Pattern Example - Remote Control
 * 
 * This example demonstrates the Command pattern for a remote control
 * system that can control various devices and support undo operations.
 * 
 * The Command pattern:
 * - Encapsulates requests as objects
 * - Allows parameterization of clients with different requests
 * - Supports undo/redo operations
 * - Supports queuing and logging requests
 * - Decouples the invoker from the receiver
 */

function demonstrateCommand(): void {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║         Command Pattern - Remote Control Example         ║');
  console.log('║            Encapsulate Requests, Support Undo            ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Create devices (receivers)
  const livingRoomLight = new Light();
  const kitchenLight = new Light();
  const stereo = new Stereo();

  // Create commands
  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLightOff = new LightOffCommand(kitchenLight);
  const stereoOn = new StereoOnCommand(stereo, 'Jazz Collection', 50);
  const stereoOff = new StereoOffCommand(stereo);

  // Create remote control (invoker)
  const remote = new RemoteControl(7);

  // Example 1: Basic command execution
  console.log('📌 Example 1: Basic Command Execution');
  console.log('─'.repeat(60));

  remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remote.setCommand(1, kitchenLightOn, kitchenLightOff);
  remote.setCommand(2, stereoOn, stereoOff);

  remote.pressOnButton(0);
  console.log();
  remote.pressOnButton(1);
  console.log();
  remote.pressOnButton(2);
  console.log();

  // Example 2: Undo functionality
  console.log('📌 Example 2: Undo Functionality');
  console.log('─'.repeat(60));

  remote.pressOffButton(0);
  console.log();
  remote.pressUndoButton();
  console.log();

  // Example 3: Command history
  console.log('📌 Example 3: Command History');
  console.log('─'.repeat(60));

  console.log('Command history:');
  remote.getHistory().forEach((cmd, index) => {
    console.log(`  ${index + 1}. ${cmd}`);
  });
  console.log();

  // Example 4: Macro commands
  console.log('📌 Example 4: Macro Commands');
  console.log('─'.repeat(60));

  const partyModeOn = new MacroCommand([
    livingRoomLightOn,
    kitchenLightOn,
    new LightBrightnessCommand(livingRoomLight, 80),
    stereoOn,
  ]);

  const partyModeOff = new MacroCommand([
    livingRoomLightOff,
    kitchenLightOff,
    stereoOff,
  ]);

  remote.setCommand(3, partyModeOn, partyModeOff);
  remote.pressOnButton(3);
  console.log();

  // Example 5: Undo macro command
  console.log('📌 Example 5: Undo Macro Command');
  console.log('─'.repeat(60));

  remote.pressUndoButton();
  console.log();

  // Example 6: Multiple operations and undo chain
  console.log('📌 Example 6: Multiple Operations and Undo Chain');
  console.log('─'.repeat(60));

  const brightnessCommand = new LightBrightnessCommand(livingRoomLight, 100);
  remote.setCommand(4, brightnessCommand, new LightBrightnessCommand(livingRoomLight, 50));

  remote.pressOnButton(4);
  console.log();
  remote.pressOnButton(0);
  console.log();
  remote.pressOnButton(1);
  console.log();

  console.log('Undoing last 3 commands:');
  remote.pressUndoButton();
  console.log();
  remote.pressUndoButton();
  console.log();
  remote.pressUndoButton();
  console.log();

  // Example 7: Command as first-class objects
  console.log('📌 Example 7: Commands as First-Class Objects');
  console.log('─'.repeat(60));

  // Commands can be stored, queued, logged, etc.
  const commandQueue: Array<{ command: any; description: string }> = [
    { command: livingRoomLightOn, description: 'Turn on living room light' },
    { command: stereoOn, description: 'Turn on stereo' },
    { command: kitchenLightOn, description: 'Turn on kitchen light' },
  ];

  console.log('Executing queued commands:');
  commandQueue.forEach((item, index) => {
    console.log(`\n${index + 1}. ${item.description}`);
    item.command.execute();
  });
  console.log();

  // Summary
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Command Pattern:                         ║');
  console.log('║    1. Encapsulates requests as objects                    ║');
  console.log('║    2. Supports undo/redo operations                       ║');
  console.log('║    3. Supports queuing and logging requests               ║');
  console.log('║    4. Decouples invoker from receiver                     ║');
  console.log('║    5. Allows macro commands (command composition)         ║');
  console.log('║    6. Commands are first-class objects                    ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateCommand();
