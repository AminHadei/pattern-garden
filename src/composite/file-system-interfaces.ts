/**
 * File System Component Interface
 * 
 * Defines the common interface for both individual files and
 * directories (composites). This allows clients to treat files
 * and directories uniformly.
 */

export interface FileSystemComponent {
  /**
   * Get the name of the component
   */
  getName(): string;

  /**
   * Get the size of the component
   */
  getSize(): number;

  /**
   * Display the component structure
   */
  display(indent: string): void;

  /**
   * Add a child component (only for directories)
   */
  add?(component: FileSystemComponent): void;

  /**
   * Remove a child component (only for directories)
   */
  remove?(component: FileSystemComponent): void;

  /**
   * Get child components (only for directories)
   */
  getChildren?(): FileSystemComponent[];
}
