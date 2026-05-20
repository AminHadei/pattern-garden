import { DataProcessor } from './data-processor';

/**
 * XML Processor
 * 
 * A concrete implementation that processes XML data.
 * Implements the abstract process method.
 */

export class XMLProcessor extends DataProcessor {
  protected process(data: string): string {
    console.log('Processing XML data...');
    // Example: Add processing instruction
    if (!data.includes('<?xml')) {
      return `<?xml version="1.0" encoding="UTF-8"?>\n${data}`;
    }
    return data;
  }

  protected validateData(data: string): boolean {
    console.log('Validating XML format...');
    // Simple XML validation (check for basic structure)
    return data.trim().startsWith('<') && data.includes('>');
  }

  protected formatOutput(data: string): string {
    console.log('Formatting XML output...');
    return `XML Output:\n${data}`;
  }
}
