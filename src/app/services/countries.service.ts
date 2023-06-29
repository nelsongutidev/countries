import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllCountries(): Observable<any[]> {
    return this.httpClient.get<[]>(`${baseURL}/all`);
  }
}
