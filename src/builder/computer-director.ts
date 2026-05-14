import { ComputerBuilder } from './computer-builder';
import { Computer } from './computer';

/**
 * Director Class
 * Orchestrates the building process using a builder
 * Provides predefined configurations for common computer types
 */
export class ComputerDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  setBuilder(builder: ComputerBuilder): void {
    this.builder = builder;
  }

  /**
   * Builds a complete computer using the current builder
   */
  buildCompleteComputer(): Computer {
    return this.builder
      .buildCPU()
      .buildGPU()
      .buildRAM()
      .buildStorage()
      .buildMotherboard()
      .buildPowerSupply()
      .buildCooling()
      .buildCase()
      .getComputer();
  }

  /**
   * Builds a minimal computer (for testing or budget builds)
   */
  buildMinimalComputer(): Computer {
    return this.builder
      .buildCPU()
      .buildRAM()
      .buildStorage()
      .buildMotherboard()
      .buildPowerSupply()
      .buildCase()
      .getComputer();
  }

  /**
   * Builds a custom computer with user-specified components
   * Allows step-by-step building
   */
  buildCustomComputer(
    includeGPU: boolean = true,
    includeAdvancedCooling: boolean = false
  ): Computer {
    this.builder
      .buildCPU()
      .buildRAM()
      .buildStorage()
      .buildMotherboard()
      .buildPowerSupply();

    if (includeGPU) {
      this.builder.buildGPU();
    }

    if (includeAdvancedCooling) {
      this.builder.buildCooling();
    } else {
      // Use default cooling
      this.builder.buildCooling();
    }

    this.builder.buildCase();

    return this.builder.getComputer();
  }
}

