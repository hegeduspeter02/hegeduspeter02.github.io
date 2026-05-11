import { provideHttpClient } from '@angular/common/http';
import {
  type ApplicationConfig,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { initTransloco } from './transloco/transloco-init';
import { TranslocoHttpLoader } from './transloco/transloco-loader';
import { Language } from './utils/enums';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
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
