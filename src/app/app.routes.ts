import { Routes } from '@angular/router';
import { ExamplePageComponent } from './example-page/example-page.component';

export const routes: Routes = [
    {
        path: 'examples',
        component: ExamplePageComponent
    },
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    }
];
