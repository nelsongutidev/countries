import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

const THEMES = ['cupcake', 'dark', 'light'];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  theme = 'cupcake';

  toggleTheme() {
    const restOfThemes = THEMES.filter((theme) => theme !== this.theme);
    const randomTheme =
      restOfThemes[Math.floor(Math.random() * restOfThemes.length)];
    this.theme = randomTheme;
  }
}
