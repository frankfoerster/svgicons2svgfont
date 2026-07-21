import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    iconsdir: 'src/iconsdir.ts'
  },
  format: ['esm'],
  clean: true,
  dts: true
});
