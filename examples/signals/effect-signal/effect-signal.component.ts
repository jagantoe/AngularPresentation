import { ChangeDetectionStrategy, Component, effect, model } from '@angular/core';
import { IncrementerComponent } from '../../../src/app/components/incrementer/incrementer.component';

@Component({
  selector: 'app-effect-signal',
  imports: [IncrementerComponent],
  templateUrl: './effect-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EffectSignalComponent {
  value = model(0);

  constructor() {
    effect(() => {
      console.log('Effect triggered:', this.value());
    })
  }
}
