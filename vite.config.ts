import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(({ isSsrBuild }) => ({
  base: '/',
  build: isSsrBuild
    ? {
        target: 'node22',
        rollupOptions: {
          output: {
            entryFileNames: 'entry-server.mjs',
          },
        },
      }
    : {
        target: 'es2022',
        rollupOptions: {
          input: {
            home: page('./index.html'),
            books: page('./books/index.html'),
            badoga: page('./books/badoga/index.html'),
            marbella: page('./books/marbella/index.html'),
            ambakvid: page('./books/ambakvid/index.html'),
            aragbat: page('./books/aragbat/index.html'),
            universe: page('./universe/index.html'),
            gallery: page('./gallery/index.html'),
            writing: page('./writing/index.html'),
            about: page('./about/index.html'),
          },
        },
      },
}));
