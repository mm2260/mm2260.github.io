import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// https://astro.build/config
import image from "@astrojs/image";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), image()],
  site: 'https://mdmeh.com',
});