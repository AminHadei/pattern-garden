import { Computer } from './computer';

/**
 * Builder Interface
 * Defines the contract for building a computer
 */
export interface ComputerBuilder {
  buildCPU(): ComputerBuilder;
  buildGPU(): ComputerBuilder;
  buildRAM(): ComputerBuilder;
  buildStorage(): ComputerBuilder;
  buildMotherboard(): ComputerBuilder;
  buildPowerSupply(): ComputerBuilder;
  buildCooling(): ComputerBuilder;
  buildCase(): ComputerBuilder;
  getComputer(): Computer;
  reset(): ComputerBuilder;
}

/**
 * Abstract Base Builder
 * Provides common functionality for all builders
 */
export abstract class BaseComputerBuilder implements ComputerBuilder {
  protected computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  abstract buildCPU(): ComputerBuilder;
  abstract buildGPU(): ComputerBuilder;
  abstract buildRAM(): ComputerBuilder;
  abstract buildStorage(): ComputerBuilder;
  abstract buildMotherboard(): ComputerBuilder;
  abstract buildPowerSupply(): ComputerBuilder;
  abstract buildCooling(): ComputerBuilder;
  abstract buildCase(): ComputerBuilder;

  getComputer(): Computer {
    const result = this.computer;
    this.reset();
    return result;
  }

  reset(): ComputerBuilder {
    this.computer = new Computer();
    return this;
  }
}

