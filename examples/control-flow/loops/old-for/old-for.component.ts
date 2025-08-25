import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-old-for',
  imports: [CommonModule],
  templateUrl: './old-for.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OldForComponent {
  list = ['Item 1', 'Item 2', 'Item 3'];
}
