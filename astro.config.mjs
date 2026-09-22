// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://emanuellovin255.github.io',
  base: '/hotel-international',
  integrations: [sitemap()],
  build: {
    // CSS și JS în fișiere externe, fără blocuri inline în HTML
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },
});
