import { DataProcessor } from './data-processor';

/**
 * JSON Processor
 * 
 * A concrete implementation that processes JSON data.
 * Implements the abstract process method.
 */

export class JSONProcessor extends DataProcessor {
  protected process(data: string): string {
    console.log('Processing JSON data...');
    try {
      const json = JSON.parse(data);
      // Example: Transform JSON (e.g., add timestamp)
      json.processedAt = new Date().toISOString();
      return JSON.stringify(json, null, 2);
    } catch (error) {
      throw new Error('Invalid JSON format');
    }
  }

  protected validateData(data: string): boolean {
    console.log('Validating JSON format...');
    try {
      JSON.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  protected formatOutput(data: string): string {
    console.log('Formatting JSON output...');
    return `JSON Output:\n${data}`;
  }
}
