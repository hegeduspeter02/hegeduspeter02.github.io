import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';
import { Language } from './src/app/utils/enums';

const config: TranslocoGlobalConfig = {
  defaultLang: Language.Hungarian,
  langs: [
    Language.English,
    Language.Hungarian,
  ],
  keysManager: {},
};

export default config;
