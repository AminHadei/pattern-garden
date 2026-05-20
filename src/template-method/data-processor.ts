/**
 * Data Processor (Abstract Class)
 * 
 * Defines the template method that defines the skeleton of an algorithm.
 * Subclasses override specific steps of the algorithm without changing
 * the algorithm's structure.
 */

export abstract class DataProcessor {
  /**
   * Template method that defines the algorithm structure
   */
  public processData(data: string): string {
    console.log('Starting data processing...');
    
    // Step 1: Read data
    const rawData = this.readData(data);
    
    // Step 2: Validate data
    if (!this.validateData(rawData)) {
      throw new Error('Data validation failed');
    }
    
    // Step 3: Process data (abstract - must be implemented by subclasses)
    const processedData = this.process(rawData);
    
    // Step 4: Format output
    const formattedData = this.formatOutput(processedData);
    
    // Step 5: Save result
    this.saveResult(formattedData);
    
    console.log('Data processing completed.');
    return formattedData;
  }

  /**
   * Read data (can be overridden by subclasses)
   */
  protected readData(data: string): string {
    console.log('Reading data...');
    return data;
  }

  /**
   * Validate data (can be overridden by subclasses)
   */
  protected validateData(data: string): boolean {
    console.log('Validating data...');
    return data.length > 0;
  }

  /**
   * Process data (abstract - must be implemented by subclasses)
   */
  protected abstract process(data: string): string;

  /**
   * Format output (can be overridden by subclasses)
   */
  protected formatOutput(data: string): string {
    console.log('Formatting output...');
    return data;
  }

  /**
   * Save result (can be overridden by subclasses)
   */
  protected saveResult(data: string): void {
    console.log('Saving result...');
  }
}
