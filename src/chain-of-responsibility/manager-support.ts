import { BaseSupportHandler } from './base-support-handler';
import { SupportTicket, TicketPriority } from './support-interfaces';

/**
 * Manager Support Handler (Concrete Handler)
 * 
 * Handles critical tickets that require management attention.
 * This is the final handler in the chain.
 * 
 * Responsibilities:
 * - Critical system outages
 * - Major client issues
 * - Legal/compliance issues
 * - Executive escalations
 * - Business-critical problems
 */
export class ManagerSupport extends BaseSupportHandler {
  protected getHandlerName(): string {
    return 'Management Team (Executive Support)';
  }

  protected canHandle(ticket: SupportTicket): boolean {
    // Manager can handle critical priority tickets
    // This is the last handler, so it handles everything that reaches it
    return ticket.priority === TicketPriority.CRITICAL;
  }

  protected process(ticket: SupportTicket): string {
    return [
      `✓ Ticket #${ticket.id} assigned to ${this.getHandlerName()}`,
      `  Customer: ${ticket.customerName}`,
      `  Priority: CRITICAL`,
      `  Issue: ${ticket.description}`,
      `  Status: URGENT - Management team notified`,
      `  Resolution: Top priority - All hands on deck, immediate attention required`,
    ].join('\n');
  }
}


