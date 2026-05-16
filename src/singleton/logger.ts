import { Logger } from './logger-interfaces';

/**
 * Singleton Logger Class
 * 
 * The Singleton pattern ensures that a class has only one instance
 * and provides a global point of access to that instance.
 * 
 * This Logger implementation:
 * - Maintains a single instance throughout the application lifecycle
 * - Provides thread-safe access (in a single-threaded JavaScript environment)
 * - Stores all log messages in memory
 * - Provides methods for different log levels (info, warn, error, debug)
 * 
 * Benefits:
 * - Single point of control for logging
 * - Consistent logging behavior across the application
 * - Efficient resource usage (only one logger instance)
 * - Easy to access from anywhere in the application
 */
export class SingletonLogger implements Logger {
  private static instance: SingletonLogger | null = null;
  private logs: string[] = [];

  /**
   * Private constructor to prevent direct instantiation
   * This ensures that only one instance can be created
   */
  private constructor() {
    // Private constructor prevents external instantiation
  }

  /**
   * Get the singleton instance of the Logger
   * 
   * This method implements the lazy initialization pattern:
   * - Creates the instance only when first requested
   * - Returns the same instance on subsequent calls
   * 
   * @returns The singleton Logger instance
   */
  public static getInstance(): SingletonLogger {
    if (SingletonLogger.instance === null) {
      SingletonLogger.instance = new SingletonLogger();
    }
    return SingletonLogger.instance;
  }

  /**
   * Log an informational message
   * @param message The message to log
   */
  public info(message: string): void {
    const logEntry = `[INFO] ${new Date().toISOString()} - ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  /**
   * Log a warning message
   * @param message The message to log
   */
  public warn(message: string): void {
    const logEntry = `[WARN] ${new Date().toISOString()} - ${message}`;
    this.logs.push(logEntry);
    console.warn(logEntry);
  }

  /**
   * Log an error message
   * @param message The message to log
   */
  public error(message: string): void {
    const logEntry = `[ERROR] ${new Date().toISOString()} - ${message}`;
    this.logs.push(logEntry);
    console.error(logEntry);
  }

  /**
   * Log a debug message
   * @param message The message to log
   */
  public debug(message: string): void {
    const logEntry = `[DEBUG] ${new Date().toISOString()} - ${message}`;
    this.logs.push(logEntry);
    console.debug(logEntry);
  }

  /**
   * Get all logged messages
   * @returns Array of all log entries
   */
  public getLogs(): string[] {
    return [...this.logs]; // Return a copy to prevent external modification
  }

  /**
   * Clear all logs
   */
  public clearLogs(): void {
    this.logs = [];
  }

  /**
   * Get the total number of log entries
   * @returns The number of log entries
   */
  public getLogCount(): number {
    return this.logs.length;
  }

  /**
   * Reset the singleton instance (useful for testing)
   * This method should be used with caution in production code
   */
  public static resetInstance(): void {
    SingletonLogger.instance = null;
  }
}

