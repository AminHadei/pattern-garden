import { GamingComputerBuilder } from './gaming-computer-builder';
import { OfficeComputerBuilder } from './office-computer-builder';
import { WorkstationComputerBuilder } from './workstation-computer-builder';
import { ComputerDirector } from './computer-director';

/**
 * Builder Pattern Example
 * 
 * This example demonstrates how to use the Builder pattern to construct
 * different types of computers (Gaming, Office, Workstation) with varying
 * configurations and complexity.
 * 
 * The Builder pattern separates the construction of a complex object from
 * its representation, allowing the same construction process to create
 * different representations.
 */

function displayComputer(title: string, computer: any): void {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
  console.log(computer.getSpecifications());
  console.log('='.repeat(60));
}

function main(): void {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║              Computer Builder Pattern Example              ║');
  console.log('║        Building Gaming, Office, and Workstation PCs        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  // Example 1: Building a Gaming Computer using Director
  console.log('\n📦 Example 1: Building a Gaming Computer (Using Director)');
  const gamingBuilder = new GamingComputerBuilder();
  const director = new ComputerDirector(gamingBuilder);
  const gamingPC = director.buildCompleteComputer();
  displayComputer('🎮 Gaming Computer', gamingPC);

  // Example 2: Building an Office Computer using Director
  console.log('\n\n📦 Example 2: Building an Office Computer (Using Director)');
  const officeBuilder = new OfficeComputerBuilder();
  director.setBuilder(officeBuilder);
  const officePC = director.buildCompleteComputer();
  displayComputer('💼 Office Computer', officePC);

  // Example 3: Building a Workstation Computer using Director
  console.log('\n\n📦 Example 3: Building a Workstation Computer (Using Director)');
  const workstationBuilder = new WorkstationComputerBuilder();
  director.setBuilder(workstationBuilder);
  const workstationPC = director.buildCompleteComputer();
  displayComputer('🖥️  Workstation Computer', workstationPC);

  // Example 4: Building a Computer without Director (Fluent Interface)
  console.log('\n\n📦 Example 4: Building a Custom Gaming PC (Fluent Interface)');
  const customGamingBuilder = new GamingComputerBuilder();
  const customGamingPC = customGamingBuilder
    .buildCPU()
    .buildGPU()
    .buildRAM()
    .buildStorage()
    .buildMotherboard()
    .buildPowerSupply()
    .buildCooling()
    .buildCase()
    .getComputer();
  displayComputer('🎮 Custom Gaming Computer', customGamingPC);

  // Example 5: Building a Minimal Office Computer
  console.log('\n\n📦 Example 5: Building a Minimal Office Computer');
  const minimalOfficeBuilder = new OfficeComputerBuilder();
  director.setBuilder(minimalOfficeBuilder);
  const minimalOfficePC = director.buildMinimalComputer();
  displayComputer('💼 Minimal Office Computer', minimalOfficePC);

  // Example 6: Building Multiple Computers with Same Builder
  console.log('\n\n📦 Example 6: Building Multiple Office Computers');
  const reusableBuilder = new OfficeComputerBuilder();
  const officePC1 = reusableBuilder
    .buildCPU()
    .buildGPU()
    .buildRAM()
    .buildStorage()
    .buildMotherboard()
    .buildPowerSupply()
    .buildCooling()
    .buildCase()
    .getComputer();

  const officePC2 = reusableBuilder
    .buildCPU()
    .buildGPU()
    .buildRAM()
    .buildStorage()
    .buildMotherboard()
    .buildPowerSupply()
    .buildCooling()
    .buildCase()
    .getComputer();

  console.log('\n✅ Built 2 identical office computers using the same builder instance');

  // Summary
  console.log('\n\n╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Builder Pattern:                          ║');
  console.log('║    1. Step-by-step construction of complex objects         ║');
  console.log('║    2. Reusable building process for different products     ║');
  console.log('║    3. Isolates complex construction code                   ║');
  console.log('║    4. Allows different representations of the same object  ║');
  console.log('║    5. Fluent interface for readable code                   ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
main();

