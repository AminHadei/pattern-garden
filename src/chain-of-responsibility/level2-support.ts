import { BaseSupportHandler } from './base-support-handler';
import { SupportTicket, TicketPriority } from './support-interfaces';

/**
 * Level 2 Support Handler (Concrete Handler)
 * 
 * Handles intermediate support tickets with medium priority.
 * This level deals with more complex technical issues.
 * 
 * Responsibilities:
 * - Software configuration issues
 * - Integration problems
 * - Performance issues
 * - Advanced troubleshooting
 */
export class Level2Support extends BaseSupportHandler {
  protected getHandlerName(): string {
    return 'Level 2 Support (Technical Support)';
  }

  protected canHandle(ticket: SupportTicket): boolean {
    // Level 2 can handle medium priority tickets
    return ticket.priority === TicketPriority.MEDIUM;
  }

  protected process(ticket: SupportTicket): string {
    return [
      `✓ Ticket #${ticket.id} assigned to ${this.getHandlerName()}`,
      `  Customer: ${ticket.customerName}`,
      `  Priority: MEDIUM`,
      `  Issue: ${ticket.description}`,
      `  Status: Being investigated by Level 2 Support`,
      `  Resolution: Technical team analyzing the issue, expected resolution within 4 hours`,
    ].join('\n');
  }
}

