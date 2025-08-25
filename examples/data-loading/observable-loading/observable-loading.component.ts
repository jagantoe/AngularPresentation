import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Item } from '../../shared/interfaces';

@Component({
  selector: 'app-observable-loading',
  imports: [AsyncPipe],
  templateUrl: './observable-loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableLoadingComponent {
  http = inject(HttpClient);

  item$ = this.http.get<Item>('/api/data');
}
