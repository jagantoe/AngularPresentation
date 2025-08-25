import { HttpClient } from '@angular/common/http';
import { ApplicationConfig, ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ActivatedRouteSnapshot, provideRouter, RouterStateSnapshot, withComponentInputBinding } from '@angular/router';
import { Item } from '../../shared/interfaces';
import { ResolverLoadingComponent } from '../resolver-loading/resolver-loading.component';

@Component({
  selector: 'app-resolver-loading-input-binding',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResolverLoadingInputBindingComponent {
  // Because we configured withComponentInputBinding Angular will automatically bind the resolved data to the matching inputs.
  item = input.required<Item>();
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
];

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideRouter(routes, withComponentInputBinding()),
  ]
};
