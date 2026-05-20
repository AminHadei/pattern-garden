import { User } from './user';

/**
 * Mediator Interface
 * 
 * Defines the interface for the mediator that coordinates
 * communication between colleague objects.
 */

export interface Mediator {
  /**
   * Send a message from one user to another or broadcast to all
   */
  sendMessage(message: string, sender: User, recipient?: User): void;

  /**
   * Register a user with the mediator
   */
  addUser(user: User): void;

  /**
   * Remove a user from the mediator
   */
  removeUser(user: User): void;

  /**
   * Get all registered users
   */
  getUsers(): User[];
}

