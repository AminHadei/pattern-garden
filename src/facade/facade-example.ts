import { Amplifier } from './amplifier';
import { DVDPlayer } from './dvd-player';
import { Projector } from './projector';
import { TheaterLights } from './theater-lights';
import { Screen } from './screen';
import { PopcornPopper } from './popcorn-popper';
import { HomeTheaterFacade } from './home-theater-facade';

/**
 * Facade Pattern Example - Home Theater System
 * 
 * This example demonstrates the Facade pattern for a home theater
 * system that simplifies the complex interactions between multiple
 * components.
 * 
 * The Facade pattern:
 * - Provides a simplified interface to a complex subsystem
 * - Hides the complexity of the subsystem
 * - Decouples client code from subsystem classes
 * - Makes the subsystem easier to use
 */

function demonstrateFacade(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║            Facade Pattern - Home Theater System           ║');
  console.log('║          Simplify Complex Subsystem Interactions          ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Create subsystem components
  const amplifier = new Amplifier();
  const dvdPlayer = new DVDPlayer();
  const projector = new Projector();
  const lights = new TheaterLights();
  const screen = new Screen();
  const popper = new PopcornPopper();

  // Create facade
  const homeTheater = new HomeTheaterFacade(
    amplifier,
    dvdPlayer,
    projector,
    lights,
    screen,
    popper
  );

  // Example 1: Watch a movie using facade
  console.log('📌 Example 1: Watch a Movie (Using Facade)');
  console.log('─'.repeat(60));

  homeTheater.watchMovie('Inception');

  // Example 2: End movie using facade
  console.log('📌 Example 2: End Movie (Using Facade)');
  console.log('─'.repeat(60));

  homeTheater.endMovie();

  // Example 3: Listen to radio using facade
  console.log('📌 Example 3: Listen to Radio (Using Facade)');
  console.log('─'.repeat(60));

  homeTheater.listenToRadio(95.5);

  homeTheater.endRadio();

  // Example 4: Without facade (complex)
  console.log('📌 Example 4: Without Facade (Complex)');
  console.log('─'.repeat(60));

  console.log('To watch a movie without facade, you would need to:');
  console.log('  1. Turn on popcorn popper');
  console.log('  2. Pop popcorn');
  console.log('  3. Dim lights to 10%');
  console.log('  4. Lower screen');
  console.log('  5. Turn on projector');
  console.log('  6. Set projector to wide screen mode');
  console.log('  7. Turn on amplifier');
  console.log('  8. Set amplifier to surround sound');
  console.log('  9. Set amplifier volume to 50%');
  console.log('  10. Turn on DVD player');
  console.log('  11. Play movie');
  console.log();
  console.log('With facade, it\'s just one method call!\n');

  // Example 5: Facade benefits
  console.log('📌 Example 5: Facade Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Key advantages:');
  console.log('  1. Simplified interface - one method instead of many');
  console.log('  2. Hides complexity - client doesn\'t need to know details');
  console.log('  3. Decouples client from subsystem');
  console.log('  4. Easier to use - reduces learning curve');
  console.log('  5. Can still access subsystems directly if needed');
  console.log('  6. Makes code more maintainable');
  console.log();

  // Example 6: Multiple operations
  console.log('📌 Example 6: Multiple Operations');
  console.log('─'.repeat(60));

  homeTheater.watchMovie('The Matrix');
  console.log('... watching movie ...\n');
  homeTheater.endMovie();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Facade Pattern:                           ║');
  console.log('║    1. Provides simplified interface to complex subsystem   ║');
  console.log('║    2. Hides subsystem complexity from clients              ║');
  console.log('║    3. Decouples client code from subsystem classes         ║');
  console.log('║    4. Makes subsystem easier to use                        ║');
  console.log('║    5. Reduces dependencies on subsystem                    ║');
  console.log('║    6. Can still access subsystems directly if needed       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateFacade();
