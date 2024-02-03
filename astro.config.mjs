import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import cookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    cookieconsent({
      gui_options: {
          consent_modal: {
              layout: 'box',
              position: 'bottom right',
              transition: 'slide',
              swap_buttons: false,
              equalWeightButtons: false,
          },
          settings_modal: {
              layout: 'box',
              transition: 'slide',
              equalWeightButtons: false,
          }
      }
    }),
  ]
});