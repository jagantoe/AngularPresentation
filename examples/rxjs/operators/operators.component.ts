import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bufferCount, delay, filter, map, tap, timer } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  template: '',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorsComponent {
  // There are many operators available in RxJS, most of them you won't come across in everyday use.
  // Docs: https://rxjs.dev/api

  // The timer$ observable emits every second
  timer$ = timer(0, 1000);

  // We can use the pipe function and operators to transform the emitted values
  dateTimer$ = this.timer$.pipe(
    filter(x => x % 2 === 0), // Filter which values are allowed to pass, in this case only allow even numbers
    map(() => new Date()), // Map the emitted value to another value
    tap(date => console.log(date)), // Side effect: log the emitted value, does not change the values
    delay(100), // Delay the emission by 100ms, useful for simulating network requests
    bufferCount(2) // Buffer the emitted values and emit them as an array when the buffer is full
  );
}
