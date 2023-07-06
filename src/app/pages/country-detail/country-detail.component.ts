import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent {
  countriesService = inject(CountriesService);
  country = this.countriesService.selectedCountry;
  @Input() id = '';
  ngOnInit(): void {
    this.countriesService.getCountry(this.id);
  }

  ngOnDestroy() {
    this.countriesService.selectedCountry.set(null);
  }
}
