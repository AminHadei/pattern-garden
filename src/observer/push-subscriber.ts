import { Observer } from './observer-interfaces';
import { NewsEvent } from './news-agency';

/**
 * Push Notification Subscriber (Concrete Observer)
 * 
 * This observer receives news updates via push notifications.
 * It implements the Observer interface and responds to news events
 * by sending push notifications to mobile devices.
 */
export class PushSubscriber implements Observer {
  private deviceId: string;
  private receivedNews: NewsEvent[] = [];

  constructor(deviceId: string) {
    this.deviceId = deviceId;
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
    this.sendPushNotification(newsEvent);
  }

  /**
   * Send push notification about the news
   * @param newsEvent The news event to notify about
   */
  private sendPushNotification(newsEvent: NewsEvent): void {
    console.log(`🔔 Push notification sent to device ${this.deviceId}`);
    console.log(`   Title: ${newsEvent.title}`);
    console.log(`   Preview: ${newsEvent.content.substring(0, 40)}...`);
  }

  /**
   * Get the device ID
   * @returns The device ID
   */
  public getDeviceId(): string {
    return this.deviceId;
  }

  /**
   * Get all received news
   * @returns Array of received news events
   */
  public getReceivedNews(): NewsEvent[] {
    return [...this.receivedNews];
  }
}

