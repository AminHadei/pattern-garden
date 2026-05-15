import { Document } from './document-interfaces';

/**
 * Contract Document
 * 
 * Represents a legal contract document with specific properties
 * like parties, effective date, and terms.
 */
export class Contract implements Document {
  private title: string;
  private content: string;
  private parties: string[];
  private effectiveDate: Date;
  private expirationDate: Date | null;
  private terms: string[];

  constructor(
    title: string = 'Untitled Contract',
    content: string = '',
    parties: string[] = [],
    effectiveDate: Date = new Date(),
    expirationDate: Date | null = null,
    terms: string[] = []
  ) {
    this.title = title;
    this.content = content;
    this.parties = [...parties]; // Create a copy to avoid reference issues
    this.effectiveDate = new Date(effectiveDate);
    this.expirationDate = expirationDate ? new Date(expirationDate) : null;
    this.terms = [...terms]; // Create a copy
  }

  clone(): Document {
    // Deep clone the contract
    return new Contract(
      this.title,
      this.content,
      [...this.parties],
      new Date(this.effectiveDate),
      this.expirationDate ? new Date(this.expirationDate) : null,
      [...this.terms]
    );
  }

  getType(): string {
    return 'Contract';
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getMetadata(): Record<string, any> {
    return {
      type: this.getType(),
      title: this.title,
      parties: [...this.parties],
      effectiveDate: this.effectiveDate.toISOString(),
      expirationDate: this.expirationDate ? this.expirationDate.toISOString() : null,
      terms: [...this.terms],
      contentLength: this.content.length,
    };
  }

  display(): string {
    let display = `Contract: ${this.title}\n`;
    display += `${'='.repeat(50)}\n`;
    display += `Parties: ${this.parties.join(', ')}\n`;
    display += `Effective Date: ${this.effectiveDate.toLocaleDateString()}\n`;
    if (this.expirationDate) {
      display += `Expiration Date: ${this.expirationDate.toLocaleDateString()}\n`;
    }
    display += `Terms: ${this.terms.length} terms\n`;
    display += `Content: ${this.content.substring(0, 100)}${this.content.length > 100 ? '...' : ''}\n`;
    return display;
  }

  // Contract-specific methods
  getParties(): string[] {
    return [...this.parties];
  }

  addParty(party: string): void {
    this.parties.push(party);
  }

  getEffectiveDate(): Date {
    return new Date(this.effectiveDate);
  }

  getExpirationDate(): Date | null {
    return this.expirationDate ? new Date(this.expirationDate) : null;
  }

  getTerms(): string[] {
    return [...this.terms];
  }

  addTerm(term: string): void {
    this.terms.push(term);
  }
}

