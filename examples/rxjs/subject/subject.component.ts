import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectComponent {
  // Create a Subject to broadcast data, in this case strings will be emitted
  private messageSubject = new Subject<string>();

  // Though the subject can be subscribed on directly it's better to have a separate public observable for possible subscribers
  messageObservable$ = this.messageSubject.asObservable();

  // Store messages for each subscriber
  subscriberMessages: string[] = [];

  constructor() {
    this.messageObservable$.subscribe(message => {
      this.subscriberMessages.push(`${new Date().toLocaleTimeString()}: ${message}`);
    });
  }

  // Send a message through the Subject
  sendMessage(message: string) {
    // By calling next on the subject, we can send messages to all subscribers
    this.messageSubject.next(message);
  }
}
