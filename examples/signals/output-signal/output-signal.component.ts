import { ChangeDetectionStrategy, Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-output-signal',
  imports: [],
  templateUrl: './output-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputSignalComponent {
  @Output() valueChanged = new EventEmitter<string>();

  valueChangedAgain = output<string>();

  method1() {
    this.valueChanged.emit('Value from method1');
  }
  method2() {
    this.valueChangedAgain.emit('Value from method2');
  }
}
