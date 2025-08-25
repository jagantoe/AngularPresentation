import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplaySubjectComponent {
  // A ReplaySubject will keep track of the last n emitted values and emit them to new subscribers
  private messageSubject = new ReplaySubject<string>(2);

  messageObservable$ = this.messageSubject.asObservable();

  // Store messages for each subscriber
  subscriberMessages: string[] = [];

  constructor() {
    this.messageObservable$.subscribe(message => {
      // Will receive all messages
      this.subscriberMessages.push(`${new Date().toLocaleTimeString()}: ${message}`);
    });

    this.messageSubject.next('Initial message');
    this.messageSubject.next('Next message');
    this.messageSubject.next('Last message');

    // Start a second subscription
    this.messageObservable$.subscribe(message => {
      // Will immediately receive the Next and Last messages because the buffer size is 2
      this.subscriberMessages.push(`${new Date().toLocaleTimeString()}: ${message}`);
    });
  }

  // Send a message through the Subject
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
