import { Mediator } from './mediator-interfaces';

/**
 * User (Colleague)
 * 
 * Represents a user in the chat system. Users communicate
 * through the mediator rather than directly with each other.
 */

export class User {
  private receivedMessages: string[] = [];

  constructor(
    private name: string,
    private mediator: Mediator
  ) {
    this.mediator.addUser(this);
  }

  /**
   * Get the user's name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Send a message to a specific user
   */
  sendMessage(message: string, recipient: User): void {
    console.log(`💬 ${this.name} sends to ${recipient.getName()}: "${message}"`);
    this.mediator.sendMessage(message, this, recipient);
  }

  /**
   * Send a broadcast message to all users
   */
  broadcast(message: string): void {
    console.log(`📢 ${this.name} broadcasts: "${message}"`);
    this.mediator.sendMessage(message, this);
  }

  /**
   * Receive a message (called by mediator)
   */
  receive(message: string, sender: User): void {
    const formattedMessage = `[${sender.getName()}] ${message}`;
    this.receivedMessages.push(formattedMessage);
    console.log(`📨 ${this.name} received: "${formattedMessage}"`);
  }

  /**
   * Get all received messages
   */
  getReceivedMessages(): string[] {
    return this.receivedMessages;
  }

  /**
   * Leave the chat
   */
  leave(): void {
    this.mediator.removeUser(this);
    console.log(`👋 ${this.name} left the chat`);
  }
}

