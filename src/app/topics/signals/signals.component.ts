import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComputedSignalComponent } from '../../../../examples/signals/computed-signal/computed-signal.component';
import { EffectSignalComponent } from "../../../../examples/signals/effect-signal/effect-signal.component";
import { SignalComponent } from "../../../../examples/signals/signal/signal.component";
import { CodeExampleComponent } from "../../code-example/code-example.component";
import { IncrementerComponent } from '../../components/incrementer/incrementer.component';

@Component({
  selector: 'section[app-signals]',
  imports: [CodeExampleComponent, ComputedSignalComponent, IncrementerComponent, SignalComponent, EffectSignalComponent],
  templateUrl: './signals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

}
