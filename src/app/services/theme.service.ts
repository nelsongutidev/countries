import { Injectable, signal } from '@angular/core';

export const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'retro',
  'aqua',
];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  theme = signal('light');
}
