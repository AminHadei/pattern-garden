import { SupportHandler, SupportTicket } from './support-interfaces';

/**
 * Base Support Handler (Abstract Handler)
 * 
 * Base class for all support handlers in the chain.
 * Implements the chain logic and provides a template for handling tickets.
 * 
 * This implementation:
 * - Maintains a reference to the next handler in the chain
 * - Provides method chaining for easy setup
 * - Delegates to the next handler if current handler cannot process
 * - Provides a template method for subclasses to override
 */
export abstract class BaseSupportHandler implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  /**
   * Set the next handler in the chain
   * @param handler The next handler
   * @returns The handler for method chaining
   */
  public setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  /**
   * Handle a support ticket
   * If this handler can process the ticket, it does so.
   * Otherwise, it passes the ticket to the next handler.
   * 
   * @param ticket The ticket to handle
   * @returns A response message or null if cannot handle
   */
  public handle(ticket: SupportTicket): string | null {
    // Check if this handler can process the ticket
    if (this.canHandle(ticket)) {
      return this.process(ticket);
    }

    // Pass to the next handler if available
    if (this.nextHandler) {
      return this.nextHandler.handle(ticket);
    }

    // No handler in the chain could process the ticket
    return null;
  }

  /**
   * Determine if this handler can process the ticket
   * Subclasses should override this method
   * 
   * @param ticket The ticket to check
   * @returns True if this handler can process the ticket
   */
  protected abstract canHandle(ticket: SupportTicket): boolean;

  /**
   * Process the ticket
   * Subclasses should override this method
   * 
   * @param ticket The ticket to process
   * @returns A response message
   */
  protected abstract process(ticket: SupportTicket): string;

  /**
   * Get the handler's name
   * @returns The handler name
   */
  protected abstract getHandlerName(): string;
}


