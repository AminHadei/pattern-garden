import { DataProcessor } from './data-processor';

/**
 * CSV Processor
 * 
 * A concrete implementation that processes CSV data.
 * Implements the abstract process method.
 */

export class CSVProcessor extends DataProcessor {
  protected process(data: string): string {
    console.log('Processing CSV data...');
    const lines = data.split('\n');
    // Example: Add header if missing or process rows
    if (lines.length > 0 && !lines[0].includes(',')) {
      return `Name,Value\n${data}`;
    }
    // Add row count as comment
    return `# Total rows: ${lines.length}\n${data}`;
  }

  protected validateData(data: string): boolean {
    console.log('Validating CSV format...');
    // Simple CSV validation
    return data.includes(',') || data.length > 0;
  }

  protected formatOutput(data: string): string {
    console.log('Formatting CSV output...');
    return `CSV Output:\n${data}`;
  }

  protected saveResult(data: string): void {
    console.log('Saving CSV to file...');
    // In a real implementation, this would write to a file
  }
}
