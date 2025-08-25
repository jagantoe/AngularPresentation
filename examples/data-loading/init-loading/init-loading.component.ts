import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Item } from '../../shared/interfaces';

@Component({
  selector: 'app-init-loading',
  templateUrl: './init-loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitLoadingComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  value: Item | null = null;

  async ngOnInit() {
    console.log('first');

    this.httpClient.get<Item>('/api/data').subscribe(data => {
      console.log('second');
      this.value = data;
    });

    console.log('third');

    this.value = await firstValueFrom(this.httpClient.get<Item>('/api/other-data'));

    console.log('fourth');
  }
}
