import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterpolationComponent {
  text = "Hello World!";
  color = "red";
  a = 5;
  b = 6;

  obj = { name: "Bob", age: 30 }
}
