import { BaseComputerBuilder } from './computer-builder';

/**
 * Workstation Computer Builder
 * Specialized builder for professional workstations (video editing, 3D rendering, etc.)
 */
export class WorkstationComputerBuilder extends BaseComputerBuilder {
  buildCPU(): WorkstationComputerBuilder {
    this.computer.setCPU('AMD Ryzen Threadripper PRO 5975WX (32 cores, 4.5 GHz)');
    return this;
  }

  buildGPU(): WorkstationComputerBuilder {
    this.computer.setGPU('NVIDIA RTX A6000 (48GB VRAM) - Professional GPU');
    return this;
  }

  buildRAM(): WorkstationComputerBuilder {
    this.computer.setRAM('128GB DDR4-3200MHz ECC (8x16GB)');
    return this;
  }

  buildStorage(): WorkstationComputerBuilder {
    this.computer.setStorage('4TB NVMe SSD (Gen4) + 8TB HDD');
    return this;
  }

  buildMotherboard(): WorkstationComputerBuilder {
    this.computer.setMotherboard('ASUS Pro WS WRX80E-SAGE SE');
    return this;
  }

  buildPowerSupply(): WorkstationComputerBuilder {
    this.computer.setPowerSupply('1200W 80+ Platinum Modular PSU');
    return this;
  }

  buildCooling(): WorkstationComputerBuilder {
    this.computer.setCooling('Custom Loop Liquid Cooling System');
    return this;
  }

  buildCase(): WorkstationComputerBuilder {
    this.computer.setCase('Full Tower Professional Case with Sound Dampening');
    return this;
  }
}

