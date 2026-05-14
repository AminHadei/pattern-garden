/**
 * Computer Product Class
 * Represents a computer with various components
 */
export class Computer {
  private cpu: string = '';
  private gpu: string = '';
  private ram: string = '';
  private storage: string = '';
  private motherboard: string = '';
  private powerSupply: string = '';
  private cooling: string = '';
  private case: string = '';

  setCPU(cpu: string): void {
    this.cpu = cpu;
  }

  setGPU(gpu: string): void {
    this.gpu = gpu;
  }

  setRAM(ram: string): void {
    this.ram = ram;
  }

  setStorage(storage: string): void {
    this.storage = storage;
  }

  setMotherboard(motherboard: string): void {
    this.motherboard = motherboard;
  }

  setPowerSupply(powerSupply: string): void {
    this.powerSupply = powerSupply;
  }

  setCooling(cooling: string): void {
    this.cooling = cooling;
  }

  setCase(caseType: string): void {
    this.case = caseType;
  }

  getSpecifications(): string {
    const specs = [
      `CPU: ${this.cpu}`,
      `GPU: ${this.gpu}`,
      `RAM: ${this.ram}`,
      `Storage: ${this.storage}`,
      `Motherboard: ${this.motherboard}`,
      `Power Supply: ${this.powerSupply}`,
      `Cooling: ${this.cooling}`,
      `Case: ${this.case}`,
    ];

    return specs.join('\n');
  }

  getSummary(): string {
    return `Computer with ${this.cpu}, ${this.ram}, ${this.storage}`;
  }
}

