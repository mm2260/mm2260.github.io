import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import katex from 'astro-katex';
import mdx from '@astrojs/mdx';

// https://astro.build/config
import image from "@astrojs/image";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), katex(), mdx(), image()],
  site: 'https://mdmeh.com'
});
