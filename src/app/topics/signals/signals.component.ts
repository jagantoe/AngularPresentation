import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComputedSignalComponent } from '../../../../examples/signals/computed-signal/computed-signal.component';
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-signals]',
  imports: [CodeExampleComponent, ComputedSignalComponent],
  templateUrl: './signals.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

}
