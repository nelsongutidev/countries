import {
  Component,
  Signal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryCardComponent } from 'src/app/components/country-card/country-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryCardComponent, RouterModule],
  templateUrl: './countries-list.component.html',
  styles: [],
})
export class CountriesListComponent {
  countriesService = inject(CountriesService);
  countries = this.countriesService.countries;
  searchTerm = signal<string>('');
  filteredCountries = computed(() =>
    this.countries().filter((c) =>
      c.name.common.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );

  search(term: any) {
    console.log('search', term);
    this.searchTerm.set(term);
  }

  filterByRegion(region: string) {
    console.log('region: ', region);
  }
}
