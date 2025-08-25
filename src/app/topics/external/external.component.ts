import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section[app-external]',
  imports: [],
  templateUrl: './external.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalComponent {

}
