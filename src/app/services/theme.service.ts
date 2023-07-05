import { Injectable, signal } from '@angular/core';

export const THEMES = ['cupcake', 'dark', 'light'];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  theme = signal('light');
}
