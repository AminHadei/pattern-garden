import { Document } from './document-interfaces';
import { Contract } from './contract';
import { Resume } from './resume';
import { Report } from './report';

/**
 * Document Manager
 * 
 * Manages document templates and creates new documents by cloning prototypes.
 * This demonstrates the Prototype pattern in a practical document management system.
 */
export class DocumentManager {
  private prototypes: Map<string, Document> = new Map();

  /**
   * Register a document prototype
   * @param key The key to identify the prototype
   * @param document The document prototype to register
   */
  registerPrototype(key: string, document: Document): void {
    this.prototypes.set(key, document);
  }

  /**
   * Create a new document by cloning a registered prototype
   * @param key The key of the prototype to clone
   * @returns A cloned copy of the prototype document
   * @throws Error if the prototype is not found
   */
  createDocument(key: string): Document {
    const prototype = this.prototypes.get(key);
    if (!prototype) {
      throw new Error(`Prototype with key "${key}" not found`);
    }
    return prototype.clone();
  }

  /**
   * Get all registered prototype keys
   * @returns Array of prototype keys
   */
  getAvailablePrototypes(): string[] {
    return Array.from(this.prototypes.keys());
  }

  /**
   * Check if a prototype exists
   * @param key The key to check
   * @returns True if the prototype exists
   */
  hasPrototype(key: string): boolean {
    return this.prototypes.has(key);
  }

  /**
   * Initialize with default document templates
   */
  initializeDefaultTemplates(): void {
    // Default Contract template
    const contractTemplate = new Contract(
      'Standard Service Agreement',
      'This agreement outlines the terms and conditions...',
      ['Company A', 'Company B'],
      new Date(),
      null,
      ['Term 1: Service delivery', 'Term 2: Payment terms', 'Term 3: Confidentiality']
    );
    this.registerPrototype('contract', contractTemplate);

    // Default Resume template
    const resumeTemplate = new Resume(
      'Professional Resume Template',
      'A comprehensive resume template...',
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1-234-567-8900',
        address: '123 Main St, City, State 12345',
      },
      [
        {
          company: 'Tech Corp',
          position: 'Software Engineer',
          duration: '2020-2023',
          description: 'Developed web applications...',
        },
      ],
      [
        {
          institution: 'University of Technology',
          degree: 'Bachelor of Science in Computer Science',
          year: '2020',
        },
      ],
      ['JavaScript', 'TypeScript', 'React', 'Node.js']
    );
    this.registerPrototype('resume', resumeTemplate);

    // Default Report template
    const reportTemplate = new Report(
      'Quarterly Report Template',
      'This report contains quarterly analysis...',
      'Report Author',
      new Date(),
      new Date(),
      1,
      [
        { title: 'Executive Summary', content: 'Overview of the quarter...' },
        { title: 'Financial Analysis', content: 'Financial performance...' },
        { title: 'Recommendations', content: 'Future recommendations...' },
      ],
      'Draft'
    );
    this.registerPrototype('report', reportTemplate);
  }
}

