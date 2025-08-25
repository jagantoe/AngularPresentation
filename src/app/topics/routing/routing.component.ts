import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-routing]',
  imports: [CodeExampleComponent],
  templateUrl: './routing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutingComponent {

}
