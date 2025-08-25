import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BindingsComponent } from "../../../../examples/basics/bindings/bindings.component";
import { InterpolationComponent } from "../../../../examples/basics/interpolation/interpolation.component";
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-basics]',
  imports: [CodeExampleComponent, InterpolationComponent, BindingsComponent],
  templateUrl: './basics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicsComponent {

}
