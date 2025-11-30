import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'context-files',
    loadComponent: () =>
      import('./features/context-files/context-files').then(m => m.ContextFiles),
  },
  {
    path: 'configuration',
    loadComponent: () =>
      import('./features/configuration/configuration').then(m => m.Configuration),
  },
];
