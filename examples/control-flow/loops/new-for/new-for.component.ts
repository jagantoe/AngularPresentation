import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-for',
  imports: [],
  templateUrl: './new-for.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewForComponent {
  list = ['Item 1', 'Item 2', 'Item 3'];
}
