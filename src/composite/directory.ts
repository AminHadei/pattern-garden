import { FileSystemComponent } from './file-system-interfaces';

/**
 * Directory (Composite)
 * 
 * Represents a directory in the file system. This is a composite
 * node that can contain other files and directories.
 */

export class Directory implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    // Calculate total size by summing all children
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }

  display(indent: string = ''): void {
    console.log(`${indent}📁 ${this.name}/ (${this.getSize()} bytes)`);
    const newIndent = indent + '  ';
    this.children.forEach((child) => {
      child.display(newIndent);
    });
  }

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  getChildren(): FileSystemComponent[] {
    return this.children;
  }
}
