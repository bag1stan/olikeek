import {Route} from '@angular/router';

export const featuresLayoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then(
        (m) => m.LayoutComponent
      ),
  },
  ]
