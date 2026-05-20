import { ChatRoom } from './chat-room';
import { User } from './user';

/**
 * Mediator Pattern Example - Chat Room System
 * 
 * This example demonstrates the Mediator pattern for a chat room
 * system where users communicate through a mediator rather than
 * directly with each other.
 * 
 * The Mediator pattern:
 * - Defines how objects interact with each other
 * - Promotes loose coupling by keeping objects from referring to each other
 * - Centralizes communication logic in the mediator
 * - Makes the system easier to understand and maintain
 */

function demonstrateMediator(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║            Mediator Pattern - Chat Room Example           ║');
  console.log('║         Centralize Communication, Reduce Coupling         ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Create a chat room (mediator)
  const chatRoom = new ChatRoom();

  // Example 1: Basic private messaging
  console.log('📌 Example 1: Basic Private Messaging');
  console.log('─'.repeat(60));

  const alice = new User('Alice', chatRoom);
  const bob = new User('Bob', chatRoom);

  alice.sendMessage('Hello Bob!', bob);
  bob.sendMessage('Hi Alice!', alice);
  console.log();

  // Example 2: Broadcast messaging
  console.log('📌 Example 2: Broadcast Messaging');
  console.log('─'.repeat(60));

  const charlie = new User('Charlie', chatRoom);
  const diana = new User('Diana', chatRoom);

  console.log(`Users in chat: ${chatRoom.getUserNames().join(', ')}\n`);

  alice.broadcast('Hello everyone!');
  charlie.broadcast('Good morning!');
  console.log();

  // Example 3: Multiple conversations
  console.log('📌 Example 3: Multiple Conversations');
  console.log('─'.repeat(60));

  bob.sendMessage('How are you?', alice);
  diana.sendMessage('Nice to meet you all!', charlie);
  alice.sendMessage('I am doing great!', bob);
  console.log();

  // Example 4: Message history
  console.log('📌 Example 4: Message History');
  console.log('─'.repeat(60));

  console.log(`Alice's received messages: ${alice.getReceivedMessages().length}`);
  alice.getReceivedMessages().forEach((msg, index) => {
    console.log(`  ${index + 1}. ${msg}`);
  });
  console.log();

  console.log(`Bob's received messages: ${bob.getReceivedMessages().length}`);
  bob.getReceivedMessages().forEach((msg, index) => {
    console.log(`  ${index + 1}. ${msg}`);
  });
  console.log();

  // Example 5: User leaving
  console.log('📌 Example 5: User Leaving');
  console.log('─'.repeat(60));

  console.log(`Users before: ${chatRoom.getUserNames().join(', ')}`);
  charlie.leave();
  console.log(`Users after: ${chatRoom.getUserNames().join(', ')}\n`);

  // Example 6: New user joining existing chat
  console.log('📌 Example 6: New User Joining');
  console.log('─'.repeat(60));

  const eve = new User('Eve', chatRoom);
  console.log(`Users now: ${chatRoom.getUserNames().join(', ')}`);
  eve.broadcast('Hello! I just joined.');
  console.log();

  // Example 7: Mediator pattern benefits
  console.log('📌 Example 7: Mediator Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Key advantages:');
  console.log('  1. Loose coupling - users don\'t know about each other');
  console.log('  2. Centralized communication logic in mediator');
  console.log('  3. Easy to add/remove users without affecting others');
  console.log('  4. Single Responsibility - mediator handles routing');
  console.log('  5. Open/Closed Principle - easy to extend');
  console.log('  6. Reduces dependencies between objects');
  console.log();

  // Example 8: Complex interaction scenario
  console.log('📌 Example 8: Complex Interaction Scenario');
  console.log('─'.repeat(60));

  const groupChat = new ChatRoom();
  const user1 = new User('User1', groupChat);
  const user2 = new User('User2', groupChat);
  const user3 = new User('User3', groupChat);

  user1.broadcast('Meeting starts in 5 minutes');
  user2.sendMessage('Got it!', user1);
  user3.broadcast('I will be there');
  user1.sendMessage('Great!', user3);
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Mediator Pattern:                         ║');
  console.log('║    1. Promotes loose coupling between objects              ║');
  console.log('║    2. Centralizes communication logic                      ║');
  console.log('║    3. Easy to add/remove colleagues                        ║');
  console.log('║    4. Single Responsibility Principle                      ║');
  console.log('║    5. Reduces dependencies between objects                 ║');
  console.log('║    6. Makes system easier to understand and maintain       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateMediator();
