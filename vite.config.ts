import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

export default defineConfig(({ isPreview }) => ({
  css: { postcss: { plugins: [tailwindcss()] } },
  appType: isPreview ? 'mpa' : undefined,
  plugins: isPreview ? [] : [vinext()],
}));
