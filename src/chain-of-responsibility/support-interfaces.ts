/**
 * Support Ticket Interface
 * 
 * Represents a support ticket with priority and details
 */
export interface SupportTicket {
  id: string;
  priority: TicketPriority;
  description: string;
  customerName: string;
}

/**
 * Ticket Priority Enum
 * 
 * Defines the priority levels for support tickets
 */
export enum TicketPriority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  CRITICAL = 4,
}

/**
 * Support Handler Interface
 * 
 * Defines the interface for support handlers in the chain
 */
export interface SupportHandler {
  /**
   * Set the next handler in the chain
   * @param handler The next handler
   * @returns The handler for method chaining
   */
  setNext(handler: SupportHandler): SupportHandler;

  /**
   * Handle a support ticket
   * @param ticket The ticket to handle
   * @returns A response message or null if cannot handle
   */
  handle(ticket: SupportTicket): string | null;
}


