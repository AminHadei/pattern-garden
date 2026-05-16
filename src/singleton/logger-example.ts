import { SingletonLogger } from './logger';

/**
 * Singleton Pattern Example - Logger System
 * 
 * This example demonstrates the Singleton pattern for a logging system
 * that ensures only one logger instance exists throughout the application.
 * 
 * The Singleton pattern:
 * - Ensures a class has only one instance
 * - Provides a global point of access to that instance
 * - Prevents multiple instances from being created
 * - Useful for shared resources like loggers, database connections, etc.
 */

function demonstrateSingleton(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║         Singleton Pattern - Logger System Example         ║');
  console.log('║               Single Instance, Global Access              ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: Get the singleton instance
  console.log('📌 Example 1: Getting Singleton Instance');
  console.log('─'.repeat(60));
  const logger1 = SingletonLogger.getInstance();
  const logger2 = SingletonLogger.getInstance();

  // Verify they are the same instance
  console.log(`logger1 === logger2: ${logger1 === logger2}`);
  console.log(`Same instance: ${Object.is(logger1, logger2)}\n`);

  // Example 2: Logging from different parts of the application
  console.log('📌 Example 2: Logging from Different Modules');
  console.log('─'.repeat(60));
  
  // Simulate logging from different modules
  function userService() {
    const logger = SingletonLogger.getInstance();
    logger.info('User service initialized');
    logger.debug('Loading user data from database');
  }

  function orderService() {
    const logger = SingletonLogger.getInstance();
    logger.info('Order service initialized');
    logger.warn('Low stock detected for product ID: 12345');
  }

  function paymentService() {
    const logger = SingletonLogger.getInstance();
    logger.info('Payment service initialized');
    logger.error('Payment gateway connection failed');
  }

  // All services use the same logger instance
  userService();
  orderService();
  paymentService();
  console.log();

  // Example 3: Accessing logs from anywhere
  console.log('📌 Example 3: Accessing Logs from Anywhere');
  console.log('─'.repeat(60));
  const logger3 = SingletonLogger.getInstance();
  const allLogs = logger3.getLogs();
  console.log(`Total log entries: ${logger3.getLogCount()}`);
  console.log('\nAll logs:');
  allLogs.forEach((log, index) => {
    console.log(`  ${index + 1}. ${log}`);
  });
  console.log();

  // Example 4: Multiple references, same instance
  console.log('📌 Example 4: Multiple References to Same Instance');
  console.log('─'.repeat(60));
  
  // Create multiple references
  const loggerA = SingletonLogger.getInstance();
  const loggerB = SingletonLogger.getInstance();
  const loggerC = SingletonLogger.getInstance();

  // All references point to the same instance
  loggerA.info('Message from loggerA');
  loggerB.warn('Message from loggerB');
  loggerC.error('Message from loggerC');

  // All logs are stored in the same instance
  console.log(`\nTotal logs after all operations: ${loggerA.getLogCount()}`);
  console.log(`All references show same count: ${loggerB.getLogCount() === loggerC.getLogCount()}\n`);

  // Example 5: Practical use case - Application-wide logging
  console.log('📌 Example 5: Application-Wide Logging');
  console.log('─'.repeat(60));
  
  // Simulate application lifecycle
  function applicationStartup() {
    const logger = SingletonLogger.getInstance();
    logger.info('Application starting...');
    logger.debug('Loading configuration');
    logger.debug('Initializing database connection');
    logger.info('Application started successfully');
  }

  function handleUserRequest(userId: string) {
    const logger = SingletonLogger.getInstance();
    logger.info(`Processing request for user: ${userId}`);
    logger.debug(`Fetching user data for ID: ${userId}`);
    logger.info(`Request completed for user: ${userId}`);
  }

  function handleError(error: string) {
    const logger = SingletonLogger.getInstance();
    logger.error(`Application error: ${error}`);
    logger.warn('Attempting to recover from error');
  }

  // Simulate application flow
  applicationStartup();
  handleUserRequest('user-123');
  handleUserRequest('user-456');
  handleError('Database connection timeout');
  handleUserRequest('user-789');

  // Display final log summary
  const finalLogger = SingletonLogger.getInstance();
  console.log(`\n📊 Final Log Summary:`);
  console.log(`   Total log entries: ${finalLogger.getLogCount()}`);
  const logs = finalLogger.getLogs();
  const infoCount = logs.filter(log => log.includes('[INFO]')).length;
  const warnCount = logs.filter(log => log.includes('[WARN]')).length;
  const errorCount = logs.filter(log => log.includes('[ERROR]')).length;
  const debugCount = logs.filter(log => log.includes('[DEBUG]')).length;
  
  console.log(`   INFO: ${infoCount}`);
  console.log(`   WARN: ${warnCount}`);
  console.log(`   ERROR: ${errorCount}`);
  console.log(`   DEBUG: ${debugCount}`);

  // Summary
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Singleton Pattern:                        ║');
  console.log('║    1. Ensures only one instance exists                     ║');
  console.log('║    2. Provides global access point                         ║');
  console.log('║    3. Efficient resource usage                             ║');
  console.log('║    4. Consistent behavior across application               ║');
  console.log('║    5. Controlled access to shared resource                 ║');
  console.log('║    6. Lazy initialization (creates when needed)            ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateSingleton();

