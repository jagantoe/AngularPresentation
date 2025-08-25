import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Item } from '../../../shared/interfaces';

@Component({
  selector: 'app-new-if',
  imports: [],
  templateUrl: './new-if.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewIfComponent {
  item: Item | null | undefined = undefined;
}
