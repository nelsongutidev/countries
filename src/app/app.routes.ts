import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/countries-list/countries-list.component').then(
        (m) => m.CountriesListComponent
      ),
  },
];
