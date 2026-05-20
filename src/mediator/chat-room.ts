import { Mediator } from './mediator-interfaces';
import { User } from './user';

/**
 * Chat Room (Concrete Mediator)
 * 
 * A concrete mediator that coordinates communication between users.
 * It manages the list of users and routes messages appropriately.
 */

export class ChatRoom implements Mediator {
  private users: User[] = [];

  sendMessage(message: string, sender: User, recipient?: User): void {
    if (recipient) {
      // Private message to specific user
      recipient.receive(message, sender);
    } else {
      // Broadcast to all users except sender
      this.users.forEach((user) => {
        if (user !== sender) {
          user.receive(message, sender);
        }
      });
    }
  }

  addUser(user: User): void {
    if (!this.users.includes(user)) {
      this.users.push(user);
      console.log(`✅ ${user.getName()} joined the chat room`);
    }
  }

  removeUser(user: User): void {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  /**
   * Get the number of users in the chat room
   */
  getUserCount(): number {
    return this.users.length;
  }

  /**
   * Get user names
   */
  getUserNames(): string[] {
    return this.users.map((user) => user.getName());
  }
}

