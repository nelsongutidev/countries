import { Component, inject } from '@angular/core';
import { THEMES, ThemeService } from 'src/app/services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navigation',
    imports: [RouterLink],
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  themeService = inject(ThemeService);
  selectedTheme = this.themeService.selectedTheme;
  themes = THEMES;

  onThemeChange(event: any) {
    this.themeService.selectedTheme.set(event?.target.value);
  }
}
