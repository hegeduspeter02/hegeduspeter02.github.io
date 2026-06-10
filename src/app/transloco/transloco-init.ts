import { inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { lastValueFrom } from 'rxjs';
import config from '../../../transloco.config';
import { Language } from '../utils/enums';

function getBrowserLang(): string | undefined {
  const langugeTag = navigator.language;
  const baseLang = langugeTag.split('-')[0];

  return Object.values(Language).includes(baseLang as Language)
    ? baseLang
    : undefined;
}

export async function initTransloco() {
  const transloco = inject(TranslocoService);
  const lang =
    localStorage.getItem('lang') ??
    getBrowserLang() ??
    config.defaultLang ??
    Language.Hungarian;

  transloco.setActiveLang(lang);
  await lastValueFrom(transloco.load(lang));
}
