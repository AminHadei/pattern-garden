/**
 * Document Interface
 * 
 * Defines the common interface that all document types must implement.
 * The Prototype pattern requires a clone method to create copies of objects.
 */
export interface Document {
  /**
   * Clone the document to create an identical copy
   * @returns A new instance of the document with the same properties
   */
  clone(): Document;

  /**
   * Get the document type
   * @returns The type of the document
   */
  getType(): string;

  /**
   * Get the document title
   * @returns The title of the document
   */
  getTitle(): string;

  /**
   * Set the document title
   * @param title The new title
   */
  setTitle(title: string): void;

  /**
   * Get the document content
   * @returns The content of the document
   */
  getContent(): string;

  /**
   * Set the document content
   * @param content The new content
   */
  setContent(content: string): void;

  /**
   * Get document metadata
   * @returns Document metadata as an object
   */
  getMetadata(): Record<string, any>;

  /**
   * Display document information
   * @returns A formatted string with document details
   */
  display(): string;
}

