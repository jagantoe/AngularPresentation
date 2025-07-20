import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeExampleComponent } from '../code-example/code-example.component';

@Component({
  selector: 'app-example-page',
  imports: [CodeExampleComponent],
  templateUrl: './example-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePageComponent {

}
