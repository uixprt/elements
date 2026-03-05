import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      outDir: 'dist',
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'svg-icon': resolve(__dirname, 'src/components/svg-icon/index.ts'),
        button: resolve(__dirname, 'src/components/button/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // No externals — self-contained bundle
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
        },
      ],
    },
    sourcemap: true,
    minify: false,
  },
});
