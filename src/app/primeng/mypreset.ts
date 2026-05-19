import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  components: {
    drawer: {
      content: {
        padding: '0',
      },
    },
  },
});
