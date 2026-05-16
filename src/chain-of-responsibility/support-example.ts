import { SupportTicket, TicketPriority } from './support-interfaces';
import { Level1Support } from './level1-support';
import { Level2Support } from './level2-support';
import { Level3Support } from './level3-support';
import { ManagerSupport } from './manager-support';

/**
 * Chain of Responsibility Pattern Example - Support Ticket System
 * 
 * This example demonstrates the Chain of Responsibility pattern for a support
 * ticket system where tickets are routed through different support levels
 * based on their priority.
 * 
 * The Chain of Responsibility pattern:
 * - Passes requests along a chain of handlers
 * - Each handler decides to process the request or pass it to the next handler
 * - Decouples sender from receiver
 * - Allows dynamic chain configuration
 */

function demonstrateChainOfResponsibility(): void {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║      Chain of Responsibility - Support Ticket System     ║');
  console.log('║           Route Tickets Through Support Levels           ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Example 1: Building the chain
  console.log('📌 Example 1: Building the Support Chain');
  console.log('─'.repeat(60));

  // Create handlers
  const level1 = new Level1Support();
  const level2 = new Level2Support();
  const level3 = new Level3Support();
  const manager = new ManagerSupport();

  // Build the chain: Level 1 → Level 2 → Level 3 → Manager
  level1.setNext(level2).setNext(level3).setNext(manager);

  console.log('Support chain created:');
  console.log('Level 1 Support → Level 2 Support → Level 3 Support → Manager\n');

  // Example 2: Low priority ticket (handled by Level 1)
  console.log('📌 Example 2: Low Priority Ticket');
  console.log('─'.repeat(60));

  const ticket1: SupportTicket = {
    id: 'TKT-001',
    priority: TicketPriority.LOW,
    description: 'How do I reset my password?',
    customerName: 'John Doe',
  };

  const response1 = level1.handle(ticket1);
  console.log(response1 || 'Ticket could not be handled');
  console.log();

  // Example 3: Medium priority ticket (handled by Level 2)
  console.log('📌 Example 3: Medium Priority Ticket');
  console.log('─'.repeat(60));

  const ticket2: SupportTicket = {
    id: 'TKT-002',
    priority: TicketPriority.MEDIUM,
    description: 'API integration is returning 500 errors intermittently',
    customerName: 'Jane Smith',
  };

  const response2 = level1.handle(ticket2);
  console.log(response2 || 'Ticket could not be handled');
  console.log();

  // Example 4: High priority ticket (handled by Level 3)
  console.log('📌 Example 4: High Priority Ticket');
  console.log('─'.repeat(60));

  const ticket3: SupportTicket = {
    id: 'TKT-003',
    priority: TicketPriority.HIGH,
    description: 'Database connection pool exhausted, users cannot login',
    customerName: 'Bob Johnson',
  };

  const response3 = level1.handle(ticket3);
  console.log(response3 || 'Ticket could not be handled');
  console.log();

  // Example 5: Critical priority ticket (handled by Manager)
  console.log('📌 Example 5: Critical Priority Ticket');
  console.log('─'.repeat(60));

  const ticket4: SupportTicket = {
    id: 'TKT-004',
    priority: TicketPriority.CRITICAL,
    description: 'Complete system outage - all services down for 1000+ customers',
    customerName: 'Alice Brown',
  };

  const response4 = level1.handle(ticket4);
  console.log(response4 || 'Ticket could not be handled');
  console.log();

  // Example 6: Processing multiple tickets
  console.log('📌 Example 6: Processing Multiple Tickets');
  console.log('─'.repeat(60));

  const tickets: SupportTicket[] = [
    {
      id: 'TKT-101',
      priority: TicketPriority.LOW,
      description: 'Cannot find the download button',
      customerName: 'Charlie Wilson',
    },
    {
      id: 'TKT-102',
      priority: TicketPriority.MEDIUM,
      description: 'Email notifications not being sent',
      customerName: 'Diana Martinez',
    },
    {
      id: 'TKT-103',
      priority: TicketPriority.HIGH,
      description: 'Payment gateway throwing errors',
      customerName: 'Edward Davis',
    },
    {
      id: 'TKT-104',
      priority: TicketPriority.LOW,
      description: 'Question about billing cycle',
      customerName: 'Fiona Garcia',
    },
  ];

  console.log(`Processing ${tickets.length} tickets through the support chain:\n`);

  tickets.forEach((ticket) => {
    const response = level1.handle(ticket);
    if (response) {
      console.log(response);
      console.log();
    }
  });

  // Example 7: Alternative chain configuration
  console.log('📌 Example 7: Alternative Chain Configuration');
  console.log('─'.repeat(60));
  console.log('Creating a simplified chain: Level 1 → Manager (skip intermediates)\n');

  const simpleLevel1 = new Level1Support();
  const simpleManager = new ManagerSupport();
  simpleLevel1.setNext(simpleManager);

  const urgentTicket: SupportTicket = {
    id: 'TKT-999',
    priority: TicketPriority.CRITICAL,
    description: 'Security breach detected',
    customerName: 'Security Team',
  };

  const urgentResponse = simpleLevel1.handle(urgentTicket);
  console.log(urgentResponse || 'Ticket could not be handled');
  console.log();

  // Example 8: Demonstrating chain traversal
  console.log('📌 Example 8: Chain Traversal Visualization');
  console.log('─'.repeat(60));

  function visualizeChain(ticket: SupportTicket): void {
    const priorityNames = ['', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
    console.log(`\nTicket #${ticket.id} (Priority: ${priorityNames[ticket.priority]})`);
    console.log(`Issue: ${ticket.description}`);
    console.log('Chain traversal:');
    
    if (ticket.priority === TicketPriority.LOW) {
      console.log('  ✓ Level 1 Support [HANDLED]');
    } else if (ticket.priority === TicketPriority.MEDIUM) {
      console.log('  → Level 1 Support [PASSED]');
      console.log('  ✓ Level 2 Support [HANDLED]');
    } else if (ticket.priority === TicketPriority.HIGH) {
      console.log('  → Level 1 Support [PASSED]');
      console.log('  → Level 2 Support [PASSED]');
      console.log('  ✓ Level 3 Support [HANDLED]');
    } else if (ticket.priority === TicketPriority.CRITICAL) {
      console.log('  → Level 1 Support [PASSED]');
      console.log('  → Level 2 Support [PASSED]');
      console.log('  → Level 3 Support [PASSED]');
      console.log('  ✓ Manager Support [HANDLED]');
    }
  }

  visualizeChain({
    id: 'VIS-001',
    priority: TicketPriority.LOW,
    description: 'Simple question',
    customerName: 'User 1',
  });

  visualizeChain({
    id: 'VIS-002',
    priority: TicketPriority.CRITICAL,
    description: 'Critical system failure',
    customerName: 'User 2',
  });

  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Chain of Responsibility Pattern:          ║');
  console.log('║    1. Decouples sender from receiver                       ║');
  console.log('║    2. Allows dynamic chain configuration                   ║');
  console.log('║    3. Each handler has single responsibility               ║');
  console.log('║    4. Easy to add or remove handlers                       ║');
  console.log('║    5. Requests can be handled at any point in chain        ║');
  console.log('║    6. Open/Closed Principle - easy to extend               ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateChainOfResponsibility();

