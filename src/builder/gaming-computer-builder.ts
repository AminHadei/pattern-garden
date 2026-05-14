import { BaseComputerBuilder } from './computer-builder';

/**
 * Gaming Computer Builder
 * Specialized builder for high-performance gaming computers
 */
export class GamingComputerBuilder extends BaseComputerBuilder {
  buildCPU(): GamingComputerBuilder {
    this.computer.setCPU('Intel Core i9-13900K (24 cores, 5.8 GHz)');
    return this;
  }

  buildGPU(): GamingComputerBuilder {
    this.computer.setGPU('NVIDIA RTX 4090 (24GB VRAM)');
    return this;
  }

  buildRAM(): GamingComputerBuilder {
    this.computer.setRAM('32GB DDR5-6000MHz (2x16GB)');
    return this;
  }

  buildStorage(): GamingComputerBuilder {
    this.computer.setStorage('2TB NVMe SSD (Gen4)');
    return this;
  }

  buildMotherboard(): GamingComputerBuilder {
    this.computer.setMotherboard('ASUS ROG Strix Z790-E Gaming');
    return this;
  }

  buildPowerSupply(): GamingComputerBuilder {
    this.computer.setPowerSupply('1000W 80+ Gold Modular PSU');
    return this;
  }

  buildCooling(): GamingComputerBuilder {
    this.computer.setCooling('360mm AIO Liquid Cooler');
    return this;
  }

  buildCase(): GamingComputerBuilder {
    this.computer.setCase('Full Tower RGB Gaming Case with Tempered Glass');
    return this;
  }
}

