import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent {
  ngOnInit(): void {
    console.log('here');
  }
}
