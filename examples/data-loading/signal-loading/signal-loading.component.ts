import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, input, resource } from '@angular/core';
import { Item } from '../../shared/interfaces';

@Component({
  selector: 'app-signal-loading',
  imports: [],
  templateUrl: './signal-loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalLoadingComponent {
  id = input.required<number>();

  value = resource({
    params: () => ({ id: this.id() }),
    loader: async ({ params }) => fetch(`/api/data?id=${params.id}`).then(response => response.json() as Item)
  });

  valueSignal = httpResource<Item>(() => `/api/data?id=${this.id()}`);
}
