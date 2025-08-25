import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BindingsComponent {
  text = "Never going to give you up";

  toggle = false;

  hoverText = "Hover me!";

  inputText = "wow";

  switch() {
    this.toggle = !this.toggle;
  }

  onMouseEnter() {
    this.hoverText = "You hovered me!";
  }
  onMouseLeave() {
    this.hoverText = "Hover me!";
  }
}
