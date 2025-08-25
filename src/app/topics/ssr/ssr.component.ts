import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section[app-ssr]',
  imports: [],
  templateUrl: './ssr.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SsrComponent {

}
