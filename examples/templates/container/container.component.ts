import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [NgIf, NgFor],
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  showExtraInfo = true;
}
