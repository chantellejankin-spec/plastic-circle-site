import { defineConfig } from 'astro/config';

// Served from chantellejankin-spec.github.io/plastic-circle-site/ until a
// custom domain is reserved and pointed at GitHub Pages (same pattern as
// oriviadiamonds.com / ayarafoundation.com). Once that happens, drop `base`,
// update `site` to the custom domain, and add a public/CNAME file.
export default defineConfig({
  site: 'https://chantellejankin-spec.github.io',
  base: '/plastic-circle-site/',
});
