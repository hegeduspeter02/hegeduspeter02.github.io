import { provideHttpClient } from '@angular/common/http';
import {
  type ApplicationConfig,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { MyPreset } from './primeng/mypreset';
import { initTransloco } from './transloco/transloco-init';
import { TranslocoHttpLoader } from './transloco/transloco-loader';
import { Language } from './utils/enums';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
        },
      },
      ripple: true,
    }),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: [
          Language.English,
          Language.Hungarian,
        ],
        defaultLang: Language.Hungarian,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideAppInitializer(initTransloco),
  ],
};
