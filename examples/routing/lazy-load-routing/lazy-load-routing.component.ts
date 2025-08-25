import { Routes } from '@angular/router';
import { HomeComponent, ProductListComponent } from '../routing-components';

var routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'user',
    loadChildren: () => import('../routing-components').then(m => m.userRoutes)
  }
];
