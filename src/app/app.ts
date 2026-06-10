import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { translate } from '@jsverse/transloco';
import { HeroSection } from './hero-section/hero-section';
import { LanguageSwitcher } from './language-switcher/language-switcher';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LanguageSwitcher,
    FontAwesomeModule,
    Sidebar,
    HeroSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly title = inject(Title);
  private readonly faIconLibrary = inject(FaIconLibrary);

  constructor() {
    this.title.setTitle(`Hegedűs Péter | ${translate('personal.website')}`);
    this.faIconLibrary.addIconPacks(fas);
  }
}
