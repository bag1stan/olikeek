import {Route} from '@angular/router';

export const featuresLayoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        loadComponent: () =>
          import('../pages/main/main.component').then(
            (m) => m.MainComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'main',
      },
    ]
  },
]
