// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ============================================
  // DEPLOYMENT CONFIG — CHANGE THESE AS NEEDED
  // ============================================
  //
  // ============================================
  // CURRENT: Deploying to GitHub Pages first
  // ============================================
  site: 'https://survivewithai.github.io',
  base: '/buildwithbrian.ai',

  // When you're ready to use the custom domain later, change to:
  // site: 'https://buildwithbrian.ai',
  // base: '/',

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});