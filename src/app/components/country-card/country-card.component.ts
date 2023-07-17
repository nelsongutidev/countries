import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './country-card.component.html',
  styles: [],
})
export class CountryCardComponent {
  @Input({ required: true }) country: any; // type this
}
