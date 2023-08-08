import { Injectable, effect, inject, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export const DATA_KEY = 'countries-theme';
export const THEMES = [
  'light',
  'dark',
  'cupcake',
  // 'bumblebee',
  // 'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  // 'garden',
  // 'forest',
  'aqua',
  // 'lofi',
  'pastel',
  // 'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  // 'cmyk',
  // 'autumn',
  'business',
  // 'acid',
  // 'lemonade',
  'night',
  'coffee',
  // 'wiqua',
];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  localStorageService = inject(LocalStorageService);

  selectedTheme = signal(this.localStorageService.getItem(DATA_KEY) || 'light');

  constructor() {
    effect(() => {
      this.localStorageService.setItem(DATA_KEY, this.selectedTheme());
    });
  }
}
