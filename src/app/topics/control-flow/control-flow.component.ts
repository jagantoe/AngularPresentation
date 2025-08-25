import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-control-flow]',
  imports: [CodeExampleComponent],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlFlowComponent {

}
