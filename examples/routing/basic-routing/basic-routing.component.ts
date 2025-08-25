import { Routes } from '@angular/router';
import { HomeComponent, NotFoundComponent, ProductListComponent, UserComponent, UserProfileComponent, UserSecurityComponent } from '../routing-components';

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
    component: UserComponent,
    children: [
      {
        path: 'security',
        component: UserSecurityComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
