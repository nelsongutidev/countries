import { Routes } from '@angular/router';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full',
  },
  {
    path: 'countries',
    component: CountriesListComponent,
  },
  {
    path: 'countries/:id',
    loadComponent: () =>
      import('./pages/country-detail/country-detail.component').then(
        (m) => m.CountryDetailComponent
      ),
  },
];
