import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { THEMES, ThemeService } from 'src/app/services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  themeService = inject(ThemeService);
  theme = this.themeService.theme;

  toggleTheme() {
    const restOfThemes = THEMES.filter((theme) => theme !== this.theme());
    const randomTheme =
      restOfThemes[Math.floor(Math.random() * restOfThemes.length)];
    this.theme.set(randomTheme);
  }
}
