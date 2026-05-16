import { Subject, Observer } from './observer-interfaces';

/**
 * News Event Data
 * 
 * Represents a news event that can be published to observers
 */
export interface NewsEvent {
  title: string;
  content: string;
  category: string;
  timestamp: Date;
}

/**
 * News Agency (Subject)
 * 
 * The News Agency is the subject in the Observer pattern.
 * It maintains a list of observers (subscribers) and notifies them
 * when new news is published.
 * 
 * This implementation:
 * - Maintains a list of observers
 * - Allows observers to subscribe and unsubscribe
 * - Notifies all observers when news is published
 * - Tracks published news events
 */
export class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private newsHistory: NewsEvent[] = [];

  /**
   * Attach an observer to receive news updates
   * @param observer The observer to attach
   */
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return;
    }
    this.observers.push(observer);
  }

  /**
   * Detach an observer from receiving news updates
   * @param observer The observer to detach
   */
  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }
    this.observers.splice(observerIndex, 1);
  }

  /**
   * Notify all observers about a news event
   * @param newsEvent The news event to notify observers about
   */
  public notify(newsEvent?: NewsEvent): void {
    if (!newsEvent) {
      return;
    }

    // Store the news in history
    this.newsHistory.push(newsEvent);

    // Notify all observers
    for (const observer of this.observers) {
      observer.update(newsEvent);
    }
  }

  /**
   * Publish a new news event
   * @param title The news title
   * @param content The news content
   * @param category The news category
   */
  public publishNews(title: string, content: string, category: string): void {
    const newsEvent: NewsEvent = {
      title,
      content,
      category,
      timestamp: new Date(),
    };

    this.notify(newsEvent);
  }

  /**
   * Get the number of subscribers
   * @returns The number of attached observers
   */
  public getSubscriberCount(): number {
    return this.observers.length;
  }

  /**
   * Get the news history
   * @returns Array of all published news events
   */
  public getNewsHistory(): NewsEvent[] {
    return [...this.newsHistory];
  }
}

