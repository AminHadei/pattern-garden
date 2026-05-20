import { NewsAgency } from './news-agency';
import { EmailSubscriber } from './email-subscriber';
import { SMSSubscriber } from './sms-subscriber';
import { PushSubscriber } from './push-subscriber';

/**
 * Observer Pattern Example - News Notification System
 * 
 * This example demonstrates the Observer pattern for a news notification system
 * where multiple subscribers (observers) are notified when news is published.
 * 
 * The Observer pattern:
 * - Defines a one-to-many dependency between objects
 * - When one object (subject) changes state, all dependent objects (observers) are notified
 * - Decouples the subject from its observers
 * - Allows dynamic subscription and unsubscription
 */

function demonstrateObserver(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║        Observer Pattern - News Notification System        ║');
  console.log('║                Subscribe, Notify, Decouple                ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Create the news agency (subject)
  const newsAgency = new NewsAgency();

  // Example 1: Basic subscription and notification
  console.log('📌 Example 1: Basic Subscription and Notification');
  console.log('─'.repeat(60));

  // Create subscribers (observers)
  const emailSubscriber1 = new EmailSubscriber('John Doe', 'john@example.com');
  const smsSubscriber1 = new SMSSubscriber('Jane Smith', '+1234567890');

  // Subscribe to news
  newsAgency.attach(emailSubscriber1);
  newsAgency.attach(smsSubscriber1);

  console.log(`Subscribers: ${newsAgency.getSubscriberCount()}\n`);

  // Publish news - all subscribers will be notified
  newsAgency.publishNews(
    'Breaking: New Technology Announced',
    'A revolutionary new technology has been announced that will change the industry forever.',
    'Technology'
  );
  console.log();

  // Example 2: Multiple subscribers with different notification methods
  console.log('📌 Example 2: Multiple Subscribers with Different Methods');
  console.log('─'.repeat(60));

  // Add more subscribers
  const emailSubscriber2 = new EmailSubscriber('Bob Johnson', 'bob@example.com');
  const smsSubscriber2 = new SMSSubscriber('Alice Brown', '+0987654321');
  const pushSubscriber1 = new PushSubscriber('device-12345');

  newsAgency.attach(emailSubscriber2);
  newsAgency.attach(smsSubscriber2);
  newsAgency.attach(pushSubscriber1);

  console.log(`Total subscribers: ${newsAgency.getSubscriberCount()}\n`);

  // Publish news - all subscribers receive notifications
  newsAgency.publishNews(
    'Sports Update: Championship Game Results',
    'The championship game concluded with an exciting finish. Final score: 98-95.',
    'Sports'
  );
  console.log();

  // Example 3: Unsubscribing
  console.log('📌 Example 3: Unsubscribing from Notifications');
  console.log('─'.repeat(60));

  // Unsubscribe one observer
  newsAgency.detach(emailSubscriber1);
  console.log(`Subscribers after unsubscribe: ${newsAgency.getSubscriberCount()}\n`);

  // Publish news - unsubscribed observer won't receive notification
  newsAgency.publishNews(
    'Weather Alert: Severe Storm Warning',
    'A severe storm warning has been issued for the region. Please take necessary precautions.',
    'Weather'
  );
  console.log();

  // Example 4: Dynamic subscription during runtime
  console.log('📌 Example 4: Dynamic Subscription');
  console.log('─'.repeat(60));

  // New subscriber joins during runtime
  const newSubscriber = new PushSubscriber('device-67890');
  newsAgency.attach(newSubscriber);
  console.log(`New subscriber added. Total: ${newsAgency.getSubscriberCount()}\n`);

  // Publish news - new subscriber receives notification
  newsAgency.publishNews(
    'Business News: Market Update',
    'Stock markets closed higher today with technology stocks leading the gains.',
    'Business'
  );
  console.log();

  // Example 5: News history and subscriber tracking
  console.log('📌 Example 5: News History and Subscriber Tracking');
  console.log('─'.repeat(60));

  const newsHistory = newsAgency.getSubscriberCount();
  console.log(`Total news published: ${newsAgency.getNewsHistory().length}`);
  console.log(`Active subscribers: ${newsAgency.getSubscriberCount()}`);

  // Check what news each subscriber received
  console.log('\nNews received by subscribers:');
  console.log(`Email Subscriber (${emailSubscriber2.getEmail()}): ${emailSubscriber2.getReceivedNews().length} news`);
  console.log(`SMS Subscriber (${smsSubscriber2.getPhoneNumber()}): ${smsSubscriber2.getReceivedNews().length} news`);
  console.log(`Push Subscriber (${pushSubscriber1.getDeviceId()}): ${pushSubscriber1.getReceivedNews().length} news`);
  console.log(`New Push Subscriber (${newSubscriber.getDeviceId()}): ${newSubscriber.getReceivedNews().length} news`);
  console.log();

  // Example 6: Category-based filtering (conceptual)
  console.log('📌 Example 6: Publishing Different Categories');
  console.log('─'.repeat(60));

  // Publish news in different categories
  newsAgency.publishNews(
    'Entertainment: Movie Premiere',
    'The highly anticipated movie premiered to rave reviews from critics.',
    'Entertainment'
  );

  newsAgency.publishNews(
    'Science: New Discovery',
    'Scientists have made a groundbreaking discovery in quantum physics.',
    'Science'
  );
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Observer Pattern:                         ║');
  console.log('║    1. Loose coupling between subject and observers         ║');
  console.log('║    2. Dynamic subscription and unsubscription              ║');
  console.log('║    3. One-to-many dependency management                    ║');
  console.log('║    4. Open/Closed Principle - easy to add new observers    ║');
  console.log('║    5. Subject doesn\'t need to know observer details       ║');
  console.log('║    6. Supports broadcast communication                     ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateObserver();


