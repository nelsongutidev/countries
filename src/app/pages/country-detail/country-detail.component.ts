import {
  Component,
  Input,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-country-detail',
    imports: [RouterModule],
    templateUrl: './country-detail.component.html',
    styles: []
})
export class CountryDetailComponent {
  countriesService = inject(CountriesService);

  id = input();
  country = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => this.countriesService.getCountryByCca3(id as any))
    )
  );
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
}
