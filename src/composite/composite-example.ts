import { File } from './file';
import { Directory } from './directory';
import { FileSystemComponent } from './file-system-interfaces';

/**
 * Composite Pattern Example - File System
 * 
 * This example demonstrates the Composite pattern for a file system
 * where files and directories can be treated uniformly.
 * 
 * The Composite pattern:
 * - Composes objects into tree structures
 * - Allows clients to treat individual objects and compositions uniformly
 * - Enables recursive composition
 * - Simplifies client code
 */

function demonstrateComposite(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║          Composite Pattern - File System Example          ║');
  console.log('║           Treat Files and Directories Uniformly           ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: Basic file and directory
  console.log('📌 Example 1: Basic File and Directory');
  console.log('─'.repeat(60));

  const file1 = new File('document.txt', 1024);
  const dir1 = new Directory('Documents');

  console.log(`File: ${file1.getName()}, Size: ${file1.getSize()} bytes`);
  console.log(`Directory: ${dir1.getName()}, Size: ${dir1.getSize()} bytes\n`);

  // Example 2: Directory with files
  console.log('📌 Example 2: Directory with Files');
  console.log('─'.repeat(60));

  const documents = new Directory('Documents');
  documents.add(new File('resume.pdf', 2048));
  documents.add(new File('cover-letter.docx', 1536));
  documents.add(new File('portfolio.pdf', 5120));

  documents.display();
  console.log();

  // Example 3: Nested directories
  console.log('📌 Example 3: Nested Directories');
  console.log('─'.repeat(60));

  const root = new Directory('Root');
  const home = new Directory('Home');
  const projects = new Directory('Projects');
  const project1 = new Directory('Project1');
  const project2 = new Directory('Project2');

  project1.add(new File('main.ts', 4096));
  project1.add(new File('config.json', 512));
  project1.add(new File('README.md', 2048));

  project2.add(new File('app.js', 8192));
  project2.add(new File('package.json', 1024));

  projects.add(project1);
  projects.add(project2);

  home.add(new File('notes.txt', 256));
  home.add(projects);

  root.add(home);
  root.add(new File('readme.txt', 128));

  root.display();
  console.log();

  // Example 4: Uniform treatment
  console.log('📌 Example 4: Uniform Treatment of Files and Directories');
  console.log('─'.repeat(60));

  const components: FileSystemComponent[] = [
    new File('file1.txt', 100),
    new File('file2.txt', 200),
    new Directory('SubDir'),
  ];

  // Add files to subdirectory
  const subDir = components[2] as Directory;
  subDir.add(new File('subfile1.txt', 50));
  subDir.add(new File('subfile2.txt', 75));

  console.log('Treating all components uniformly:');
  components.forEach((component) => {
    console.log(`  ${component.getName()}: ${component.getSize()} bytes`);
  });
  console.log();

  // Example 5: Recursive operations
  console.log('📌 Example 5: Recursive Operations');
  console.log('─'.repeat(60));

  const complexStructure = new Directory('Complex');
  const level1 = new Directory('Level1');
  const level2 = new Directory('Level2');
  const level3 = new Directory('Level3');

  level3.add(new File('deep-file.txt', 100));
  level2.add(level3);
  level2.add(new File('level2-file.txt', 200));
  level1.add(level2);
  level1.add(new File('level1-file.txt', 300));
  complexStructure.add(level1);
  complexStructure.add(new File('root-file.txt', 400));

  console.log('Complex nested structure:');
  complexStructure.display();
  console.log(`Total size: ${complexStructure.getSize()} bytes\n`);

  // Example 6: Composite pattern benefits
  console.log('📌 Example 6: Composite Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Key advantages:');
  console.log('  1. Uniform treatment of files and directories');
  console.log('  2. Simplifies client code (no need to distinguish)');
  console.log('  3. Easy to add new component types');
  console.log('  4. Recursive composition');
  console.log('  5. Operations work on both leaves and composites');
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Composite Pattern:                        ║');
  console.log('║    1. Uniform treatment of individual and composite        ║');
  console.log('║    2. Simplifies client code                               ║');
  console.log('║    3. Easy to add new component types                      ║');
  console.log('║    4. Enables recursive composition                        ║');
  console.log('║    5. Operations work on both leaves and composites        ║');
  console.log('║    6. Follows Single Responsibility Principle              ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateComposite();
