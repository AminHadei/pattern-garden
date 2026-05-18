import { FileSystemComponent } from './file-system-interfaces';

/**
 * File (Leaf)
 * 
 * Represents a file in the file system. This is a leaf node
 * in the composite structure that has no children.
 */

export class File implements FileSystemComponent {
  constructor(
    private name: string,
    private size: number
  ) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  display(indent: string = ''): void {
    console.log(`${indent}📄 ${this.name} (${this.size} bytes)`);
  }
}
