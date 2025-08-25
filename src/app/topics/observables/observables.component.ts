import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeExampleComponent } from '../../code-example/code-example.component';

@Component({
  selector: 'section[app-observables]',
  imports: [CodeExampleComponent],
  templateUrl: './observables.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesComponent {

}
