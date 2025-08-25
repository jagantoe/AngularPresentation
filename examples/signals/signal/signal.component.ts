import { ChangeDetectionStrategy, Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  private readonly value: WritableSignal<number> = signal(0);

  protected readonly readValue: Signal<number> = this.value.asReadonly();

  reset() {
    this.value.set(0);
  }

  increment() {
    this.value.update(currentValue => currentValue + 1);
  }

  reverse() {
    const val = this.value();
    const reversed = val.toString().split('').reverse().join('');
    this.value.set(+reversed);
  }
}
