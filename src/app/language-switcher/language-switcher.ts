import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';
import { SelectModule } from 'primeng/select';
import { Language } from '../utils/enums';

interface LanguageOption {
  name: string;
  code: Language;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  imports: [
    SelectModule,
    FormsModule,
  ],
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher implements OnInit {
  private readonly transloco = inject(TranslocoService);

  protected langs: LanguageOption[] | undefined;

  ngOnInit() {
    this.langs = [
      {
        name: 'HUN',
        code: Language.Hungarian,
        flag: 'hu',
      },
      {
        name: 'ENG',
        code: Language.English,
        flag: 'gb',
      },
    ];
  }

  selectedLang() {
    return this.transloco.getActiveLang();
  }

  changeLang(lang: string) {
    this.transloco.setActiveLang(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
