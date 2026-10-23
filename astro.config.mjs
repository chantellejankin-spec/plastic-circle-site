import { defineConfig } from 'astro/config';

// Custom domain: www.plasticcircles.com (set as the custom domain in the
// GitHub Pages settings), apex A-records point to GitHub Pages too so
// plasticcircles.com redirects to the www version.
export default defineConfig({
  site: 'https://www.plasticcircles.com',
});
