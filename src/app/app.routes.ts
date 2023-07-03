import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full',
  },
  {
    path: 'countries',
    loadComponent: () =>
      import('./pages/countries-list/countries-list.component').then(
        (m) => m.CountriesListComponent
      ),
  },
  {
    path: 'countries/:id',
    loadComponent: () =>
      import('./pages/country-detail/country-detail.component').then(
        (m) => m.CountryDetailComponent
      ),
  },
];
