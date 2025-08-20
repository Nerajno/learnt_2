// astro.config.mjs
import { defineConfig } from 'astro/config';

// Check the environment
const isProd = process.env.NODE_ENV === 'production';

// Set site based on environment
const site = isProd
  ? 'https://your-production-domain.com'
  : 'http://localhost:3000';

export default defineConfig({
  site,
  // ...other config options
});
