import { Observer } from './observer-interfaces';
import { NewsEvent } from './news-agency';

/**
 * SMS Subscriber (Concrete Observer)
 * 
 * This observer receives news updates via SMS.
 * It implements the Observer interface and responds to news events
 * by sending SMS notifications.
 */
export class SMSSubscriber implements Observer {
  private name: string;
  private phoneNumber: string;
  private receivedNews: NewsEvent[] = [];

  constructor(name: string, phoneNumber: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
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
    this.sendSMS(newsEvent);
  }

  /**
   * Send SMS notification about the news
   * @param newsEvent The news event to notify about
   */
  private sendSMS(newsEvent: NewsEvent): void {
    console.log(`📱 SMS sent to ${this.phoneNumber}`);
    console.log(`   Message: ${newsEvent.title} - ${newsEvent.content.substring(0, 30)}...`);
  }

  /**
   * Get the subscriber's name
   * @returns The subscriber's name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Get the subscriber's phone number
   * @returns The subscriber's phone number
   */
  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  /**
   * Get all received news
   * @returns Array of received news events
   */
  public getReceivedNews(): NewsEvent[] {
    return [...this.receivedNews];
  }
}

