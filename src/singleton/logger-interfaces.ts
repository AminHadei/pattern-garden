/**
 * Logger Interface
 * 
 * Defines the common interface that all logger implementations must implement.
 * This allows the client code to work with any logger without
 * knowing the specific implementation details.
 */

export interface Logger {
  /**
   * Log an informational message
   * @param message The message to log
   */
  info(message: string): void;

  /**
   * Log a warning message
   * @param message The message to log
   */
  warn(message: string): void;

  /**
   * Log an error message
   * @param message The message to log
   */
  error(message: string): void;

  /**
   * Log a debug message
   * @param message The message to log
   */
  debug(message: string): void;

  /**
   * Get all logged messages
   * @returns Array of all log entries
   */
  getLogs(): string[];

  /**
   * Clear all logs
   */
  clearLogs(): void;
}

