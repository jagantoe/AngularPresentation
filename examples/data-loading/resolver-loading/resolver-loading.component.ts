import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Item } from '../../shared/interfaces';

@Component({
  selector: 'app-resolver-loading',
  template: '',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResolverLoadingComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  item: Item | null = null;

  ngOnInit() {
    // Asynchronous via subscription
    this.route.data.subscribe(data => {
      this.item = data['item'];
    });

    // Synchronous via snapshot
    this.item = this.route.snapshot.data['item'];
  }
}

const resolverFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const http = inject(HttpClient);
  const id = route.paramMap.get('id');
  return http.get<Item>(`/api/data?id=${id}`);
};

const routes = [
  // ...
  {
    path: '',
    component: ResolverLoadingComponent,
    // Resolve data is an object where you provide for each key how the data is fetched.
    // Either using an Resolver function or ResolverService.
    // Angular will call the resolver and wait for it to resolve before the route is activated.
    resolve: {
      item: resolverFn
    }
  }
]
