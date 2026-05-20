import { BaseSupportHandler } from './base-support-handler';
import { SupportTicket, TicketPriority } from './support-interfaces';

/**
 * Level 1 Support Handler (Concrete Handler)
 * 
 * Handles basic support tickets with low priority.
 * This is typically the first line of support handling simple inquiries.
 * 
 * Responsibilities:
 * - Password resets
 * - Basic account questions
 * - Simple troubleshooting
 * - FAQ-type questions
 */
export class Level1Support extends BaseSupportHandler {
  protected getHandlerName(): string {
    return 'Level 1 Support (Basic Support)';
  }

  protected canHandle(ticket: SupportTicket): boolean {
    // Level 1 can handle only low priority tickets
    return ticket.priority === TicketPriority.LOW;
  }

  protected process(ticket: SupportTicket): string {
    return [
      `✓ Ticket #${ticket.id} assigned to ${this.getHandlerName()}`,
      `  Customer: ${ticket.customerName}`,
      `  Priority: LOW`,
      `  Issue: ${ticket.description}`,
      `  Status: Resolved by Level 1 Support`,
      `  Resolution: Basic support provided, issue resolved within 1 hour`,
    ].join('\n');
  }
}


