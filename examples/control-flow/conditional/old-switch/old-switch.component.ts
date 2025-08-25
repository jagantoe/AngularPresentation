import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-old-switch',
  imports: [CommonModule],
  templateUrl: './old-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OldSwitchComponent {
  userType = 0;
}
