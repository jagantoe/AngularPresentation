import { Routes } from '@angular/router';
import { ExamplePageComponent } from './example-page/example-page.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';

export const routes: Routes = [
    {
        path: 'examples',
        component: ExamplePageComponent
    },
    {
        path: 'presentation',
        component: PresentationComponent,
        children: [
            {
                'path': 'control-flow',
                component: ControlFlowComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'presentation',
        pathMatch: 'full'
    }
];
