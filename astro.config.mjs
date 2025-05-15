import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),    
    mdx()
  ],
  site: 'https://codewithsimon.dev',  
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});