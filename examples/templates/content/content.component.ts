import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {

}
