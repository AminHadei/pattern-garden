import { BaseSupportHandler } from './base-support-handler';
import { SupportTicket, TicketPriority } from './support-interfaces';

/**
 * Level 3 Support Handler (Concrete Handler)
 * 
 * Handles complex support tickets with high priority.
 * This level deals with critical system issues and bugs.
 * 
 * Responsibilities:
 * - System failures
 * - Critical bugs
 * - Security issues
 * - Database problems
 * - Infrastructure issues
 */
export class Level3Support extends BaseSupportHandler {
  protected getHandlerName(): string {
    return 'Level 3 Support (Expert Support)';
  }

  protected canHandle(ticket: SupportTicket): boolean {
    // Level 3 can handle high priority tickets
    return ticket.priority === TicketPriority.HIGH;
  }

  protected process(ticket: SupportTicket): string {
    return [
      `✓ Ticket #${ticket.id} assigned to ${this.getHandlerName()}`,
      `  Customer: ${ticket.customerName}`,
      `  Priority: HIGH`,
      `  Issue: ${ticket.description}`,
      `  Status: Escalated to Level 3 Expert Team`,
      `  Resolution: Expert engineers working on the issue, expected resolution within 8 hours`,
    ].join('\n');
  }
}

