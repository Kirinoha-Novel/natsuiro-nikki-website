// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://kirinohanovel.com/natsuiro/',
  image: {
    responsiveStyles: true,
  },
  integrations: [react()],
});
