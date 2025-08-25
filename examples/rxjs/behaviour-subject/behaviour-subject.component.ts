import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BehaviourSubjectComponent {
  // A BehaviourSubject has a current value and emits it to new subscribers, it must be initialized with an initial value
  private messageSubject = new BehaviorSubject<string>("Initial");

  messageObservable$ = this.messageSubject.asObservable();

  // Store messages for each subscriber
  subscriberMessages: string[] = [];

  constructor() {
    this.messageObservable$.subscribe(message => {
      // Will receive all messages
      this.subscriberMessages.push(`${new Date().toLocaleTimeString()}: ${message}`);
    });

    // Each new message will be stored as the current value
    this.messageSubject.next('Next message');
    this.messageSubject.next('Last message');

    // Start a second subscription
    this.messageObservable$.subscribe(message => {
      // Will immediately receive 'Last message' because that is it's current value
      this.subscriberMessages.push(`${new Date().toLocaleTimeString()}: ${message}`);
    });

    // We can access the value synchronously
    const val1 = this.messageSubject.value;
    const val2 = this.messageSubject.getValue();
  }

  // Send a message through the Subject
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
