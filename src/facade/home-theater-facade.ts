import { Amplifier } from './amplifier';
import { DVDPlayer } from './dvd-player';
import { Projector } from './projector';
import { TheaterLights } from './theater-lights';
import { Screen } from './screen';
import { PopcornPopper } from './popcorn-popper';

/**
 * Home Theater Facade
 * 
 * Provides a simplified interface to a complex subsystem.
 * This facade hides the complexity of coordinating multiple
 * home theater components.
 */

export class HomeTheaterFacade {
  private amplifier: Amplifier;
  private dvdPlayer: DVDPlayer;
  private projector: Projector;
  private lights: TheaterLights;
  private screen: Screen;
  private popper: PopcornPopper;

  constructor(
    amplifier: Amplifier,
    dvdPlayer: DVDPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.amplifier = amplifier;
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  /**
   * Watch a movie - coordinates all components
   */
  watchMovie(movie: string): void {
    console.log('\n🎬 Getting ready to watch a movie...\n');
    
    this.popper.on();
    this.popper.pop();
    
    this.lights.dim(10);
    
    this.screen.down();
    
    this.projector.on();
    this.projector.wideScreenMode();
    
    this.amplifier.on();
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(50);
    
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
    
    console.log('\n✨ Movie theater is ready!\n');
  }

  /**
   * End movie - turns off all components
   */
  endMovie(): void {
    console.log('\n🛑 Shutting down movie theater...\n');
    
    this.popper.off();
    
    this.lights.on();
    
    this.screen.up();
    
    this.projector.off();
    
    this.amplifier.off();
    
    this.dvdPlayer.stop();
    this.dvdPlayer.eject();
    this.dvdPlayer.off();
    
    console.log('\n✅ Movie theater is shut down.\n');
  }

  /**
   * Listen to radio
   */
  listenToRadio(frequency: number): void {
    console.log('\n📻 Listening to radio...\n');
    
    this.amplifier.on();
    this.amplifier.setVolume(30);
    
    this.lights.on();
    
    console.log(`Tuned to ${frequency} MHz\n`);
  }

  /**
   * Turn off radio
   */
  endRadio(): void {
    console.log('\n📻 Turning off radio...\n');
    
    this.amplifier.off();
    
    console.log('Radio is off.\n');
  }
}
