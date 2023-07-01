import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/countries-list/countries-list.component').then(
        (m) => m.CountriesListComponent
      ),
  },
  {
    path: 'country/:id',
    loadComponent: () =>
      import('./pages/country-detail/country-detail.component').then(
        (m) => m.CountryDetailComponent
      ),
  },
];
