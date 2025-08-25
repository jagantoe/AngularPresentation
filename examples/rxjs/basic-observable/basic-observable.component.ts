import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-basic-observable',
  imports: [],
  standalone: true,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicObservableComponent implements OnInit {
  ngOnInit() {
    // We can create our own observables
    // The convention dictates that we denote observables with a $ suffix
    const observable$ = new Observable<number>(subscriber => {
      console.log('Observable execution started');
      subscriber.next(1); // Emit first value
      subscriber.next(2); // Emit second value
      subscriber.next(3); // Emit third value
      setTimeout(() => {
        subscriber.next(4); // Emit fourth value after delay
        subscriber.complete(); // Complete the observable
      }, 1000);
    });
    // Or we can use existing operators provided by RxJS to create observables
    // This observable will start after 1 second and emit increasing numbers every 2 seconds
    const timer$ = timer(1000, 2000);

    // Subscribing to the observable will make it run in the background
    // It will call the appropriate callbacks when the subscriber emits them
    // It also returns a subscription object that we can use to unsubscribe manually to stop listening
    const subscription = observable$.subscribe({
      next: value => console.log('Next:', value),
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
    subscription.unsubscribe(); // Unsubscribe from the observable

    // We can also turn the timer observable into a promise
    // Deprecated - Using toPromise
    const timerToPromise = observable$.toPromise();
    // Preferred - Using firstValueFrom, will stop the subscription after the first value has been emitted
    const timerFirstValueFrom = firstValueFrom(observable$);
    // Alternative - Using lastValueFrom, will return the last emitted value when the observable completes
    const timerLastValueFrom = lastValueFrom(observable$);
  }
}
