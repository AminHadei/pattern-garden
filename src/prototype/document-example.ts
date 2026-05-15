import { DocumentManager } from './document-manager';
import { Contract } from './contract';
import { Resume } from './resume';
import { Report } from './report';
import { Document } from './document-interfaces';

/**
 * Prototype Pattern Example - Document Management System
 * 
 * This example demonstrates the Prototype pattern for creating
 * document copies efficiently without knowing their concrete classes.
 * 
 * The Prototype pattern:
 * - Allows creating new objects by copying existing ones (prototypes)
 * - Avoids the cost of creating objects from scratch
 * - Provides flexibility in object creation
 * - Reduces coupling between client code and concrete classes
 */

function displayDocument(document: Document): void {
  console.log('\n' + '='.repeat(70));
  console.log(document.display());
  console.log('='.repeat(70));
}

function main(): void {
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║        Prototype Pattern - Document Management System        ║');
  console.log('║           Creating Documents by Cloning Prototypes           ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Example 1: Using DocumentManager with registered prototypes
  console.log('📌 Example 1: Using DocumentManager with Template Prototypes');
  const documentManager = new DocumentManager();
  documentManager.initializeDefaultTemplates();

  console.log('\nAvailable document templates:');
  documentManager.getAvailablePrototypes().forEach(key => {
    console.log(`  - ${key}`);
  });

  // Clone a contract from template
  console.log('\n📄 Creating a new contract from template...');
  const contract1 = documentManager.createDocument('contract');
  contract1.setTitle('Service Agreement - Client XYZ');
  displayDocument(contract1);

  // Clone a resume from template
  console.log('\n📄 Creating a new resume from template...');
  const resume1 = documentManager.createDocument('resume');
  resume1.setTitle('Jane Smith - Software Developer Resume');
  displayDocument(resume1);

  // Clone a report from template
  console.log('\n📄 Creating a new report from template...');
  const report1 = documentManager.createDocument('report');
  report1.setTitle('Q4 2024 Financial Report');
  displayDocument(report1);

  // Example 2: Direct cloning without manager
  console.log('\n📌 Example 2: Direct Document Cloning');
  
  // Create an original contract
  const originalContract = new Contract(
    'Employment Agreement',
    'This employment agreement establishes the terms...',
    ['ABC Corporation', 'John Employee'],
    new Date('2024-01-01'),
    new Date('2025-12-31'),
    ['Term 1: Job responsibilities', 'Term 2: Compensation', 'Term 3: Benefits']
  );

  console.log('\n📄 Original Contract:');
  displayDocument(originalContract);

  // Clone the contract
  const clonedContract = originalContract.clone() as Contract;
  clonedContract.setTitle('Employment Agreement - Copy');
  clonedContract.addParty('Legal Department');
  clonedContract.addTerm('Term 4: Non-disclosure agreement');

  console.log('\n📄 Cloned Contract (Modified):');
  displayDocument(clonedContract);

  // Verify they are independent
  console.log('\n✓ Original contract parties:', originalContract.getParties().join(', '));
  console.log('✓ Cloned contract parties:', clonedContract.getParties().join(', '));
  console.log('✓ Contracts are independent - modifications to clone do not affect original');

  // Example 3: Cloning complex resume
  console.log('\n📌 Example 3: Cloning Complex Resume');
  
  const originalResume = new Resume(
    'Senior Developer Resume',
    'Experienced software developer with 10+ years...',
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+1-555-123-4567',
      address: '456 Oak Ave, San Francisco, CA 94102',
    },
    [
      {
        company: 'Tech Startup Inc',
        position: 'Senior Software Engineer',
        duration: '2021-Present',
        description: 'Lead development of microservices architecture...',
      },
      {
        company: 'Big Corp',
        position: 'Software Engineer',
        duration: '2018-2021',
        description: 'Developed enterprise applications...',
      },
    ],
    [
      {
        institution: 'MIT',
        degree: 'Master of Science in Computer Science',
        year: '2018',
      },
      {
        institution: 'Stanford University',
        degree: 'Bachelor of Science in Software Engineering',
        year: '2016',
      },
    ],
    ['Java', 'Python', 'Go', 'Kubernetes', 'AWS', 'Docker']
  );

  console.log('\n📄 Original Resume:');
  displayDocument(originalResume);

  // Clone and customize for different job application
  const tailoredResume = originalResume.clone() as Resume;
  tailoredResume.setTitle('Alice Johnson - Backend Engineer Resume');
  tailoredResume.setPersonalInfo({
    ...tailoredResume.getPersonalInfo(),
    email: 'alice.johnson.professional@example.com',
  });
  tailoredResume.addSkill('GraphQL');
  tailoredResume.addSkill('Redis');

  console.log('\n📄 Tailored Resume (Modified for specific position):');
  displayDocument(tailoredResume);

  // Example 4: Creating multiple reports from prototype
  console.log('\n📌 Example 4: Creating Multiple Reports from Prototype');
  
  const reportTemplate = new Report(
    'Monthly Status Report',
    'This report summarizes the monthly activities...',
    'Project Manager',
    new Date(),
    new Date(),
    1,
    [
      { title: 'Overview', content: 'Monthly overview...' },
      { title: 'Achievements', content: 'Key achievements...' },
      { title: 'Challenges', content: 'Challenges faced...' },
    ],
    'Draft'
  );

  // Create multiple reports for different months
  const reports: Report[] = [];
  const months = ['January', 'February', 'March'];

  months.forEach((month, index) => {
    const report = reportTemplate.clone() as Report;
    report.setTitle(`${month} 2024 Status Report`);
    report.setAuthor(`Project Manager - ${month}`);
    report.incrementVersion();
    report.setStatus(index === months.length - 1 ? 'Final' : 'Draft');
    reports.push(report);
  });

  console.log(`\nCreated ${reports.length} monthly reports from template:`);
  reports.forEach((report, index) => {
    console.log(`\n  Report ${index + 1}:`);
    console.log(`    Title: ${report.getTitle()}`);
    console.log(`    Author: ${report.getAuthor()}`);
    console.log(`    Version: ${report.getVersion()}`);
    console.log(`    Status: ${report.getStatus()}`);
  });

  // Example 5: Custom prototype registration
  console.log('\n📌 Example 5: Registering Custom Prototypes');
  
  const customContract = new Contract(
    'NDA Template',
    'This non-disclosure agreement...',
    ['Party A', 'Party B'],
    new Date(),
    null,
    ['Confidentiality clause', 'Term clause']
  );

  documentManager.registerPrototype('nda', customContract);
  console.log('\n✓ Registered custom NDA template');

  const ndaCopy = documentManager.createDocument('nda');
  ndaCopy.setTitle('NDA - Tech Company & Vendor');
  displayDocument(ndaCopy);

  // Summary
  console.log('\n╔═════════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Prototype Pattern:                             ║');
  console.log('║    1. Reduces object creation cost                              ║');
  console.log('║    2. Hides complexity of object creation                       ║');
  console.log('║    3. Allows runtime object specification                       ║');
  console.log('║    4. Reduces subclassing (alternative to Factory)              ║');
  console.log('║    5. Can add/remove prototypes at runtime                      ║');
  console.log('║    6. Useful for creating objects with complex initialization   ║');
  console.log('╚═════════════════════════════════════════════════════════════════╝\n');
}

// Run the example
main();

