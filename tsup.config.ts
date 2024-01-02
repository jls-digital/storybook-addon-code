import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/register.tsx'],
  bundle: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  format: ['esm'],
});
