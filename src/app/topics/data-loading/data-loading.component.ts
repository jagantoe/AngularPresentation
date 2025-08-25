import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeExampleComponent } from "../../code-example/code-example.component";

@Component({
  selector: 'section[app-data-loading]',
  imports: [CodeExampleComponent],
  templateUrl: './data-loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataLoadingComponent {

}
