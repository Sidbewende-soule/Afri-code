import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'realisations',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
