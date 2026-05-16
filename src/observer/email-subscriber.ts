import { Observer } from './observer-interfaces';
import { NewsEvent } from './news-agency';

/**
 * Email Subscriber (Concrete Observer)
 * 
 * This observer receives news updates via email.
 * It implements the Observer interface and responds to news events
 * by sending email notifications.
 */
export class EmailSubscriber implements Observer {
  private name: string;
  private email: string;
  private receivedNews: NewsEvent[] = [];

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  /**
   * Called when the subject (News Agency) publishes news
   * @param newsEvent The news event data
   */
  public update(newsEvent?: NewsEvent): void {
    if (!newsEvent) {
      return;
    }

    this.receivedNews.push(newsEvent);
    this.sendEmail(newsEvent);
  }

  /**
   * Send email notification about the news
   * @param newsEvent The news event to notify about
   */
  private sendEmail(newsEvent: NewsEvent): void {
    console.log(`📧 Email sent to ${this.email}`);
    console.log(`   Subject: Breaking News - ${newsEvent.title}`);
    console.log(`   Body: ${newsEvent.content.substring(0, 50)}...`);
    console.log(`   Category: ${newsEvent.category}`);
  }

  /**
   * Get the subscriber's name
   * @returns The subscriber's name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Get the subscriber's email
   * @returns The subscriber's email
   */
  public getEmail(): string {
    return this.email;
  }

  /**
   * Get all received news
   * @returns Array of received news events
   */
  public getReceivedNews(): NewsEvent[] {
    return [...this.receivedNews];
  }
}

