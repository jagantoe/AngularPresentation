import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Item } from '../../../shared/interfaces';

@Component({
  selector: 'app-old-if',
  imports: [CommonModule],
  templateUrl: './old-if.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OldIfComponent {
  item: Item | null | undefined = undefined;
}
