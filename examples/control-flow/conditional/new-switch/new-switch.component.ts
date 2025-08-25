import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-switch',
  imports: [],
  templateUrl: './new-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSwitchComponent {
  userType = 0;
}
