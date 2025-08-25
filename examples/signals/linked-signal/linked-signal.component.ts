import { ChangeDetectionStrategy, Component, input, linkedSignal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkedSignalComponent {
  passedValue = input.required<string[]>();

  editableValue: WritableSignal<string[]> = linkedSignal(() => this.passedValue());

  update() {
    this.editableValue.set(this.editableValue().reverse());
    this.editableValue.update(x => x);
  }
}
