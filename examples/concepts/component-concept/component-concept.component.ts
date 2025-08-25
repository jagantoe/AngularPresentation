import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-concept',
  imports: [],
  templateUrl: './component-concept.component.html',
  styles: `
    :host {
      font-size: small;
    }
    .component-example {
      padding: 1rem;
      border: 2px solid #3f51b5;
      border-radius: 4px;
    }

    .title {
      color: #3f51b5;
      font-weight: bold;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentConceptComponent {
  // Component properties
  title = 'Component Example';
  counter = 0;

  // Component methods
  incrementCounter() {
    this.counter++;
  }
}
