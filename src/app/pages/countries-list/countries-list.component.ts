import { Component, Signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from 'src/app/services/countries.service';
import { toSignal } from '@angular/core/rxjs-interop';
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
}
