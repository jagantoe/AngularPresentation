import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-input-signal',
  imports: [],
  templateUrl: './input-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSignalComponent {
  @Input() text1: string = '';
  @Input({ required: true }) text2: string = '';

  text3 = input<string>('');
  text4 = input.required<string>();
}
