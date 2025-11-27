// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
  },
  site: 'https://natsuiro.kirinohanovel.com',
  integrations: [react(), sitemap()],
});
