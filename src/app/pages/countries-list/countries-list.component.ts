import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryCardComponent } from 'src/app/components/country-card/country-card.component';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryCardComponent, RouterModule],
  templateUrl: './countries-list.component.html',
  styles: [],
})
export class CountriesListComponent {
  countriesService = inject(CountriesService);
  countries = toSignal(this.countriesService.getCountries(), {
    initialValue: [],
  });

  searchTerm = signal<string>('');
  selectedRegion = signal<string>('All');
  filteredCountries = computed(() => {
    if (this.selectedRegion() !== 'All') {
      return this.countries().filter(
        (c) =>
          c.region === this.selectedRegion() &&
          c.name.common.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
    }

    return this.countries().filter((c) =>
      c.name.common.toLowerCase().includes(this.searchTerm().toLowerCase())
    );
  });
  regions: string[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  search(term: any) {
    this.searchTerm.set(term);
  }

  onRegionChange(region: any) {
    this.selectedRegion.set(region?.target.value);
  }
}
