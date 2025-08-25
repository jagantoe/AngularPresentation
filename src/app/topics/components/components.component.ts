import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-components]',
  imports: [CodeExampleComponent],
  templateUrl: './components.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {

}
