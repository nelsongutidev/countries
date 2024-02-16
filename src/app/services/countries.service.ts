import { Injectable, computed, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, retry, shareReplay } from 'rxjs';

const baseURL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient
      .get<any[]>(`${baseURL}/all`) //type this
      .pipe(shareReplay(1), retry(3));
  }

  getCountryByCca3(code: string) {
    return this.httpClient
      .get(`${baseURL}/alpha/${code}`)
      .pipe(map((response: any) => response[0]));
  }
}
