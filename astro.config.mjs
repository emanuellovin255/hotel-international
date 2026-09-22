// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Pe Vercel site-ul stă în rădăcina domeniului; pe GitHub Pages, în /hotel-international.
const onVercel = !!process.env.VERCEL;

export default defineConfig({
  site: onVercel ? 'https://hotel-international.vercel.app' : 'https://emanuellovin255.github.io',
  base: onVercel ? '/' : '/hotel-international',
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
