import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'design',
    loadComponent: () => import('./components/design/design.component').then(m => m.DesignComponent)
  },
  {
    path: 'illustration',
    loadComponent: () => import('./components/illustration/illustration.component').then(m => m.IllustrationComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '',
    redirectTo: 'design',
    pathMatch: 'full',
  },
]
