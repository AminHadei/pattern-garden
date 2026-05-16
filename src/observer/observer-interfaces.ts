/**
 * Observer Interface
 * 
 * Defines the interface that all observers must implement.
 * Observers are notified when the subject's state changes.
 */
export interface Observer {
  /**
   * Called when the subject's state changes
   * @param data Optional data passed from the subject
   */
  update(data?: any): void;
}

/**
 * Subject Interface
 * 
 * Defines the interface for objects that can be observed.
 * Subjects maintain a list of observers and notify them of state changes.
 */
export interface Subject {
  /**
   * Attach an observer to the subject
   * @param observer The observer to attach
   */
  attach(observer: Observer): void;

  /**
   * Detach an observer from the subject
   * @param observer The observer to detach
   */
  detach(observer: Observer): void;

  /**
   * Notify all attached observers of a state change
   * @param data Optional data to pass to observers
   */
  notify(data?: any): void;
}

