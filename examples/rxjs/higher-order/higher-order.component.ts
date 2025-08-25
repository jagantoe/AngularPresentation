import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { concatMap, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-higher-order',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HigherOrderComponent {
  // In many cases you will create new observables based on the emissions of existing ones.
  // The most common example is making API calls based on user input.

  // You can use higher-order mapping operators like switchMap, mergeMap, or concatMap to do this efficiently.
  private readonly http = inject(HttpClient);

  userInput = signal(''); // Simulated user input signal

  searchMerge$ = toObservable(this.userInput).pipe(
    // mergeMap will act as a funnel, all inner observables will emit their values as they arrive
    mergeMap(query => this.http.get("/search", { params: { q: query } }))
  );

  searchConcat$ = toObservable(this.userInput).pipe(
    // concatMap will wait for each inner observable to complete before moving to the next, this ensures the order is maintained
    concatMap(query => this.http.get("/search", { params: { q: query } }))
  );

  searchSwitch$ = toObservable(this.userInput).pipe(
    // switchMap will unsubscribe from the previous observable when a new value arrives, this allows you to cancel API calls on new user input
    switchMap(query => this.http.get("/search", { params: { q: query } }))
  );
}
