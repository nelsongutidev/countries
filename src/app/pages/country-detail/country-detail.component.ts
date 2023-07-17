import { Component, Input, computed, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent {
  countriesService = inject(CountriesService);
  country = this.countriesService.selectedCountry;
  currencies = computed(() => {
    const keys = Object.keys(this.country()?.currencies || {});
    if (keys.length === 0) {
      return 'No currencies found';
    }
    return keys.map((key) => this.country()?.currencies[key].name);
  });
  languages = computed(() => {
    const keys = Object.keys(this.country()?.languages || {});
    if (keys.length === 0) {
      return 'No languages found';
    }
    return keys.map((key) => this.country()?.languages[key]);
  });

  @Input() id = '';
  ngOnChanges(): void {
    this.countriesService.selectedCountryCode.set(this.id);
  }
}
