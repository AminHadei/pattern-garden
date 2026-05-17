import { TV } from './tv';
import { Radio } from './radio';
import { RemoteControl } from './remote-control';
import { AdvancedRemoteControl } from './advanced-remote-control';

/**
 * Bridge Pattern Example - Device Remote Control
 * 
 * This example demonstrates the Bridge pattern for a remote control
 * system that can control different devices (TV, Radio) using the
 * same remote control interface.
 * 
 * The Bridge pattern:
 * - Separates abstraction from implementation
 * - Allows both to vary independently
 * - Decouples the abstraction from implementation details
 * - Enables runtime binding of implementation
 */

function demonstrateBridge(): void {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║          Bridge Pattern - Device Remote Control          ║');
  console.log('║         Separate Abstraction from Implementation         ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Example 1: Basic remote control with TV
  console.log('📌 Example 1: Basic Remote Control with TV');
  console.log('─'.repeat(60));

  const tv = new TV();
  const tvRemote = new RemoteControl(tv);

  tvRemote.togglePower();
  tvRemote.volumeUp();
  tvRemote.volumeUp();
  tvRemote.channelUp();
  console.log(`Device info: ${tvRemote.getDeviceInfo()}\n`);

  // Example 2: Basic remote control with Radio
  console.log('📌 Example 2: Basic Remote Control with Radio');
  console.log('─'.repeat(60));

  const radio = new Radio();
  const radioRemote = new RemoteControl(radio);

  radioRemote.togglePower();
  radioRemote.volumeUp();
  radioRemote.channelUp();
  radioRemote.channelUp();
  console.log(`Device info: ${radioRemote.getDeviceInfo()}\n`);

  // Example 3: Advanced remote control
  console.log('📌 Example 3: Advanced Remote Control');
  console.log('─'.repeat(60));

  const tv2 = new TV();
  const advancedRemote = new AdvancedRemoteControl(tv2);

  advancedRemote.togglePower();
  advancedRemote.setVolume(50);
  advancedRemote.setChannel(5);
  advancedRemote.mute();
  console.log(`Status: ${advancedRemote.getStatus()}\n`);

  // Example 4: Same remote, different devices
  console.log('📌 Example 4: Same Remote Control Interface, Different Devices');
  console.log('─'.repeat(60));

  const devices = [new TV(), new Radio()];
  const remotes = devices.map((device) => new RemoteControl(device));

  remotes.forEach((remote, index) => {
    console.log(`\nControlling ${devices[index].constructor.name}:`);
    remote.togglePower();
    remote.volumeUp();
    remote.channelUp();
    console.log(`  ${remote.getDeviceInfo()}`);
  });
  console.log();

  // Example 5: Runtime device switching
  console.log('📌 Example 5: Runtime Device Switching');
  console.log('─'.repeat(60));

  const tv3 = new TV();
  const radio3 = new Radio();
  const universalRemote = new AdvancedRemoteControl(tv3);

  console.log('Controlling TV:');
  universalRemote.togglePower();
  universalRemote.setChannel(10);
  console.log(`  ${universalRemote.getStatus()}\n`);

  // Switch to radio (in real implementation, this would be done differently)
  // This demonstrates the flexibility of the Bridge pattern
  console.log('Switching to Radio (conceptual):');
  const radioRemote2 = new AdvancedRemoteControl(radio3);
  radioRemote2.togglePower();
  radioRemote2.setChannel(95.5);
  console.log(`  ${radioRemote2.getStatus()}\n`);

  // Example 6: Bridge pattern benefits
  console.log('📌 Example 6: Bridge Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Key advantages:');
  console.log('  1. Abstraction and implementation can vary independently');
  console.log('  2. New devices can be added without changing remote control');
  console.log('  3. New remote control features can be added without changing devices');
  console.log('  4. Runtime binding of implementation');
  console.log('  5. Hides implementation details from client');
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Bridge Pattern:                           ║');
  console.log('║    1. Separates abstraction from implementation            ║');
  console.log('║    2. Allows both to vary independently                    ║');
  console.log('║    3. Decouples abstraction from implementation details    ║');
  console.log('║    4. Enables runtime binding of implementation            ║');
  console.log('║    5. Hides implementation details from client             ║');
  console.log('║    6. Follows Open/Closed Principle                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateBridge();
