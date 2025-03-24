import { defineConfig } from 'tsup';
import { globalPackages as globalManagerPackages } from "storybook/internal/manager/globals";

export default defineConfig({
  entry: ['src/register.tsx'],
  bundle: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  format: ['esm'],
  platform: "browser",
  external: globalManagerPackages,
});
