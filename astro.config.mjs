import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// Archive build of the Decode Travel website.
// The original domain (decode.travel) has expired; the archive is served
// as a sub-path of chain4travel.com.
// https://astro.build/config
export default defineConfig({
  site: 'https://chain4travel.com',
  base: '/decode-travel',
  integrations: [tailwind(), icon()]
});
