import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-model-signal',
  imports: [],
  templateUrl: './model-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelSignalComponent {
  value = input<string>('Initial Value');
  valueChanged = output<string>();

  anotherValue = model<string>('Initial Value');
}
