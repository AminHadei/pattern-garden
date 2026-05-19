import { MediaPlayer } from './media-player';

/**
 * State Pattern Example - Media Player
 * 
 * This example demonstrates the State pattern for a media player
 * that can be in different states (Stopped, Playing, Paused).
 * 
 * The State pattern:
 * - Allows an object to alter its behavior when its internal state changes
 * - Encapsulates state-specific behavior in separate classes
 * - Makes state transitions explicit
 * - Eliminates conditional statements based on state
 */

function demonstrateState(): void {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║           State Pattern - Media Player Example           ║');
  console.log('║            Behavior Changes with State Changes           ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  const player = new MediaPlayer();

  // Example 1: Basic state transitions
  console.log('📌 Example 1: Basic State Transitions');
  console.log('─'.repeat(60));

  player.setTrack('Song 1 - Artist Name');
  console.log(`Current state: ${player.getState().getName()}\n`);

  player.play();
  console.log(`Current state: ${player.getState().getName()}\n`);

  player.pause();
  console.log(`Current state: ${player.getState().getName()}\n`);

  player.play();
  console.log(`Current state: ${player.getState().getName()}\n`);

  player.stop();
  console.log(`Current state: ${player.getState().getName()}\n`);

  // Example 2: Invalid state transitions
  console.log('📌 Example 2: Invalid State Transitions');
  console.log('─'.repeat(60));

  console.log(`Current state: ${player.getState().getName()}`);
  player.pause(); // Cannot pause when stopped
  player.stop(); // Already stopped
  console.log();

  // Example 3: State transitions with different tracks
  console.log('📌 Example 3: State Transitions with Different Tracks');
  console.log('─'.repeat(60));

  player.setTrack('Song 2 - Another Artist');
  player.play();
  console.log(`Current state: ${player.getState().getName()}\n`);

  player.setTrack('Song 3 - Third Artist');
  player.pause();
  console.log(`Current track: ${player.getTrack()}`);
  console.log(`Current state: ${player.getState().getName()}\n`);

  player.play();
  console.log(`Current state: ${player.getState().getName()}\n`);

  // Example 4: Complete playback cycle
  console.log('📌 Example 4: Complete Playback Cycle');
  console.log('─'.repeat(60));

  const player2 = new MediaPlayer();
  player2.setTrack('Complete Cycle - Demo Track');

  console.log('Starting playback cycle:\n');
  console.log(`Initial state: ${player2.getState().getName()}`);

  player2.play();
  console.log(`State after play: ${player2.getState().getName()}\n`);

  player2.pause();
  console.log(`State after pause: ${player2.getState().getName()}\n`);

  player2.play();
  console.log(`State after resume: ${player2.getState().getName()}\n`);

  player2.stop();
  console.log(`Final state: ${player2.getState().getName()}\n`);

  // Example 5: State behavior demonstration
  console.log('📌 Example 5: State Behavior Demonstration');
  console.log('─'.repeat(60));

  const player3 = new MediaPlayer();
  player3.setTrack('Behavior Demo - Test Track');

  // Try to play without track
  console.log('Attempting to play without track:');
  player3.play();
  console.log();

  // Set track and play
  player3.setTrack('Behavior Demo - Test Track');
  player3.play();
  console.log();

  // Try invalid operations
  console.log('Attempting invalid operations:');
  player3.play(); // Already playing
  console.log();

  // Example 6: State pattern benefits
  console.log('📌 Example 6: State Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('The State pattern eliminates conditional statements:');
  console.log('  ❌ Without State: if (state === "playing") { ... }');
  console.log('  ✅ With State: state.play(player)');
  console.log();
  console.log('Each state encapsulates its own behavior:');
  console.log('  • StoppedState: Can only transition to Playing');
  console.log('  • PlayingState: Can transition to Paused or Stopped');
  console.log('  • PausedState: Can transition to Playing or Stopped');
  console.log();

  // Summary
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of State Pattern:                           ║');
  console.log('║    1. Encapsulates state-specific behavior                ║');
  console.log('║    2. Eliminates conditional state checks                 ║');
  console.log('║    3. Makes state transitions explicit                    ║');
  console.log('║    4. Easy to add new states                              ║');
  console.log('║    5. Single Responsibility Principle                     ║');
  console.log('║    6. Open/Closed Principle - open for extension          ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateState();
