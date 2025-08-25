import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-let',
  templateUrl: './let.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetComponent {
  a = 5;
  b = 10;
}
