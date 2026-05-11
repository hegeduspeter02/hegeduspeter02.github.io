import { inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { lastValueFrom } from 'rxjs';
import config from '../../../transloco.config';
import { Language } from '../utils/enums';

export async function initTransloco() {
  const transloco = inject(TranslocoService);
  const lang =
    localStorage.getItem('lang') ?? config.defaultLang ?? Language.Hungarian;

  transloco.setActiveLang(lang);
  await lastValueFrom(transloco.load(lang));
}
