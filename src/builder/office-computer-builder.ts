import { BaseComputerBuilder } from './computer-builder';

/**
 * Office Computer Builder
 * Specialized builder for budget-friendly office computers
 */
export class OfficeComputerBuilder extends BaseComputerBuilder {
  buildCPU(): OfficeComputerBuilder {
    this.computer.setCPU('Intel Core i5-13400 (10 cores, 4.6 GHz)');
    return this;
  }

  buildGPU(): OfficeComputerBuilder {
    this.computer.setGPU('Integrated Intel UHD Graphics 730');
    return this;
  }

  buildRAM(): OfficeComputerBuilder {
    this.computer.setRAM('16GB DDR4-3200MHz (2x8GB)');
    return this;
  }

  buildStorage(): OfficeComputerBuilder {
    this.computer.setStorage('512GB SATA SSD');
    return this;
  }

  buildMotherboard(): OfficeComputerBuilder {
    this.computer.setMotherboard('ASUS Prime B760M-A');
    return this;
  }

  buildPowerSupply(): OfficeComputerBuilder {
    this.computer.setPowerSupply('450W 80+ Bronze PSU');
    return this;
  }

  buildCooling(): OfficeComputerBuilder {
    this.computer.setCooling('Stock CPU Cooler');
    return this;
  }

  buildCase(): OfficeComputerBuilder {
    this.computer.setCase('Compact Micro-ATX Case');
    return this;
  }
}

