import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    loadChildren: () => import('./layout/layout.routes').then(
      c => c.featuresLayoutRoutes
    )
  }
];
