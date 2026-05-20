import { DataProcessor } from './data-processor';
import { JSONProcessor } from './json-processor';
import { XMLProcessor } from './xml-processor';
import { CSVProcessor } from './csv-processor';

/**
 * Template Method Pattern Example - Data Processing
 * 
 * This example demonstrates the Template Method pattern for a data
 * processing system where different data formats (JSON, XML, CSV) are
 * processed using the same algorithm structure.
 * 
 * The Template Method pattern:
 * - Defines the skeleton of an algorithm in a base class
 * - Lets subclasses override specific steps without changing structure
 * - Promotes code reuse
 * - Follows the Hollywood Principle ("Don't call us, we'll call you")
 */

function demonstrateTemplateMethod(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║         Template Method Pattern - Data Processing         ║');
  console.log('║         Define Algorithm Skeleton, Override Steps         ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: JSON Processing
  console.log('📌 Example 1: JSON Processing');
  console.log('─'.repeat(60));

  const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
  const jsonProcessor = new JSONProcessor();
  
  try {
    const result = jsonProcessor.processData(jsonData);
    console.log(`\nResult:\n${result}\n`);
  } catch (error: any) {
    console.log(`Error: ${error.message}\n`);
  }

  // Example 2: XML Processing
  console.log('📌 Example 2: XML Processing');
  console.log('─'.repeat(60));

  const xmlData = '<person><name>Jane</name><age>25</age></person>';
  const xmlProcessor = new XMLProcessor();
  
  try {
    const result = xmlProcessor.processData(xmlData);
    console.log(`\nResult:\n${result}\n`);
  } catch (error: any) {
    console.log(`Error: ${error.message}\n`);
  }

  // Example 3: CSV Processing
  console.log('📌 Example 3: CSV Processing');
  console.log('─'.repeat(60));

  const csvData = 'Alice,28,Engineer\nBob,35,Designer';
  const csvProcessor = new CSVProcessor();
  
  try {
    const result = csvProcessor.processData(csvData);
    console.log(`\nResult:\n${result}\n`);
  } catch (error: any) {
    console.log(`Error: ${error.message}\n`);
  }

  // Example 4: Same algorithm, different implementations
  console.log('📌 Example 4: Same Algorithm Structure, Different Implementations');
  console.log('─'.repeat(60));

  const processors: DataProcessor[] = [
    new JSONProcessor(),
    new XMLProcessor(),
    new CSVProcessor(),
  ];

  const testData = [
    '{"test": "data"}',
    '<test>data</test>',
    'test,data',
  ];

  processors.forEach((processor, index) => {
    console.log(`\nProcessing with ${processor.constructor.name}:`);
    try {
      const result = processor.processData(testData[index]);
      console.log(`Success: ${result.substring(0, 50)}...`);
    } catch (error: any) {
      console.log(`Error: ${error.message}`);
    }
  });
  console.log();

  // Example 5: Validation differences
  console.log('📌 Example 5: Different Validation Logic');
  console.log('─'.repeat(60));

  const invalidJson = 'not json';
  const invalidXml = 'not xml';
  const invalidCsv = '';

  console.log('Testing invalid JSON:');
  try {
    jsonProcessor.processData(invalidJson);
  } catch (error: any) {
    console.log(`  Validation failed: ${error.message}`);
  }

  console.log('\nTesting invalid XML:');
  try {
    xmlProcessor.processData(invalidXml);
  } catch (error: any) {
    console.log(`  Validation failed: ${error.message}`);
  }

  console.log('\nTesting invalid CSV:');
  try {
    csvProcessor.processData(invalidCsv);
  } catch (error: any) {
    console.log(`  Validation failed: ${error.message}`);
  }
  console.log();

  // Example 6: Template Method benefits
  console.log('📌 Example 6: Template Method Benefits');
  console.log('─'.repeat(60));

  console.log('All processors follow the same algorithm structure:');
  console.log('  1. Read data');
  console.log('  2. Validate data');
  console.log('  3. Process data (varies by implementation)');
  console.log('  4. Format output');
  console.log('  5. Save result');
  console.log();
  console.log('Each processor can customize specific steps:');
  console.log('  • JSONProcessor: Validates JSON, processes JSON');
  console.log('  • XMLProcessor: Validates XML, processes XML');
  console.log('  • CSVProcessor: Validates CSV, processes CSV');
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Template Method Pattern:                  ║');
  console.log('║    1. Defines algorithm structure in base class            ║');
  console.log('║    2. Promotes code reuse                                  ║');
  console.log('║    3. Subclasses override specific steps                   ║');
  console.log('║    4. Controls algorithm flow                              ║');
  console.log('║    5. Hollywood Principle - base class calls subclasses    ║');
  console.log('║    6. Reduces code duplication                             ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateTemplateMethod();
