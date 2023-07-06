import { Injectable, computed, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { shareReplay } from 'rxjs';

const baseURL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly httpClient: HttpClient) {
    effect(() => {
      this.countries();
      console.log('his.countries(): ', this.countries());
    });
  }
  private countries$ = this.httpClient
    .get<any[]>(`${baseURL}/all`) //type this
    .pipe(shareReplay(1));

  countries = toSignal(this.countries$, { initialValue: [] });
  selectedCountryCode = signal<string>('');
  selectedCountry = computed(() => {
    return this.countries().find(
      ({ cca2 }) => cca2 === this.selectedCountryCode()
    );
  });
}
